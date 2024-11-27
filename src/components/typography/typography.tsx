// Typography.tsx

import React, { JSX } from "react";

// Define types for variant options
type VariantType =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl"
  | "fluid-xs"
  | "fluid-sm"
  | "fluid-base"
  | "fluid-lg"
  | "fluid-xl"
  | "fluid-2xl"
  | "fluid-3xl"
  | "fluid-4xl"
  | "fluid-5xl"
  | "fluid-6xl"
  | "fluid-7xl"
  | "fluid-40"
  | "display"
  | "heading"
  | "subheading"
  | "caption"
  | "overline";

// Define type for component options
type ComponentType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "input"
  | "textarea";

// Variant classes mapping
const variantClasses: Record<VariantType, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
  "fluid-xs": "text-fluid-xs",
  "fluid-sm": "text-fluid-sm",
  "fluid-base": "text-fluid-base",
  "fluid-lg": "text-fluid-lg",
  "fluid-xl": "text-fluid-xl",
  "fluid-2xl": "text-fluid-2xl",
  "fluid-3xl": "text-fluid-3xl",
  "fluid-4xl": "text-fluid-4xl",
  "fluid-5xl": "text-fluid-5xl",
  "fluid-6xl": "text-fluid-6xl",
  "fluid-7xl": "text-fluid-7xl",
  "fluid-40": "text-fluid-40",
  display: "text-display font-bold",
  heading: "text-heading font-semibold",
  subheading: "text-subheading font-medium",
  caption: "text-caption font-normal",
  overline: "text-overline font-medium uppercase",
};

// Component map for rendering elements
const componentMap: Record<ComponentType, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
  input: "input",
  textarea: "textarea",
};

// Type for input-specific props
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  component: "input";
}

// Type for textarea-specific props
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  component: "textarea";
}

// Type for text element props
interface TextElementProps extends React.HTMLAttributes<HTMLElement> {
  component?: Exclude<ComponentType, "input" | "textarea">;
}

// Union type for all possible props
type TypographyProps = (InputProps | TextareaProps | TextElementProps) & {
  variant?: VariantType;
  className?: string;
};

// Typography component
const Typography: React.FC<TypographyProps> = ({
  variant = "base",
  component = "p",
  className = "",
  children,
  ...props
}) => {
  // Get the appropriate HTML element
  const Component = componentMap[component];

  // Get the appropriate variant class
  const variantClass = variantClasses[variant];

  // For input and textarea, we don't render children
  if (component === "input" || component === "textarea") {
    return (
      <Component
        className={`${variantClass} ${className}`}
        {...(props as any)} // Type assertion needed due to union type
      />
    );
  }

  // For all other elements, render with children
  return (
    <Component className={`${variantClass} ${className}`} {...(props as any)}>
      {children}
    </Component>
  );
};

export default Typography;
