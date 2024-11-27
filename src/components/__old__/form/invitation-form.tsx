import Polygon from "@/src/components/polygon/polygon";
import Typography from "@/src/components/typography/typography";
import useBreakpoints from "@/src/hooks/media_query";
import useWindowWidth from "@/src/hooks/use-window-width";
import * as Form from "@radix-ui/react-form";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  generateHexagonPoints,
  generateOctagonPoints,
} from "@/src/components/polygon/utils";

// Form submission interface
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Constants for reusability and maintainability
const OCTAGON_CONFIG = {
  width: 300,
  height: 50,
  style: {
    position: "relative" as const,
  },
} as const;

// Interface for form field props
interface FormFieldProps {
  name: string;
  placeholder: string;
  type?: "text" | "password" | "email" | "textarea";
  className?: string;
  message?: string;
  width?: number;
  height?: number;
}

// Reusable form field component
const FormField: React.FC<FormFieldProps> = ({
  name,
  placeholder,
  type = "text",
  className,
  message = "",
  width = OCTAGON_CONFIG.width,
  height = OCTAGON_CONFIG.height,
}) => {
  const windowWidth = useWindowWidth();
  const { isSm } = useBreakpoints();
  const inputWidth = isSm ? windowWidth - 48 : width;

  return (
    <Form.Field className={twMerge("sm:scale-[1]", className)} name={name}>
      {message && (
        <Form.Message className="FormMessage" match="valueMissing">
          {message}
        </Form.Message>
      )}
      <Form.Control asChild>
        <Polygon
          overflow={false}
          stroke="#FFFFFF32"
          strokeWidth={2}
          fill="#8858B5"
          points={generateOctagonPoints({
            width: inputWidth,
            height,
            xCut: 12,
          })}
          style={{
            width: inputWidth,
            height,
            zIndex: 50,
          }}
          className="placeholder-white/80"
        >
          <Typography
            required
            placeholder={placeholder}
            type={type}
            component={type === "textarea" ? "textarea" : "input"}
            className="max-w-4/5 pointer-events-auto h-4/5 w-4/5 items-center justify-center bg-transparent text-center !text-[20px] font-bold text-white placeholder:text-white/80 focus:outline-none"
          />
        </Polygon>
      </Form.Control>
    </Form.Field>
  );
};

// Main InvitationForm component
const InvitationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isPressed, setIsPressed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Form.Root
      onSubmit={handleSubmit}
      className="relative flex size-full flex-col items-center justify-center px-6 py-20 sm:pt-28"
    >
      <div className="grid grid-cols-1 gap-5 sm:max-w-[620px] sm:grid-cols-2">
        <FormField
          name="firstName"
          placeholder="| first name"
          message="Please enter your first name"
        />
        <FormField
          name="lastName"
          placeholder="| last name"
          message="Please enter your last name"
        />
        <FormField
          name="email"
          placeholder="| email"
          type="email"
          message="Please enter your email"
        />
        <FormField
          name="password"
          placeholder="| password"
          type="password"
          message="Please enter your password"
        />
        <FormField
          width={620}
          height={150}
          name="inspiration"
          placeholder="| we love meeting new people. what inspires you to journey with us?"
          type="textarea"
        />
      </div>
      <Form.Submit className="absolute bottom-[-30px]">
        <Polygon
          points={generateHexagonPoints({ width: 280, height: 60 })}
          style={{
            width: 280,
            height: 60,
          }}
          fill="#FFA600"
          strokeWidth={0}
        >
          <span className="text-[28px] font-extrabold text-white">
            invite me
          </span>
          {/* Ripple effect */}
          {isPressed && (
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping rounded-full bg-white/25"
            />
          )}
        </Polygon>
      </Form.Submit>
    </Form.Root>
  );
};

export default InvitationForm;
