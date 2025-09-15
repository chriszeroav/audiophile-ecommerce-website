import React, { FC } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  NavLinkItem,
  TwitterIcon,
} from "@/components/ui";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="px-4 py-10 md:px-10 lg:py-20 bg-custom-black">
      <div className="max-w-custom mx-auto flex flex-col gap-10 md:gap-8">
        <div className="flex flex-col gap-10 md:gap-8 lg:flex-row lg:justify-between">
          <img
            src="/shared/desktop/logo.svg"
            alt="Audiophile Logo"
            className="max-w-[140px] mx-auto md:mx-0"
          />
          <nav
            className={cn(
              "flex flex-col gap-4",
              "md:flex-row md:gap-8 text-center"
            )}
          >
            <NavLinkItem className="text-subtitle" href="/">
              HOME
            </NavLinkItem>
            <NavLinkItem
              className="text-subtitle"
              href="/categories/headphones"
            >
              HEADPHONES
            </NavLinkItem>
            <NavLinkItem className="text-subtitle" href="/categories/speakers">
              SPEAKERS
            </NavLinkItem>
            <NavLinkItem className="text-subtitle" href="/categories/earphones">
              EARPHONES
            </NavLinkItem>
          </nav>
        </div>
        <p
          className={cn(
            "text-custom-white/50",
            "text-center md:text-start",
            "text-body lg:max-w-[540px]"
          )}
        >
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div
          className={cn(
            "flex flex-col items-center gap-10",
            "md:flex-row md:justify-between md:mt-10 lg:mt-0"
          )}
        >
          <p className="text-custom-white/50 text-body text-center">
            Copyright 2025. All Rights Reserved
          </p>
          <div className="flex items-center gap-5">
            <Link href="/">
              <FacebookIcon className="size-6 text-custom-white" />
            </Link>
            <Link href="/">
              <TwitterIcon className="size-6 text-custom-white" />
            </Link>
            <Link href="/">
              <InstagramIcon className="size-6 text-custom-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
