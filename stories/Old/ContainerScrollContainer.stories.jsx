import ScrollContainer from "@/src/components/__old__/container/scroll";

export default {
  title: "Old/ContainerScrollContainer",
  component: ScrollContainer,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    heading: {
      control: "text",
      description: "Main heading text for the container",
    },
    headChild: {
      control: "text",
      description: "Additional content for the header section",
    },
    children: {
      control: "text",
      description: "Content for the body section",
    },
    containerClassName: {
      control: "text",
      description: "Additional classes for the main container",
    },
    headClassName: {
      control: "text",
      description: "Additional classes for the header section",
    },
    bodyClassName: {
      control: "text",
      description: "Additional classes for the body section",
    },
    headAngle: {
      control: { type: "number", min: 0, max: 45 },
      description: "Angle for the header clip path",
    },
    bodyAngle: {
      control: { type: "number", min: 0, max: 45 },
      description: "Angle for the body clip path",
    },
    showBody: {
      control: "boolean",
      description: "Toggle body section visibility",
    },
    translateHead: {
      control: "boolean",
      description: "Toggle header translation",
    },
    override: {
      control: "boolean",
      description: "Override responsive behavior",
    },
  },
};

const SampleContent = () => (
  <div className="space-y-4">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
  </div>
);

export const Default = {
  render: () => (
    <ScrollContainer heading="Default Header" headAngle={27} bodyAngle={6}>
      <SampleContent />
    </ScrollContainer>
  ),
};

export const WithHeadChild = {
  render: () => (
    <ScrollContainer
      heading="Main Heading"
      headChild={
        <div className="mt-4 text-sm font-normal">
          Additional header content
        </div>
      }
      headAngle={27}
      bodyAngle={6}
    >
      <SampleContent />
    </ScrollContainer>
  ),
};

export const CustomStyling = {
  render: () => (
    <ScrollContainer
      heading="Custom Styled"
      containerClassName="max-w-2xl mx-auto"
      headClassName="bg-gradient-to-r from-purple-600 to-blue-600 p-8"
      bodyClassName="bg-gray-50 shadow-lg"
      headAngle={30}
      bodyAngle={8}
    >
      <SampleContent />
    </ScrollContainer>
  ),
};

export const WithoutBody = {
  render: () => (
    <ScrollContainer heading="Header Only" showBody={false} headAngle={27}>
      <div className="mt-4 text-gray-700">Content without body container</div>
    </ScrollContainer>
  ),
};

export const TranslatedHeader = {
  render: () => (
    <ScrollContainer
      heading="Translated Header"
      translateHead={true}
      headAngle={27}
      bodyAngle={6}
    >
      <SampleContent />
    </ScrollContainer>
  ),
};

export const ResponsiveOverride = {
  render: () => (
    <ScrollContainer
      heading="Override Responsive"
      override={true}
      headAngle={27}
      bodyAngle={6}
    >
      <SampleContent />
    </ScrollContainer>
  ),
};
