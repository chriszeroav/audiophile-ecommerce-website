import React, { FC } from "react";
import { Category } from "@/data";

interface HeroProps {
  category: Category;
}

export const Hero: FC<HeroProps> = ({ category }) => {
  return (
    <section className="px-4 bg-custom-black">
      <div className="max-w-custom mx-auto">
        <h1 className="text-custom-white text-h4 uppercase py-10 text-center">
          {category.title}
        </h1>
      </div>
    </section>
  );
};
