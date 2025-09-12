import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  return (
    <section
      className={cn(
        "px-4 lg:bg-[url('/home/desktop/image-hero.jpg')]",
        "md:bg-[url('/home/tablet/image-header.jpg')]",
        "bg-[url('/home/mobile/image-header.jpg')]",
        "bg-no-repeat bg-cover bg-center"
      )}
    >
      <div className="max-w-custom mx-auto h-[600px] lg:h-[729px]">
        <p className="text-body">New product</p>
      </div>
    </section>
  );
};
