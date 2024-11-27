import { ReactNode } from "react";

export type NavLink = {
  href: string;
  label: string;
  active: boolean;
};

export interface HexagonButtonProps {
  fill?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  onClick?: () => void;
  stroke?: string;
  strokeWidth?: number;
  isSm?: boolean;
}

export interface TopBarProps {
  links: NavLink[];
}

export interface MobileMenuProps {
  links: NavLink[];
}

export interface IconButtonProps {
  icon: ReactNode;
  clickHandler: () => void;
}

export interface IconButtonGroupProps {
  icons: IconButtonProps[];
  className?: string;
}
