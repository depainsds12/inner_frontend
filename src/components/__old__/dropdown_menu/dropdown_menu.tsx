import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import React from "react";

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  items: NavLink[];
  trigger?: React.ReactNode;
  className?: string;
}

const DropdownMenu: React.FC<MobileNavProps> = ({
  items,
  trigger,
  className,
}) => {
  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger
        className={`cursor-pointer outline-none ${className || ""}`}
      >
        {trigger}
      </RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content
          align="start"
          side="bottom"
          className="z-50 min-w-[220px] rounded-md bg-white p-1 shadow-lg"
        >
          {items.map((item, index) => (
            <RadixDropdownMenu.Item
              key={index}
              className="group relative flex select-none items-center rounded px-2 outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
            >
              <Link href={item.href} className="w-full p-3 text-gray-900">
                <span className="text-base">{item.label}</span>
              </Link>
            </RadixDropdownMenu.Item>
          ))}
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
};

export default DropdownMenu;
