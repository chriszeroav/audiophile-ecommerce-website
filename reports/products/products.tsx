import React, { FC } from "react";
import { Product } from "@/data";
import { Button, buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
            src={item.categoryImages.mobile}
            alt={item.name}
            className="rounded-lg md:hidden"
          />
          <img
            src={item.categoryImages.tablet}
            alt={item.name}
            className="rounded-lg hidden md:block lg:hidden"
          />
          <img
            src={item.categoryImages.desktop}
            alt={item.name}
            className="rounded-lg hidden lg:block max-w-[540px]"
          />
          <div className="flex flex-col items-center lg:items-start lg:text-start text-center lg:justify-center gap-6">
            {item.isNew && (
              <p className="text-overline text-custom-primary uppercase">
                New Product
              </p>
            )}
            <h2 className="text-h4 md:text-h2 text-custom-black uppercase max-w-[280px]">
              {item.name}
            </h2>
            <p className="text-body text-custom-black/50 max-w-[570px] lg:max-w-[440px]">
              {item.description}
            </p>
            <Link
              href={`/products/${item.slug}`}
              className={buttonVariants({
                className: "uppercase text-subtitle",
              })}
            >
              See Product
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};
