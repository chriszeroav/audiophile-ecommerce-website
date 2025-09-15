import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface AboutProps {}

export const About: FC<AboutProps> = () => {
  return (
    <section className="px-4">
      <div
        className={cn(
          "flex flex-col gap-10 lg:gap-28",
          "lg:flex-row-reverse lg:items-center",
          "max-w-custom mx-auto lg:py-20"
        )}
      >
        <img
          src="/shared/mobile/image-best-gear.jpg"
          alt="BEST AUTDO GEAR"
          className="rounded-lg max-h-[300px] object-cover md:hidden"
        />
        <img
          src="/shared/tablet/image-best-gear.jpg"
          alt="BEST AUTDO GEAR"
          className="rounded-lg max-h-[300px] object-cover hidden md:block lg:hidden"
        />
        <img
          src="/shared/desktop/image-best-gear.jpg"
          alt="BEST AUTDO GEAR"
          className="rounded-lg object-cover hidden lg:block"
        />
        <div
          className={cn(
            "flex flex-col gap-8",
            "max-w-[570px] mx-auto",
            "text-center lg:text-start"
          )}
        >
          <h2 className="text-custom-black text-h4 md:text-h2 uppercase">
            Bringing you the <span className="text-custom-primary">best</span>{" "}
            audio gear
          </h2>
          <p className="text-custom-black/50 text-body">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};
