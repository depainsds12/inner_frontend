import Screen1 from "@/src/components/__old__/journal-creation/screen1";

export default {
  title: "Old/JournalCreationScreen1",
  component: Screen1,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
};

// Mock the stores
const MockStoreProvider = ({ children, sphereFilter, selectedData }) => {
  return children({
    sphereFilter,
    selectedData,
    changeData: () => {},
    changeBigTrapezoidPosition: () => {},
  });
};

const Template = ({ step, sphereFilter, selectedData }) => (
  <MockStoreProvider sphereFilter={sphereFilter} selectedData={selectedData}>
    {(storeProps) => <Screen1 step={step} setStep={() => {}} />}
  </MockStoreProvider>
);

export const Default = {
  render: (args) => <Template {...args} />,
  args: {
    step: 0,
    sphereFilter: "",
    selectedData: null,
  },
};

export const ZoneStep = {
  ...Default,
  args: {
    ...Default.args,
    step: 1,
    sphereFilter: "flowers",
  },
};

export const JournalStep = {
  ...Default,
  args: {
    ...Default.args,
    step: 2,
    sphereFilter: "flowers",
    selectedData: { keyword: { name: "Peace" } },
  },
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
