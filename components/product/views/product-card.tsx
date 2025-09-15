import React, { FC } from "react";
import { Product } from "@/data";
import { AddToCartControl } from "@/forms";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <section className="px-4">
      <div
        className={cn(
          "max-w-custom mx-auto",
          "flex flex-col gap-8",
          "md:flex-row md:gap-16"
        )}
      >
        <picture className="rounded-lg overflow-hidden block md:w-full">
          <img
            src={product.images.mobile}
            alt={product.name}
            className="md:hidden"
          />
          <img
            src={product.images.tablet}
            alt={product.name}
            className="hidden md:block md:max-h-[480px] md:w-full lg:hidden object-cover"
          />
          <img
            src={product.images.desktop}
            alt={product.name}
            className="hidden lg:block lg:max-h-[560px] lg:w-full object-cover"
          />
        </picture>
        <div
          className={cn(
            "flex flex-col gap-8",
            "md:justify-center md:max-w-[340px]",
            "lg:max-w-[450px]"
          )}
        >
          <div className="flex flex-col gap-3">
            {product.isNew && (
              <p className="text-overline text-custom-primary">NEW PRODUCT</p>
            )}
            <h2 className="text-h4 uppercase text-custom-black">
              {product.name}
            </h2>
          </div>
          <p className="text-body text-custom-black/50">
            {product.description}
          </p>
          <p className="text-h6 text-custom-black">${product.price}</p>
          <AddToCartControl />
        </div>
      </div>
    </section>
  );
};
