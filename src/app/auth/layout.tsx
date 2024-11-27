import AuthBackground from "@/public/assets/login/auth-background.png";
import BannerImage from "@/public/assets/login/octa-banner.jpg";
import AuthHeader from "@/src/app/auth/_components/auth-header";
import Background from "@/src/components/image/background";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="relative"
      style={{ backgroundImage: `url(${BannerImage.src})` }}
    >
      <AuthHeader />
      <Background
        strokeWidth={4}
        image={{
          src: BannerImage.src,
          height: 600,
        }}
        extension={{
          src: AuthBackground.src,
        }}
      />
      {children}
    </main>
  );
};

export default AuthLayout;
