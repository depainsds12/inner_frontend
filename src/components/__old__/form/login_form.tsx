import * as Form from "@radix-ui/react-form";
import { FC } from "react";
import Polygon from "../../polygon/polygon";
import Typography from "@/src/components/typography/typography";
import { generateHexagonPoints } from "@/src/components/polygon/utils";

// Constants for reusability and maintainability
const HEXAGON_CONFIG = {
  width: 331,
  height: 57,
  style: {
    width: "329.76px",
    position: "relative" as const,
  },
} as const;

// Interface for form field props
interface FormFieldProps {
  name: string;
  placeholder: string;
  type?: "text" | "email";
  showForgot?: boolean;
}

// Reusable form field component
const FormField: FC<FormFieldProps> = ({
  name,
  placeholder,
  type = "text",
  showForgot = false,
}) => (
  <Form.Field className="scale-[0.8] sm:scale-[1]" name={name}>
    <Form.Control asChild>
      <Polygon
        overflow={false}
        stroke="white"
        strokeWidth={2}
        fill="#564A8D"
        points={generateHexagonPoints({
          width: HEXAGON_CONFIG.width,
          height: HEXAGON_CONFIG.height,
        })}
        style={HEXAGON_CONFIG.style}
      >
        <Typography
          required
          placeholder={placeholder}
          type={type}
          component="input"
          className="mt-[2px] flex h-4/5 w-4/5 scale-y-150 justify-center bg-transparent p-1 font-bold text-white placeholder:text-center placeholder:text-white focus:outline-none"
        />
      </Polygon>
    </Form.Control>
    {showForgot && (
      <Typography className="w-full pr-3 pt-6 text-end text-white sm:pr-0">
        forgot
      </Typography>
    )}
  </Form.Field>
);

// Main LoginForm component
const LoginForm = ({ isPressed }: { isPressed: boolean }) => {
  return (
    <div
      className={`flex w-4/5 flex-col items-center justify-center pb-2 pt-4 sm:gap-4`}
    >
      <FormField name="name" placeholder="First name" />
      <FormField name="email" placeholder="Email" type="email" showForgot />
    </div>
  );
};

export default LoginForm;
