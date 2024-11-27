import TextWithBrackets from "@/src/components/__old__/texts/text_with_brackets"; // Adjust the import path as needed

export default {
  title: "Old/TextTextWithBrackets",
  component: TextWithBrackets,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    className: { control: "text" },
    thin: {
      control: "object",
      description: "Object to control the appearance of the brackets",
    },
    bracketHeight: { control: "number" },
    bracketWidth: { control: "number" },
  },
};

// Default story
export const Default = () => <TextWithBrackets text="Sample Text" />;

// Custom style story
export const CustomStyle = () => (
  <TextWithBrackets
    text="Custom Style"
    className="text-red-500"
    thin={{ apply: true, color: "black", width: 2 }}
    bracketHeight={60}
    bracketWidth={25}
  />
);

// With long text story
export const LongText = () => (
  <TextWithBrackets text="This is a longer piece of text to demonstrate how it looks." />
);
