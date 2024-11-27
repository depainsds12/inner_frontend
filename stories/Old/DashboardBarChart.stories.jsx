import StackedBarChart from "@/src/components/__old__/dashboard/barChart";

export default {
  title: "Old/DashboardStackedBarChart",
  component: StackedBarChart,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#1a1a1a" }],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    heading: {
      control: "select",
      options: ["shadows", "flowers", "ripples"],
      description: "Chart type that determines the color scheme",
    },
    data: {
      control: "object",
      description:
        "Data array containing name, switches, and no_switches values",
    },
  },
};

// Sample data sets
const shadowsData = [
  { name: "Shadow Type 1", switches: 75, no_switches: 65 },
  { name: "Shadow Type 2", switches: 85, no_switches: 55 },
  { name: "Shadow Type 3", switches: 95, no_switches: 45 },
];

const flowersData = [
  { name: "Rose", switches: 80, no_switches: 70 },
  { name: "Tulip", switches: 90, no_switches: 60 },
  { name: "Lily", switches: 100, no_switches: 50 },
  { name: "Daisy", switches: 70, no_switches: 80 },
];

const ripplesData = [
  { name: "Wave 1", switches: 65, no_switches: 75 },
  { name: "Wave 2", switches: 55, no_switches: 85 },
  { name: "Wave 3", switches: 45, no_switches: 95 },
  { name: "Wave 4", switches: 75, no_switches: 65 },
  { name: "Wave 5", switches: 85, no_switches: 55 },
];

export const ShadowsChart = {
  render: () => (
    <div className="h-[400px] w-full bg-gray-900 p-4">
      <StackedBarChart heading="shadows" data={shadowsData} />
    </div>
  ),
};

export const FlowersChart = {
  render: () => (
    <div className="h-[400px] w-full bg-gray-900 p-4">
      <StackedBarChart heading="flowers" data={flowersData} />
    </div>
  ),
};

export const RipplesChart = {
  render: () => (
    <div className="h-[400px] w-full bg-gray-900 p-4">
      <StackedBarChart heading="ripples" data={ripplesData} />
    </div>
  ),
};

export const LargeDataset = {
  render: () => (
    <div className="h-[600px] w-full bg-gray-900 p-4">
      <StackedBarChart
        heading="flowers"
        data={[
          { name: "Rose", switches: 80, no_switches: 70 },
          { name: "Tulip", switches: 90, no_switches: 60 },
          { name: "Lily", switches: 100, no_switches: 50 },
          { name: "Daisy", switches: 70, no_switches: 80 },
          { name: "Sunflower", switches: 85, no_switches: 65 },
          { name: "Orchid", switches: 95, no_switches: 55 },
          { name: "Carnation", switches: 75, no_switches: 75 },
          { name: "Iris", switches: 88, no_switches: 62 },
        ]}
      />
    </div>
  ),
};

// Template for creating new stories with args
const Template = (args) => (
  <div className="h-[400px] w-full bg-gray-900 p-4">
    <StackedBarChart {...args} />
  </div>
);

export const WithControls = Template.bind({});
WithControls.args = {
  heading: "shadows",
  data: shadowsData,
};

// Example with small dataset
export const SmallDataset = {
  render: () => (
    <div className="h-[400px] w-full bg-gray-900 p-4">
      <StackedBarChart
        heading="ripples"
        data={[
          { name: "Wave A", switches: 85, no_switches: 75 },
          { name: "Wave B", switches: 65, no_switches: 85 },
        ]}
      />
    </div>
  ),
};

// Example with equal values
export const EqualValues = {
  render: () => (
    <div className="h-[400px] w-full bg-gray-900 p-4">
      <StackedBarChart
        heading="flowers"
        data={[
          { name: "Type 1", switches: 50, no_switches: 50 },
          { name: "Type 2", switches: 75, no_switches: 75 },
          { name: "Type 3", switches: 25, no_switches: 25 },
        ]}
      />
    </div>
  ),
};
