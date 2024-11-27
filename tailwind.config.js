/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Fixed sizes
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.02em" }],
        sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.015em" }],
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0.005em" }],
        xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "0" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.005em" }],
        "3xl": [
          "1.875rem",
          { lineHeight: "2.25rem", letterSpacing: "-0.01em" },
        ],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.015em" }],
        "5xl": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "7xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.035em" }],
        "9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.04em" }],

        // Fluid sizes
        "fluid-xs": [
          "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",
          { lineHeight: "1.5", letterSpacing: "0.02em" },
        ],
        "fluid-sm": [
          "clamp(0.875rem, 0.8rem + 0.375vw, 1rem)",
          { lineHeight: "1.5", letterSpacing: "0.015em" },
        ],
        "fluid-base": [
          "clamp(1rem, 0.925rem + 0.375vw, 1.125rem)",
          { lineHeight: "1.5", letterSpacing: "0.01em" },
        ],
        "fluid-lg": [
          "clamp(1.125rem, 1rem + 0.625vw, 1.375rem)",
          { lineHeight: "1.4", letterSpacing: "0.005em" },
        ],
        "fluid-xl": [
          "clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)",
          { lineHeight: "1.3", letterSpacing: "0" },
        ],
        "fluid-2xl": [
          "clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem)",
          { lineHeight: "1.2", letterSpacing: "-0.005em" },
        ],
        "fluid-3xl": [
          "clamp(1.875rem, 1.5rem + 1.875vw, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.01em" },
        ],
        "fluid-4xl": [
          "clamp(2.25rem, 1.75rem + 2.5vw, 3.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.015em" },
        ],
        "fluid-5xl": [
          "clamp(3rem, 2.25rem + 3.75vw, 5rem)",
          { lineHeight: "1", letterSpacing: "-0.02em" },
        ],
        "fluid-6xl": [
          "clamp(3.75rem, 2.75rem + 5vw, 6.25rem)",
          { lineHeight: "1", letterSpacing: "-0.025em" },
        ],
        "fluid-7xl": [
          "clamp(4.5rem, 3.25rem + 6.25vw, 7.5rem)",
          { lineHeight: "1", letterSpacing: "-0.03em" },
        ],
        "fluid-40": [
          "clamp(2.5rem, 2rem + 2.5vw, 3.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.015em" },
        ],
      },
      colors: {
        "purple-text": "#9368BC",
        "purple-text-light": "#8858B5",
        purplish: "#7E5DA1",
        "purple-mid": "#AF5CAA",
        "purple-bright": "#BB4BAD",
        "purple-dark": "#5E3D84",
        "purple-soft-light": "#ECEAF5",
        "pink-text": "#AE5CAA",
        "orange-mid": "#F9A819",
        "orange-dark": "#FAA81A",
        "pink-arrow": "#FF008A",
        "yellow-dark": "#FFF500",
        "yellow-light": "#FFF200",

        // Platform colors
        platformcolor1: "var(--platformcolor1)",
        platformcolor2: "var(--platformcolor2)",
        platformcolor3: "var(--platformcolor3)",
        platformcolor4: "var(--platformcolor4)",
        platformcolor5: "var(--platformcolor5)",
        platformcolor6: "var(--platformcolor6)",
        platformcolor7: "var(--platformcolor7)",
        platformcolor8: "var(--platformcolor8)",
        platformcolor9: "var(--platformcolor9)",
        platformcolor10: "var(--platformcolor10)",
        platformcolor11: "var(--platformcolor11)",
        platformcolor12: "var(--platformcolor12)",
        platformcolor13: "var(--platformcolor13)",
        platformcolor14: "var(--platformcolor14)",

        // Sphere colors
        spherecolor1: "var(--spherecolor1)",
        spherecolor2: "var(--spherecolor2)",
        spherecolor3: "var(--spherecolor3)",
        spherecolor4: "var(--spherecolor4)",
        spherecolor5: "var(--spherecolor5)",
        spherecolor6: "var(--spherecolor6)",
        spherecolor7: "var(--spherecolor7)",
        spherecolor8: "var(--spherecolor8)",
        spherecolor9: "var(--spherecolor9)",
        spherecolor10: "var(--spherecolor10)",
        spherecolor11: "var(--spherecolor11)",
        spherecolor12: "var(--spherecolor12)",
        spherecolor13: "var(--spherecolor13)",
        spherecolor14: "var(--spherecolor14)",

        // Seed colors
        seedcolor1: "var(--seedcolor1, var(--spherecolor1))",
        seedcolor2: "var(--seedcolor2, var(--spherecolor2))",
        seedcolor3: "var(--seedcolor3, var(--spherecolor3))",
        seedcolor4: "var(--seedcolor4, var(--spherecolor4))",
        seedcolor5: "var(--seedcolor5, var(--spherecolor5))",
        seedcolor6: "var(--seedcolor6, var(--spherecolor6))",
        seedcolor7: "var(--seedcolor7, var(--spherecolor7))",
        seedcolor8: "var(--seedcolor8, var(--spherecolor8))",
        seedcolor9: "var(--seedcolor9, var(--spherecolor9))",
        seedcolor10: "var(--seedcolor10, var(--spherecolor10))",
        seedcolor11: "var(--seedcolor11, var(--spherecolor11))",
        seedcolor12: "var(--seedcolor12, var(--spherecolor12))",
        seedcolor13: "var(--seedcolor13, var(--spherecolor13))",
        seedcolor14: "var(--seedcolor14, var(--spherecolor14))",

        // User colors
        usercolor1: "var(--usercolor1)",
        usercolor2: "var(--usercolor2)",
        usercolor3: "var(--usercolor3)",
        usercolor4: "var(--usercolor4)",
        usercolor5: "var(--usercolor5)",
        usercolor6: "var(--usercolor6)",
        usercolor7: "var(--usercolor7)",
        usercolor8: "var(--usercolor8)",
        usercolor9: "var(--usercolor9)",
        usercolor10: "var(--usercolor10)",
        usercolor11: "var(--usercolor11)",
        usercolor12: "var(--usercolor12)",
        usercolor13: "var(--usercolor13)",
        usercolor14: "var(--usercolor14)",
      },
    },
  },
  plugins: [],
};
