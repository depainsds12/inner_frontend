import ProfileHeader from "@/src/app/profile/_components/profile-header";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProfileHeader solidBg={false}>
      <div className="relative mt-2 w-auto lg:-mt-[106px]">{children}</div>
    </ProfileHeader>
  );
};

export default ProfileLayout;
