"use client";

import React, { useState, useCallback, useMemo } from "react";
import {
  createEditor,
  Transforms,
  Editor,
  Text,
  Element as SlateElement,
} from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";

// React Icons (Material Icons)
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaUndo,
  FaRedo,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaCheckSquare,
} from "react-icons/fa";

// Define a leaf render function to apply formatting
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong className="!font-extrabold">{children}</strong>;
    //  bg-black text-white p-1 w-full
  }

  if (leaf.italic) {
    children = <em className="!italic">{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  if (leaf.code) {
    children = <code className="bg-gray-100 px-1">{children}</code>;
  }

  return (
    <span {...attributes} className="w-full">
      {children}
    </span>
  );
};
// Define Element render function for blocks
const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "bulleted-list":
      return (
        <ul {...attributes} className="ml-5 list-inside list-disc">
          {children}
        </ul>
      );
    case "numbered-list":
      return (
        <ol {...attributes} className="ml-5 list-inside list-decimal">
          {children}
        </ol>
      );
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "checkbox":
      return (
        <div {...attributes}>
          <input type="checkbox" /> {children}
        </div>
      );
    case "image":
      return <img {...attributes} src={element.url} alt="" />;
    case "left":
    case "center":
    case "right":
      return (
        <p {...attributes} style={{ textAlign: element.align }}>
          {children}
        </p>
      );
    default:
      return (
        <p {...attributes} className="m-0 w-full">
          {children}
        </p>
      );
  }
};

// Define custom elements for block rendering
const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right"];

// Button for formatting
const ToolbarButton = ({ format, icon, editor, action }) => {
  const isActive =
    action === "block"
      ? isBlockActive(editor, format)
      : isFormatActive(editor, format);

  return (
    <button
      className={`rounded p-1 ${
        isActive ? "bg-gray-300" : "bg-transparent hover:bg-gray-200"
      }`}
      onMouseDown={(event) => {
        event.preventDefault();
        if (action === "block") {
          toggleBlock(editor, format);
        } else {
          toggleFormat(editor, format);
        }
      }}
    >
      {icon}
    </button>
  );
};

// Toggle formatting
const toggleFormat = (editor, format) => {
  const isActive = isFormatActive(editor, format);
  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: (n) => Text.isText(n), split: true },
  );
};

// Check if a format is active
const isFormatActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n[format] === true,
    universal: true,
  });

  return !!match;
};

// Function to toggle blocks like lists, alignment, or checkboxes
const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);
  const isAlign = TEXT_ALIGN_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      LIST_TYPES.includes(!isAlign && SlateElement.isElement(n) && n.type),
    split: true,
  });

  const newProperties = {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
    align: isAlign ? format : undefined,
  };
  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};
// Function to check if block type is active
const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => SlateElement.isElement(n) && n.type === format,
  });
  return !!match;
};

// Main Editor component
const SlateEditor = () => {
  const [activeMode, setActiveMode] = useState({ id: 1 });
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  return (
    <Slate
      editor={editor}
      initialValue={value}
      onChange={(newValue) => setValue(newValue)}
      className="w-full"
    >
      <div className="flex w-full items-center justify-end space-x-2 border-b border-gray-300 p-2">
        <ToolbarButton format="bold" icon={<FaBold />} editor={editor} />
        <ToolbarButton format="italic" icon={<FaItalic />} editor={editor} />
        <ToolbarButton
          format="underline"
          icon={<FaUnderline />}
          editor={editor}
        />
        <ToolbarButton
          format="bulleted-list"
          icon={<FaListUl />}
          action="block"
          editor={editor}
        />
        <ToolbarButton
          format="numbered-list"
          icon={<FaListOl />}
          action="block"
          editor={editor}
        />
        <ToolbarButton
          format="left"
          icon={<FaAlignLeft />}
          action="block"
          editor={editor}
        />
        <ToolbarButton
          format="center"
          icon={<FaAlignCenter />}
          action="block"
          editor={editor}
        />
        <ToolbarButton
          format="right"
          icon={<FaAlignRight />}
          action="block"
          editor={editor}
        />
        <ToolbarButton
          format="checkbox"
          icon={<FaCheckSquare />}
          action="block"
          editor={editor}
        />
        {/* <ToolbarButton format="link" icon={<FaLink />} editor={editor} /> */}
        {/* <ToolbarButton format="image" icon={<FaImage />} editor={editor} /> */}
        <button
          onMouseDown={() => editor.undo()}
          className="rounded p-2 hover:bg-gray-200"
        >
          <FaUndo />
        </button>
        <button
          onMouseDown={() => editor.redo()}
          className="rounded p-2 hover:bg-gray-200"
        >
          <FaRedo />
        </button>
      </div>

      <div className="flex w-full items-center bg-[#A8A9AC] text-white">
        <button
          className={`h-full w-full py-3 text-center font-bold ${activeMode.id == 1 && "bg-[#A262A1]"}`}
          onClick={() => {
            setActiveMode({ id: 1 });
          }}
        >
          I&apos;ll journal myself
        </button>
        <button
          className={`w-full py-3 text-center font-bold ${activeMode.id == 2 && "bg-[#A262A1]"}`}
          onClick={() => {
            setActiveMode({ id: 2 });
          }}
        >
          Use my switches to journal for me
        </button>
      </div>

      <Editable
        className="h-[60%] w-full overflow-auto p-2 px-3 outline-none"
        renderLeaf={renderLeaf}
        renderElement={renderElement}
        placeholder="Start typing..."
      />
    </Slate>
  );
};

export default SlateEditor;
