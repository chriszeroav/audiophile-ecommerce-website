import React, { FC } from "react";
import { SimpleProducts } from "@/reports";
import { Product, PRODUCTS } from "@/data";

interface ProductsProps {
  product: Product;
}

export const Products: FC<ProductsProps> = ({ product }) => {
  const filteredProducts = PRODUCTS.filter(
    (item) => item.slug !== product.slug
  );

  const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  return (
    <section className="px-4">
      <div className="max-w-custom mx-auto flex flex-col gap-8">
        <h2 className="uppercase text-custom-black text-h5 md:text-h3 text-center">
          You may also like
        </h2>
        <SimpleProducts data={selected} />
      </div>
    </section>
  );
};
