import HeadChild from "@/src/components/__old__/contact/headingLabel";
import { useState } from "react";

// CSF3 format for the HeadChild component
export default {
  title: "Old/ContactHeadChild",
  component: HeadChild,
  tags: ["autodocs"],
  args: {
    name: "John Doe",
    email: "john@example.com",
  },
  argTypes: {
    name: { control: "text" },
    email: { control: "text" },
    setName: { action: "setName" },
    setEmail: { action: "setEmail" },
  },
};

// Template for wrapping the HeadChild component with state
const Template = (args) => {
  const [name, setName] = useState(args.name);
  const [email, setEmail] = useState(args.email);

  return (
    <HeadChild
      {...args}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
    />
  );
};

// Default story
export const Default = Template.bind({});

// Story with different name and email
export const CustomInput = Template.bind({});
CustomInput.args = {
  name: "Jane Smith",
  email: "jane@example.com",
};

// Story with empty inputs to start
export const EmptyInputs = Template.bind({});
EmptyInputs.args = {
  name: "",
  email: "",
};
