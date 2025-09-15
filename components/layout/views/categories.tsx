import React, { FC } from "react";
import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface CategoriesProps {}

export const Categories: FC<CategoriesProps> = () => {
  return (
    <section className="px-4">
      <ul
        className={cn(
          "max-w-custom mx-auto",
          "grid grid-cols-1 auto-rows-[217px] gap-4",
          "md:grid-cols-3 lg:auto-rows-[284px] lg:gap-8"
        )}
      >
        <Category
          href="/categories/headphones"
          src="/shared/desktop/image-category-thumbnail-headphones.png"
          title="HEADPHONES"
        />

        <Category
          href="/categories/speakers"
          src="/shared/desktop/image-category-thumbnail-speakers.png"
          title="SPEAKERS"
        />

        <Category
          href="/categories/earphones"
          src="/shared/desktop/image-category-thumbnail-earphones.png"
          title="EARPHONES"
        />
      </ul>
    </section>
  );
};

interface CategoryProps {
  src: string;
  title: string;
  href: string;
}

const Category: FC<CategoryProps> = ({ href, src, title }) => {
  return (
    <li className="relative bg-custom-light-grey rounded-lg">
      <img
        className="max-w-36 mx-auto z-10 relative lg:max-w-60"
        src={src}
        alt="HEADPHONES"
      />
      <div
        className={cn(
          "flex flex-col items-center justify-end gap-2",
          "w-full h-[165px] absolute bottom-0",
          "bg-custom-gray rounded-lg text-center p-4"
        )}
      >
        <h3 className="text-custom-black text-h6">{title}</h3>
        <Link
          href={href}
          className={buttonVariants({
            variant: "ghost",
            className: "uppercase text-subtitle h-auto",
          })}
        >
          Shop
          <ChevronRightIcon className="text-custom-primary" />
        </Link>
      </div>
    </li>
  );
};
