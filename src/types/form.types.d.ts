import { FormFieldProps } from "@radix-ui/react-form";

export interface CustomFormField extends FormFieldProps {
  showForgot?: boolean;
  placeholder: string;
  name: string;
  type?: "text" | "email" | "password";
}
