"use client";

import React, { FC, useState } from "react";
import { Button } from "@/components/ui";
import { MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddToCartControlProps {}

export const AddToCartControl: FC<AddToCartControlProps> = () => {
  const [value, setValue] = useState(1);

  return (
    <form className="flex gap-4">
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
