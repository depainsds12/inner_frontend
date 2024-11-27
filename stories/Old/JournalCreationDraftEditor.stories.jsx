import SlateEditor from "@/src/components/__old__/journal-creation/draft_editor";

export default {
  title: "Old/JournalCreationSlateEditor",
  component: SlateEditor,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  args: {},
};

export const WithInitialContent = {
  args: {
    initialValue: [
      {
        type: "paragraph",
        children: [{ text: "This is some initial content for the editor." }],
      },
    ],
  },
};

export const SelfJournalModeActive = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selfJournalButton = canvas.getByText("I'll journal myself");
    await userEvent.click(selfJournalButton);
  },
};

export const SwitchesJournalModeActive = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchesJournalButton = canvas.getByText(
      "Use my switches to journal for me",
    );
    await userEvent.click(switchesJournalButton);
  },
};

export const WithFormattedContent = {
  args: {
    initialValue: [
      {
        type: "paragraph",
        children: [
          { text: "This is " },
          { text: "bold", bold: true },
          { text: " and " },
          { text: "italic", italic: true },
          { text: " text." },
        ],
      },
      {
        type: "bulleted-list",
        children: [
          {
            type: "list-item",
            children: [{ text: "List item 1" }],
          },
          {
            type: "list-item",
            children: [{ text: "List item 2" }],
          },
        ],
      },
    ],
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
