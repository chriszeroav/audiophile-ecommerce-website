"use client";

import React, { FC, useState } from "react";
import { Button } from "@/components/ui";
import { MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/cart";
import { Product } from "@/data";

interface AddToCartControlProps {
  product: Product;
}

export const AddToCartControl: FC<AddToCartControlProps> = ({ product }) => {
  const [value, setValue] = useState(1);
  const { addToCart } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToCart(product, value);
    setValue(1);
  };

  return (
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <div className="flex bg-custom-gray">
        <Button
          className="aspect-square"
          type="button"
          variant="none"
          size="none"
          onClick={() => setValue((prev) => Math.max(prev - 1, 1))}
        >
          <MinusIcon className="text-custom-black/25" />
        </Button>
        <input
          readOnly
          value={value}
          className={cn(
            "w-full outline-none text-center text-subtitle text-custom-black",
            "[&::-webkit-outer-spin-button]:appearance-none",
            "[&::-webkit-inner-spin-button]:appearance-none",
            "[-moz-appearance:textfield]"
          )}
          type="number"
        />
        <Button
          className="aspect-square"
          type="button"
          variant="none"
          size="none"
          onClick={() => setValue((prev) => prev + 1)}
        >
          <PlusIcon className="text-custom-black/25" />
        </Button>
      </div>
      <Button className="text-subtitle uppercase" type="submit">
        Add to cart
      </Button>
    </form>
  );
};
