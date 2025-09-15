import React, { FC } from "react";
import { Products as ProductsList } from "@/reports";
import { Category, PRODUCTS } from "@/data";

interface ProductsProps {
  category: Category;
}

export const Products: FC<ProductsProps> = ({ category }) => {
  const products = PRODUCTS.filter(
    (product) => product.category.toLowerCase() === category.slug
  );

  return (
    <section className="px-4">
      <div className="max-w-custom mx-auto">
        <ProductsList data={products} />
      </div>
    </section>
  );
};
