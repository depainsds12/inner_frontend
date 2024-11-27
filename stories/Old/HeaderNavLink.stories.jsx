import NavLink from "@/src/components/__old__/header/_components/nav_link";

export default {
  title: "Old/HeaderNavLink",
  component: NavLink,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "number" },
    text: { control: "text" },
    href: { control: "text" },
    className: { control: "text" },
    active: { control: "boolean" },
    angle: { control: "number" },
  },
};

export const Default = {
  args: {
    id: 1,
    text: "Home",
    href: "/",
    active: false,
    angle: 12,
  },
};

export const Active = {
  args: {
    ...Default.args,
    active: true,
  },
};

export const CustomText = {
  args: {
    ...Default.args,
    text: "About Us",
    href: "/about",
  },
};

export const CustomAngle = {
  args: {
    ...Default.args,
    active: true,
    angle: 20,
  },
};

export const WithCustomClass = {
  args: {
    ...Default.args,
    className: "custom-nav-link",
  },
};

export const InactiveCustomStyle = {
  args: {
    ...Default.args,
    text: "Contact",
    href: "/contact",
    className: "text-blue-500 hover:text-blue-700",
  },
};

export const ActiveCustomStyle = {
  args: {
    ...Default.args,
    text: "Services",
    href: "/services",
    active: true,
    className: "bg-green-500 text-white",
  },
};
