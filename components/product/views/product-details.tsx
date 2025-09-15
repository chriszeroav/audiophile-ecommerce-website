import React, { FC } from "react";
import { Product } from "@/data";
import { cn } from "@/lib/utils";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const features = product.features;
  const inBoxes = product.inTheBox;

  return (
    <section className="px-4">
      <div className="max-w-custom mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32">
        <div className="flex flex-col gap-4 lg:max-w-[635px]">
          <h3 className="text-h5 md:text-h3 text-custom-black uppercase">
            Features
          </h3>
          {features.map((feature, index) => (
            <p className="text-custom-black/50 text-body" key={index}>
              {feature}
            </p>
          ))}
        </div>

        <div
          className={cn(
            "flex flex-col gap-4",
            "md:flex-row md:justify-between md:max-w-[600px]",
            "lg:flex-col lg:justify-start"
          )}
        >
          <h3 className="text-h5 md:text-h3 text-custom-black uppercase">
            In the box
          </h3>
          <ul className="flex flex-col gap-2">
            {inBoxes.map((item, index) => (
              <li
                className="text-custom-black/50 text-body inline-flex gap-2"
                key={index}
              >
                <p className="text-custom-primary w-[25px]">{item.quantity}x</p>
                <p className="text-custom-black/50">{item.item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
