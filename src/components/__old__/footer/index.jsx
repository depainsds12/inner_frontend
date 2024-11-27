import Image from "next/image";
import Link from "next/link";

import FooterLogo from "@/public/assets/footer/footer_logo.svg";

import LinkComp from "../link";
import MailSubscribeComp from "./mail_subscribe";

// #TODO update 'strong' with 'heading' tag later
const Footer = ({
  heading = "subscribe to Wellgorithms  Weekly",
  sub = `a weekly dose of Wellgorithms to warm your heart, 
      invigorate your mind, and inspire resilience in adversity.`,
}) => {
  return (
    <footer className="responsive-container flex min-h-screen w-full flex-col items-center justify-center gap-y-[5vh] bg-[url(/assets/footer/footer_bg.png)] bg-cover bg-center bg-no-repeat text-white md:gap-y-[6vh] md:pt-[12vh]">
      <section className="flex w-full flex-col items-center space-y-2 text-center">
        <strong className="3xl:text-6xl text-3xl font-extrabold md:text-4xl lg:text-5xl xl:text-5xl">
          {heading}
        </strong>
        <p className="text-xl md:w-1/2 md:text-xl xl:text-2xl">{sub}</p>
      </section>
      <MailSubscribeComp />
      <section className="grid place-items-center">
        <Image
          src={FooterLogo}
          alt="Inner Logo"
          className="3xl:w-full w-[60%] md:w-[70%] lg:w-[80%] xl:w-[90%]"
        />
      </section>
      <section className="flex w-max items-center justify-between gap-6 text-xl sm:gap-9 xl:text-2xl">
        <LinkComp
          text="welcome"
          href="/login"
          className="bg-orange-mid px-6 py-2 lg:px-9 lg:py-3"
          angle={9}
        />
        <LinkComp
          text="donate"
          href="/donate"
          className="bg-orange-mid px-6 py-2 lg:px-9 lg:py-3"
          angle={9}
        />
      </section>

      <div className="flex flex-col items-center justify-center gap-y-[2vh]">
        <section className="flex w-max items-center justify-between gap-9 md:text-xl">
          <Link href="/academy">(inner) Academy</Link>
          <Link href="/tv">(inner) TV</Link>
        </section>
        <section className="text-center text-sm">
          <span>
            copyright 2024 Lightworkers of the Sphere, LLC. All rights reserved.
          </span>
        </section>
        <section className="flex w-max items-center justify-between gap-9 md:text-xl">
          <Link href="/policies">policies</Link>
          <Link href="/contact">contact</Link>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
