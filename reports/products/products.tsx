import React, { FC } from "react";
import { Product } from "@/data";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface ProductsProps {
  data: Product[];
}

export const Products: FC<ProductsProps> = ({ data }) => {
  return (
    <ul className="flex flex-col gap-28">
      {data.map((item, index) => (
        <li
          key={item.slug}
          className={cn(
            "flex flex-col gap-8 lg:gap-20",
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          )}
        >
          <img
            src={item.imageMobile}
            alt={item.title}
            className="rounded-lg md:hidden"
          />
          <img
            src={item.imageTablet}
            alt={item.imageTablet}
            className="rounded-lg hidden md:block lg:hidden"
          />
          <img
            src={item.imageDesktop}
            alt={item.imageDesktop}
            className="rounded-lg hidden lg:block max-w-[540px]"
          />
          <div className="flex flex-col items-center lg:items-start lg:text-start text-center lg:justify-center gap-6">
            {item.isNew && (
              <p className="text-overline text-custom-primary uppercase">
                New Product
              </p>
            )}
            <h2 className="text-h4 md:text-h2 text-custom-black uppercase max-w-[280px]">
              {item.title}
            </h2>
            <p className="text-body text-custom-black/50 max-w-[570px] lg:max-w-[440px]">
              {item.description}
            </p>
            <Button className="uppercase text-subtitle">See Product</Button>
          </div>
        </li>
      ))}
    </ul>
  );
};
