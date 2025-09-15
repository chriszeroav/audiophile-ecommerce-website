import { Button } from "@/components/ui";
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
        "bg-no-repeat bg-cover bg-center",
        "bg-blend-darken bg-custom-black-alt/50"
      )}
    >
      <div
        className={cn(
          "max-w-custom mx-auto h-[600px] lg:h-[729px]",
          "flex flex-col justify-center items-center gap-6",
          "lg:items-start lg:text-start",
          "text-center pt-24"
        )}
      >
        <div className="flex flex-col gap-2">
          <p className="text-overline uppercase text-custom-white/50">
            NEW PRODUCT
          </p>
          <h1
            className={cn(
              "text-custom-white text-h3 uppercase",
              "md:max-w-[400px] md:text-h1"
            )}
          >
            XX99 Mark II HeadphoneS
          </h1>
        </div>
        <p className="text-body text-custom-white/75 max-w-[370px]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button className="uppercase text-subtitle">See Product</Button>
      </div>
    </section>
  );
};
