import React, { FC } from "react";
import { Product } from "@/data";
import { Button, buttonVariants } from "@/components/ui";
import Link from "next/link";

interface SimpleProductsProps {
  data: Product[];
}

export const SimpleProducts: FC<SimpleProductsProps> = ({ data }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-3 lg:gap-6">
      {data.map((product) => (
        <li className="flex flex-col items-center gap-4" key={product.slug}>
          <img
            className="max-h-[150px] h-full w-full object-cover rounded-lg md:hidden"
            src={product.categoryImages.tablet}
            alt={product.name}
          />
          <img
            className="rounded-lg hidden md:block md:max-h-[318px] h-full w-full object-cover lg:hidden"
            src={product.images.tablet}
            alt={product.name}
          />
          <img
            className="rounded-lg hidden lg:block lg:max-h-[318px] h-full w-full object-cover"
            src={product.images.mobile}
            alt={product.name}
          />
          <h3 className="text-custom-black uppercase text-h5 text-center">
            {product.name}
          </h3>
          <Link
            className={buttonVariants({ className: "uppercase text-subtitle" })}
            href={`/products/${product.slug}`}
          >
            See Product
          </Link>
        </li>
      ))}
    </ul>
  );
};
