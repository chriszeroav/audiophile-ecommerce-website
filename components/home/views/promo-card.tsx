import React, { FC } from "react";
import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PromoCardProps {}

export const PromoCard: FC<PromoCardProps> = () => {
  return (
    <section className="px-4">
      <div
        className={cn(
          "flex flex-col gap-10 overflow-hidden",
          "lg:flex-row lg:justify-center lg:h-[560px] lg:py-0 lg:gap-32",
          "max-w-custom mx-auto px-4 py-16",
          "bg-custom-primary rounded-lg"
        )}
      >
        <picture className="relative lg:self-end -bottom-4">
          <img
            className="max-w-[170px] mx-auto relative z-10 md:hidden"
            src="/home/mobile/image-speaker-zx9.png"
            alt="SPEAKER ZX9"
          />
          <img
            className="max-w-[200px] mx-auto relative z-10 hidden md:block lg:hidden"
            src="/home/tablet/image-speaker-zx9.png"
            alt="SPEAKER ZX9"
          />
          <img
            className="max-w-[410px] mx-auto relative z-10 hidden lg:block"
            src="/home/desktop/image-speaker-zx9.png"
            alt="SPEAKER ZX9"
          />
          <img
            className={cn(
              "absolute top-1/2 left-1/2",
              "min-w-[558px] min-h-[558px]",
              "md:min-w-[944px] md:min-h-[944px]",
              "-translate-x-1/2 -translate-y-1/2"
            )}
            src="/home/desktop/pattern-circles.svg"
          />
        </picture>
        <div
          className={cn(
            "flex flex-col items-center gap-6",
            "lg:self-center lg:items-start",
            "relative text-center lg:text-start"
          )}
        >
          <h2
            className={cn(
              "text-custom-white text-h3 md:text-h1",
              "max-w-[200px] md:max-w-[300px]"
            )}
          >
            ZX9 SPEAKER
          </h2>
          <p className="text-custom-white/75 text-body max-w-[350px]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            href="/products/zx9-speaker"
            className={buttonVariants({
              variant: "secondary",
              className: "uppercase text-subtitle",
            })}
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
};
