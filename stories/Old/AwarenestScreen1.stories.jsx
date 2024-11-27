import Screen1 from "@/src/components/__old__/awarenest/screen1";

export default {
  title: "Old/AwarenestScreen1",
  component: Screen1,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#333333" },
        { name: "purple", value: "#8858B5" },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "360px",
            height: "800px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1440px",
            height: "900px",
          },
        },
        ultrawide: {
          name: "Ultra Wide",
          styles: {
            width: "2560px",
            height: "1440px",
          },
        },
      },
      defaultViewport: "desktop",
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-200">
        <Story />
      </div>
    ),
  ],
};

// Default desktop view
export const Desktop = {
  render: () => <Screen1 />,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

// Mobile view
export const Mobile = {
  render: () => <Screen1 />,
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
};

// Tablet view
export const Tablet = {
  render: () => <Screen1 />,
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

// Ultra wide view
export const UltraWide = {
  render: () => <Screen1 />,
  parameters: {
    viewport: {
      defaultViewport: "ultrawide",
    },
  },
};

// Animated entrance
export const AnimatedEntrance = {
  render: () => {
    const AnimatedWrapper = () => {
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
      }, []);

      return (
        <div
          className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <Screen1 />
        </div>
      );
    };

    return <AnimatedWrapper />;
  },
};

// Interactive controls demo
export const InteractiveControls = {
  render: () => {
    return (
      <div className="relative">
        <Screen1 />
        <div className="fixed bottom-4 left-4 z-50 rounded-lg bg-white p-4 shadow-lg">
          <h3 className="mb-2 font-bold">Interaction Guide:</h3>
          <ul className="space-y-1 text-sm">
            <li>• Click caterpillar, hive, or butterfly icons</li>
            <li>• Observe state changes in controls</li>
            <li>• Notice responsive layout changes</li>
          </ul>
        </div>
      </div>
    );
  },
};

// Loading state
export const LoadingState = {
  render: () => {
    const LoadingWrapper = () => {
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
      }, []);

      return (
        <div className="relative">
          <div
            className={`transition-opacity duration-500 ${isLoading ? "opacity-50" : "opacity-100"}`}
          >
            <Screen1 />
          </div>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
              <div className="space-y-4 text-center">
                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-b-2 border-purple-600"></div>
                <p className="font-semibold text-purple-600">
                  Loading awarenest...
                </p>
              </div>
            </div>
          )}
        </div>
      );
    };

    return <LoadingWrapper />;
  },
};

// Responsive behavior demo
export const ResponsiveBehavior = {
  render: () => {
    const ResponsiveWrapper = () => {
      const [viewport, setViewport] = useState("desktop");

      return (
        <div className="space-y-4">
          <div className="fixed left-4 top-4 z-50 rounded-lg bg-white p-4 shadow-lg">
            <h3 className="mb-2 font-bold">Current Viewport: {viewport}</h3>
            <div className="space-x-2">
              {["mobile", "tablet", "desktop", "ultrawide"].map((size) => (
                <button
                  key={size}
                  onClick={() => setViewport(size)}
                  className={`rounded px-3 py-1 ${
                    viewport === size
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div
            className={`transition-all duration-500 ${
              viewport === "mobile"
                ? "max-w-[360px]"
                : viewport === "tablet"
                  ? "max-w-[768px]"
                  : viewport === "desktop"
                    ? "max-w-[1440px]"
                    : "max-w-full"
            } mx-auto`}
          >
            <Screen1 />
          </div>
        </div>
      );
    };

    return <ResponsiveWrapper />;
  },
};

// Accessibility demo
export const AccessibilityDemo = {
  render: () => {
    return (
      <div className="relative">
        <Screen1 />
        <div className="fixed bottom-4 left-4 z-50 rounded-lg bg-white p-4 shadow-lg">
          <h3 className="mb-2 font-bold">Accessibility Features:</h3>
          <ul className="space-y-1 text-sm">
            <li>• Tab through interactive elements</li>
            <li>• ARIA labels for icons</li>
            <li>• Keyboard navigation support</li>
            <li>• Focus indicators visible</li>
          </ul>
        </div>
      </div>
    );
  },
};
