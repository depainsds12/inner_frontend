import { STEPS } from "@/src/components/__old__/journal-creation/index";
import Screen3 from "@/src/components/__old__/journal-creation/screen3";

export default {
  title: "Old/JournalCreationScreen3",
  component: Screen3,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    step: {
      control: { type: "select", options: Object.values(STEPS) },
    },
  },
};

const Template = (args) => <Screen3 {...args} />;

export const Default = Template.bind({});
Default.args = {
  step: STEPS.zone,
};

export const JournalStep = Template.bind({});
JournalStep.args = {
  step: STEPS.journal,
};

export const WithWeatherActive = {
  ...JournalStep,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const weatherIcon = canvas.getByAltText("weather");
    await userEvent.click(weatherIcon);
  },
};

export const WithCounterActive = {
  ...JournalStep,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const counterElement = canvas.getByText("20");
    await userEvent.click(counterElement);
  },
};

export const WithPublicJournalSelected = {
  ...JournalStep,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const publicSection = canvas.getByText("public");
    await userEvent.click(publicSection);
  },
};

export const WithSwitchesChecked = {
  ...JournalStep,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const beforeCheckbox = canvas.getByText("before").previousSibling;
    const afterCheckbox = canvas.getByText("after").previousSibling;
    await userEvent.click(beforeCheckbox);
    await userEvent.click(afterCheckbox);
  },
};

export const MobileView = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const TabletView = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const DesktopView = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};
