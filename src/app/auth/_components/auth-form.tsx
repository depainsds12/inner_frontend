"use client";

import Polygon from "@/src/components/polygon/polygon";
import RadialPolygon from "@/src/components/polygon/radial-polygon/RadialPolygon";
import { generateHexagonPoints } from "@/src/components/polygon/utils";
import TitleBracket from "@/src/components/typography/title_bracket";
import Typography from "@/src/components/typography/typography";
import useBreakpoints from "@/src/hooks/media_query";
import { CustomFormField } from "@/src/types/form.types";
import * as Form from "@radix-ui/react-form";
import Link from "next/link";
import React, { CSSProperties, FormEvent } from "react";
import { twMerge } from "tailwind-merge";

// Types and Interfaces
interface Colors {
  TEXT_YELLOW: string;
  PURPLE: string;
  STROKE_LIGHT: string;
  BACKGROUND_DARK: string;
}

// Constants for reusability and maintainability
const HEXAGON_CONFIG: SharedConfig = {
  hexagonDimensions: {
    width: 330,
    height: 55,
  },
  style: {
    width: "330px",
    position: "relative" as const,
  },
} as const;

interface ContentText {
  title: string;
  splitTextFirst: string;
  splitTextSecond: string;
}

interface ViewProps {
  showAction?: boolean;
  contentText: ContentText;
  formFields: CustomFormField[];
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isPressed?: boolean;
  error?: string;
}

// Constants
export const COLORS: Colors = {
  TEXT_YELLOW: "#FFF200",
  PURPLE: "#8858B5",
  STROKE_LIGHT: "#8E8AAB",
  BACKGROUND_DARK: "rgba(0, 0, 0, 0.3)",
} as const;

interface TitleProps {
  title: string;
  splitTextFirst: string;
  splitTextSecond: string;
}

export interface SharedConfig {
  style: CSSProperties;
  hexagonDimensions: {
    width: number;
    height: number;
  };
}

interface SubmitButtonProps {
  style: CSSProperties;
  isPressed?: boolean;
  buttonConfig: SharedConfig;
  showAction?: boolean;
  btnText?: string;
  isSm?: boolean;
}

const SHARED_CONFIG: SharedConfig = {
  style: {
    width: "290px",
    position: "relative",
  },
  hexagonDimensions: { width: 290, height: 60 },
} as const;

// Components
const Title: React.FC<TitleProps> = ({
  title,
  splitTextFirst,
  splitTextSecond,
}) => (
  <>
    <Typography className="pb-2 text-white" variant="base">
      {title}
    </Typography>
    <div className="flex items-center">
      <TitleBracket text="⟨" />
      <Typography
        className="!text-[32px] font-extrabold text-white"
        component="span"
      >
        {splitTextFirst}
      </Typography>
      <TitleBracket text="⟩" />
      <Typography
        className="!text-[32px] font-extrabold text-[#FFF200]"
        component="span"
      >
        {splitTextSecond}
      </Typography>
    </div>
  </>
);

// Submit button component
const SubmitButton: React.FC<SubmitButtonProps> = ({
  style,
  isPressed,
  buttonConfig,
  showAction,
  btnText,
  isSm,
}) => {
  return (
    <button className="scale-[0.9] sm:scale-[1]">
      <Polygon
        className="flex flex-col items-center justify-center text-[#FFF200]"
        fill={COLORS.PURPLE}
        stroke={COLORS.TEXT_YELLOW}
        strokeWidth={3}
        style={{
          cursor: "pointer",
          ...style,
        }}
        points={generateHexagonPoints(buttonConfig.hexagonDimensions)}
      >
        <Typography
          className={twMerge(
            "text-[#FFF200]",
            showAction && "!text-[28px] font-extrabold",
            isSm && showAction && "!text-[22px]",
          )}
          component="span"
        >
          {btnText || "enter"}
        </Typography>
        {isPressed && (
          <span
            aria-hidden="true"
            className="absolute inset-0 animate-ping rounded-full bg-white/25"
          />
        )}
      </Polygon>
    </button>
  );
};

const FormField: React.FC<CustomFormField> = ({
  name,
  placeholder,
  type = "text",
  showForgot = false,
}) => (
  <Form.Field className="scale-[0.95] sm:scale-[1]" name={name}>
    <Form.Control asChild>
      <Polygon
        overflow={false}
        stroke="white"
        strokeWidth={2}
        fill="#564A8D"
        points={generateHexagonPoints(HEXAGON_CONFIG.hexagonDimensions)}
        style={HEXAGON_CONFIG.style}
      >
        <Typography
          required
          placeholder={placeholder}
          type={type}
          component="input"
          name={name}
          className="flex justify-center bg-transparent font-medium text-white placeholder:text-center placeholder:text-white focus:outline-none"
        />
      </Polygon>
    </Form.Control>
    {showForgot && (
      <Link
        className="mt-4 block w-full cursor-pointer pr-3 text-end text-white sm:pr-0"
        href="/auth/forgot-password"
      >
        forgot
      </Link>
    )}
  </Form.Field>
);

// Main component
const AuthForm: React.FC<ViewProps> = ({
  contentText,
  showAction = true,
  formFields,
  isPressed,
  error,
  handleSubmit,
}) => {
  const { isSm } = useBreakpoints();

  const octagonSize = isSm ? 400 : 530;

  return (
    <Form.Root onSubmit={handleSubmit}>
      <div className="absolute top-[120px] flex w-full justify-center sm:top-[72px]">
        <RadialPolygon
          sides={8}
          width={octagonSize}
          height={octagonSize}
          boundary={{
            outer: {
              stroke: COLORS.STROKE_LIGHT,
              strokeWidth: 4,
            },
            radii: {
              strokeWidth: 0,
            },
          }}
          backgroundColor={COLORS.BACKGROUND_DARK}
        />
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <Title {...contentText} />
            <div className="mt-5 flex flex-col items-center gap-4 sm:mt-10">
              <div
                className={`flex flex-col items-center justify-center gap-2 sm:gap-4`}
              >
                {formFields.map((field) => (
                  <FormField key={field.name} {...field} />
                ))}
              </div>
              {!showAction && (
                <Form.Submit asChild>
                  <SubmitButton
                    isSm={isSm}
                    btnText="send password"
                    style={HEXAGON_CONFIG.style}
                    buttonConfig={HEXAGON_CONFIG}
                  />
                </Form.Submit>
              )}
            </div>
          </div>
        </div>
      </div>
      {showAction && (
        <div className="absolute left-1/2 top-[600px] z-10 -translate-x-1/2 -translate-y-[36px]">
          <Form.Submit asChild>
            <SubmitButton
              isSm={isSm}
              btnText="submit"
              isPressed={isPressed}
              showAction={showAction}
              style={SHARED_CONFIG.style}
              buttonConfig={SHARED_CONFIG}
            />
          </Form.Submit>
          <Typography className="mt-8 text-center font-semibold text-white">
            {error}
          </Typography>
        </div>
      )}
    </Form.Root>
  );
};

export default AuthForm;
