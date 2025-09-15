import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface SimplePromoCardProps {}

export const SimplePromoCard: FC<SimplePromoCardProps> = () => {
  return (
    <section className="px-4">
      <div
        className={cn(
          "bg-[url('/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-center",
          "md:bg-[url('/home/tablet/image-speaker-zx7.jpg')]",
          "lg:bg-[url('/home/desktop/image-speaker-zx7.jpg')]",
          "max-w-custom mx-auto h-[320px] p-6 rounded-lg md:px-14 lg:px-20",
          "flex flex-col justify-center gap-8"
        )}
      >
        <h2 className="text-custom-black text-h4">ZX7 SPEAKER</h2>
        <Button variant="outline" className="uppercase text-subtitle">
          See Product
        </Button>
      </div>
    </section>
  );
};
