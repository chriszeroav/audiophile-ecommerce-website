import React, { FC } from "react";
import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SplitPromoCardProps {}

export const SplitPromoCard: FC<SplitPromoCardProps> = () => {
  return (
    <section className="px-4">
      <div
        className={cn(
          "grid auto-rows-[200px] gap-6 md:gap-8",
          "md:grid-cols-2 md:auto-rows-[320px]",
          "max-w-custom mx-auto"
        )}
      >
        <img
          src="/home/mobile/image-earphones-yx1.jpg"
          className="rounded-lg block w-full h-full object-cover md:hidden"
          alt="EARPHONES YX1"
        />
        <img
          src="/home/tablet/image-earphones-yx1.jpg"
          className="rounded-lg hidden w-full h-full object-cover md:block lg:hidden"
          alt="EARPHONES YX1"
        />
        <img
          src="/home/desktop/image-earphones-yx1.jpg"
          className="rounded-lg w-full h-full object-cover hidden lg:block"
          alt="EARPHONES YX1"
        />
        <div
          className={cn(
            "flex flex-col justify-center gap-8",
            "bg-custom-gray p-6 rounded-lg md:px-14 lg:px-20"
          )}
        >
          <h2 className="text-h4 text-custom-black">YX1 EARPHONES</h2>
          <Link
            href="/products/yx1-earphones"
            className={buttonVariants({
              variant: "outline",
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
