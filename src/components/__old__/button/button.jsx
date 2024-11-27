import React from "react";

const AccessibleButton = ({
  children,
  onClick,
  disabled = false,
  color = "blue", // 'blue', 'purple', 'green', 'orange'
  size = "default",
  ariaLabel,
  className = "",
  spanClassName = "",
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);

  const colorVariants = {
    transparent:
      "bg-transparent hover:bg-transparent active:transparent focus:transparent",
    blue: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-500",
    purple:
      "bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:ring-purple-500",
    green:
      "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 focus:ring-emerald-500",
    orange:
      "bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:ring-orange-500",
  };

  const sizeVariants = {
    "0width": "w-0 h-0",
    small: "px-3 py-1.5 text-sm",
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const handleClick = async (event) => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);

    if (onClick) {
      setIsLoading(true);
      try {
        await onClick(event);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      aria-label={
        ariaLabel || (typeof children === "string" ? children : undefined)
      }
      aria-busy={isLoading}
      aria-disabled={disabled}
      className={`relative inline-flex transform items-center justify-center rounded-lg font-medium text-white shadow-lg transition-all duration-200 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 ${colorVariants[color]} ${sizeVariants[size]} ${
        disabled
          ? "cursor-not-allowed opacity-50"
          : "hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-95"
      } ${className} `}
    >
      {/* Gradient overlay */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 rounded-lg bg-gradient-to-r from-white/10 to-transparent ${spanClassName}`}
      />

      {/* Loading spinner */}
      {isLoading && (
        <span
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        </span>
      )}

      {/* Button content */}
      <span
        className={`flex items-center gap-2 transition-opacity duration-200 ${isLoading ? "opacity-0" : "opacity-100"} `}
      >
        {children}
      </span>

      {/* Ripple effect */}
      {isPressed && (
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-ping rounded-lg bg-white/25"
        />
      )}
    </button>
  );
};

export default AccessibleButton;
