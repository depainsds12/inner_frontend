import JournalCardsWithTagSection from "@/src/components/__old__/awarenest/journalCardsSection";
import { useEffect, useState } from "react";
export default {
  title: "Old/AwarenestJournalCardsWithTagSection",
  component: JournalCardsWithTagSection,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "purple",
      values: [
        { name: "purple", value: "#564A8D" },
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#333333" },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "360px",
            height: "900px",
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
      },
      defaultViewport: "desktop",
    },
  },
  argTypes: {
    bgColor: {
      control: "text",
      description: "Background color class for the container",
      defaultValue: "bg-purple-inner-octagon",
    },
  },
};

// Default desktop view
export const Desktop = {
  render: (args) => <JournalCardsWithTagSection {...args} />,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

// Mobile view with dropdown closed
export const MobileClosed = {
  render: (args) => <JournalCardsWithTagSection {...args} />,
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
};

// Mobile view with dropdown open
export const MobileOpen = {
  render: () => {
    // Using a wrapper to handle initial state
    const MobileWrapper = () => {
      const [isOpen, setIsOpen] = useState(true);

      useEffect(() => {
        // Simulate click to open dropdown
        const timer = setTimeout(() => {
          const button = document.querySelector(".section-heading-arrows");
          if (button) {
            button.click();
          }
        }, 100);

        return () => clearTimeout(timer);
      }, []);

      return <JournalCardsWithTagSection />;
    };

    return <MobileWrapper />;
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
};

// Tablet view
export const Tablet = {
  render: (args) => <JournalCardsWithTagSection {...args} />,
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

// Interactive demo with controls
export const InteractiveDemo = {
  render: (args) => (
    <div className="space-y-4">
      <JournalCardsWithTagSection {...args} />
      <div className="fixed bottom-4 left-4 rounded-lg bg-white p-4 shadow-lg">
        <h3 className="mb-2 font-bold">Interaction Guide:</h3>
        <ul className="space-y-1 text-sm">
          <li>• Click header to toggle dropdown (mobile/tablet)</li>
          <li>• Use arrow buttons to navigate cards</li>
          <li>• Swipe cards on mobile</li>
        </ul>
      </div>
    </div>
  ),
};

// Custom background color
export const CustomBackground = {
  render: (args) => (
    <JournalCardsWithTagSection {...args} bgColor="bg-blue-600" />
  ),
};

// Loading state simulation
export const LoadingState = {
  render: () => {
    const LoadingWrapper = () => {
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
      }, []);

      return (
        <div
          className={`transition-opacity duration-300 ${isLoading ? "opacity-50" : "opacity-100"}`}
        >
          <JournalCardsWithTagSection />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
              <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-white"></div>
            </div>
          )}
        </div>
      );
    };

    return <LoadingWrapper />;
  },
};

// Error state simulation
export const ErrorState = {
  render: () => {
    const ErrorWrapper = () => {
      const [hasError, setHasError] = useState(true);

      useEffect(() => {
        const timer = setTimeout(() => setHasError(false), 3000);
        return () => clearTimeout(timer);
      }, []);

      if (hasError) {
        return (
          <div className="bg-purple-inner-octagon flex min-h-[600px] items-center justify-center">
            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <h3 className="mb-2 text-xl font-bold text-red-600">
                Error Loading Cards
              </h3>
              <p className="text-gray-600">Please try again later</p>
              <button
                className="mt-4 rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
                onClick={() => setHasError(false)}
              >
                Retry
              </button>
            </div>
          </div>
        );
      }

      return <JournalCardsWithTagSection />;
    };

    return <ErrorWrapper />;
  },
};

// Keyboard navigation demo
export const KeyboardNavigation = {
  render: (args) => (
    <div>
      <JournalCardsWithTagSection {...args} />
      <div className="fixed bottom-4 left-4 rounded-lg bg-white p-4 shadow-lg">
        <h3 className="mb-2 font-bold">Keyboard Controls:</h3>
        <ul className="space-y-1 text-sm">
          <li>• Left/Right arrows to navigate</li>
          <li>• Space/Enter to toggle dropdown</li>
          <li>• Tab to focus controls</li>
        </ul>
      </div>
    </div>
  ),
};
