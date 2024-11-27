import DropdownMenu from "@/src/components/__old__/dropdown_menu/dropdown_menu";
import { FlowerIcon } from "@/src/components/__old__/icons/icons";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Elementary/Navigation/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "Array of navigation items with href and label properties",
    },
    trigger: {
      control: "object",
      description: "Custom trigger element for the dropdown",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the trigger element",
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    trigger: <FlowerIcon />,
  },
};

export const CustomTrigger: Story = {
  args: {
    items: defaultItems,
    trigger: (
      <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
        Menu
      </button>
    ),
  },
};

export const WithCustomStyles: Story = {
  args: {
    items: defaultItems,
    trigger: (
      <div>
        <FlowerIcon fill="white" width={36} height={36} />
      </div>
    ),
    className: "bg-gray-100 p-2 rounded-full hover:bg-gray-200",
  },
};

export const LongList: Story = {
  args: {
    items: [
      ...defaultItems,
      { href: "/services", label: "Services" },
      { href: "/blog", label: "Blog" },
      { href: "/careers", label: "Careers" },
      { href: "/support", label: "Support" },
    ],
    trigger: <FlowerIcon />,
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ href: "/", label: "Home" }],
    trigger: <FlowerIcon />,
  },
};
