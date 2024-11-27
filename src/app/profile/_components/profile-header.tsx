"use client";

import Polygon from "@/src/components/polygon/polygon";
import { generateHexagonPoints } from "@/src/components/polygon/utils";
import useBreakpoints from "@/src/hooks/media_query";
import { useAuthGuard } from "@/src/hooks/useAuthGuard";
import {
  OnboardingStep,
  useOnboardingStore,
} from "@/src/store/onboarding-store";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import React, { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import DropdownMenu from "@/src/components/__old__/dropdown_menu/dropdown_menu";
import {
  BullseyeIcon,
  BullseyeIconVariantTwo,
  FlowerIcon,
  LogoIcon,
  PaintIcon,
  StarIcon,
} from "@/src/components/__old__/icons/icons";
import Background from "@/src/components/image/background";
import Typography from "@/src/components/typography/typography";
import {
  HexagonButtonProps,
  IconButtonGroupProps,
  IconButtonProps,
  MobileMenuProps,
  NavLink,
  TopBarProps,
} from "../../../components/header/types";

const ProfileSection = () => {
  const { user } = useAuthGuard();
  return (
    <div className="hidden items-center space-x-8 lg:flex lg:space-x-4">
      <span className="font-extrabold text-[#D5D1ED] lg:text-right">
        create your profile
      </span>
      <div className="w-[136px]">
        <Polygon
          points={generateHexagonPoints({ width: 136, height: 44 })}
          fill="#AE5CAA"
          strokeWidth={0}
          className="flex flex-col items-start justify-center pl-8 text-[#FFFFFF]"
        >
          <Typography className="!text-[14px]">welcome,</Typography>
          <Typography className="font-extrabold" component="p" variant="base">
            {user?.fullName.split(" ")[0]}
          </Typography>
        </Polygon>
      </div>
    </div>
  );
};

const HexagonButton = ({
  fill = "transparent",
  className = "",
  children,
  stroke = "rgba(213, 209, 237, 0.2)",
  strokeWidth = 0,
  onClick,
}: HexagonButtonProps) => {
  const { isLg } = useBreakpoints();
  return (
    <Polygon
      rotation={90}
      stroke={stroke}
      strokeWidth={strokeWidth}
      onClick={onClick}
      style={{ position: "relative", width: isLg ? "36px" : "42px" }}
      points={generateHexagonPoints({ width: 42, height: 40 })}
      fill={fill}
      containerClassname="relative size-12 cursor-pointer z-40"
      className={`pointer-events-auto absolute inset-0 z-20 flex items-center justify-center ${className}`}
    >
      <div className="pointer-events-auto relative flex items-center justify-center">
        {children}
      </div>
    </Polygon>
  );
};

const HexagonGroup = ({
  count,
  strokeWidth,
  stroke,
  className,
}: {
  strokeWidth?: number;
  stroke?: string;
  className?: string;
  count: number;
}) => {
  const { activeStep, setActiveStep } = useOnboardingStore();
  return (
    <div className="relative z-40 flex space-x-6 lg:space-x-4">
      {Array.from({ length: count }, (_, i) => (
        <HexagonButton
          onClick={() => setActiveStep((i + 1) as OnboardingStep)}
          className={`${className} pointer-events-auto`}
          containerClassName="z-40"
          fill={i + 1 === activeStep ? "#564A8D" : "transparent"}
          stroke={stroke}
          strokeWidth={strokeWidth}
          key={`hexagon_button_${i}`}
        >
          <Typography variant="base" className="font-extrabold text-[#D5D1ED]">
            {i + 1}
          </Typography>
        </HexagonButton>
      ))}
    </div>
  );
};

const DesktopNav = ({ links }: { links: NavLink[] }) => (
  <RadixNavigationMenu.Root className="hidden lg:block xl:pl-16">
    <RadixNavigationMenu.List className="flex space-x-10">
      {links.map(({ href, label, active }, index) => (
        <RadixNavigationMenu.Item
          className={twMerge(
            "text-[#D5D1ED]",
            active && "border-b-4 border-b-[#FFF200] pb-2 text-[#FFF200]",
          )}
          key={`href_${index}`}
        >
          <RadixNavigationMenu.Link href={href}>
            <Typography className="font-extrabold">{label}</Typography>
          </RadixNavigationMenu.Link>
        </RadixNavigationMenu.Item>
      ))}
    </RadixNavigationMenu.List>
  </RadixNavigationMenu.Root>
);

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
  return (
    <DropdownMenu
      className="pl-4 lg:hidden"
      trigger={
        <RadixDropdownMenu.Trigger
          asChild
          className="flex items-center justify-center lg:hidden"
        >
          <Polygon
            points={generateHexagonPoints({ height: 46, width: 56 })}
            stroke="#AD5DA4"
            strokeWidth={3}
            className="relative z-40 p-3"
            fill="#564A8D"
          >
            <svg
              width="36"
              height="46"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              className="relative z-50"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Polygon>
        </RadixDropdownMenu.Trigger>
      }
      items={links}
    />
  );
};

const TopBar: React.FC<TopBarProps> = ({ links }) => {
  return (
    <header className="relative z-10 w-full text-[#D5D1ED]">
      <div className="mx-auto flex h-20 w-full items-center justify-between bg-[#493973] px-12 lg:h-[90px]">
        <div className="flex flex-row items-end space-x-8">
          <LogoIcon />
          <DesktopNav links={links} />
        </div>
        <ProfileSection />
        <MobileMenu links={links} />
      </div>
    </header>
  );
};

const IconBar = ({ icons }: { icons: IconButtonProps[] }) => {
  return (
    <div className="relative z-10 block w-full bg-[#8858B5] bg-opacity-50">
      <div
        style={{ backgroundColor: "rgba(213, 209, 237, 0.2)" }}
        className="mx-auto flex h-[50px] w-full items-center justify-center px-5 lg:h-[90px] lg:justify-between"
      >
        <HexagonGroup stroke="rgba(213, 209, 237)" strokeWidth={2} count={3} />
        <IconButtonGroup icons={icons} className="hidden lg:flex" />
      </div>
    </div>
  );
};

const IconButtonGroup: React.FC<IconButtonGroupProps> = ({
  icons,
  className,
}) => {
  return (
    <div
      className={twMerge(
        `relative z-40 flex space-x-6 lg:space-x-4`,
        className,
      )}
    >
      {icons.map((icon, index) => (
        <HexagonButton
          onClick={icon.clickHandler}
          key={index}
          stroke="rgba(213, 209, 237, 1)"
          strokeWidth={2}
          fill="#564A8D"
          containerClassName="relative z-40"
          className="pointer-events-auto"
        >
          <div className="relative z-50">{icon.icon}</div>
        </HexagonButton>
      ))}
    </div>
  );
};

const MobileIconBar: React.FC<{ icons: IconButtonProps[] }> = ({ icons }) => {
  return (
    <div className="relative z-40 w-full lg:hidden">
      <div className="w-full">
        <div className="mx-auto flex h-[50px] w-full items-center justify-center bg-[#8858B5] bg-opacity-60 px-12">
          <IconButtonGroup icons={icons} />
        </div>
      </div>
    </div>
  );
};

const ProfileHeader = ({
  children,
  solidBg = false,
}: {
  children: ReactNode;
  solidBg: boolean;
}) => {
  const links: NavLink[] = [
    { href: "#", label: "flowers", active: true },
    { href: "#", label: "shadows", active: false },
    { href: "#", label: "seasons", active: false },
  ];

  const onSelectIcons = () => {
    console.log("icons");
  };
  const onSelectColorTemplates = () => {
    console.log("color templates");
  };
  const onSelectStars = () => {
    console.log("stars");
  };
  const onSelectInnerBoundary = () => {
    console.log("inner boundary");
  };
  const onSelectOuterBoundary = () => {
    console.log("outer boundary");
  };

  const icons = [
    {
      icon: <FlowerIcon key="flower" width={20} height={20} />,
      clickHandler: () => onSelectIcons(),
    },
    {
      icon: <PaintIcon key="paint" width={20} height={20} />,
      clickHandler: () => onSelectColorTemplates(),
    },
    {
      icon: <StarIcon key="star" width={20} height={20} />,
      clickHandler: () => onSelectStars(),
    },
    {
      icon: <BullseyeIcon key="bullseye" width={20} height={20} />,
      clickHandler: () => onSelectInnerBoundary(),
    },
    {
      icon: <BullseyeIconVariantTwo key="bullseye2" width={20} height={20} />,
      clickHandler: () => onSelectOuterBoundary(),
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Background
        image={{
          height: 700,
          src: "/assets/images/change-more.png",
          alt: "change-more",
        }}
        className="absolute inset-0"
        gradient="bg-gradient-to-b from-[#100E1A] to-[#8858B5] from-[-20%]"
        solidBg={solidBg}
      />
      <div className="relative flex w-full flex-col items-center justify-center">
        <TopBar links={links} />
        <IconBar icons={icons} />
        <MobileIconBar icons={icons} />
        {children}
      </div>
    </div>
  );
};

export default ProfileHeader;
