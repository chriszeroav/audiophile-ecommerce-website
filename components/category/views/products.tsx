import React, { FC } from "react";
import { Product } from "@/data";
import { Products as ProductsList } from "@/reports";

interface ProductsProps {
  products: Product[];
}

export const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <section className="px-4">
      <div className="max-w-custom mx-auto">
        <ProductsList data={products} />
      </div>
    </section>
  );
};
