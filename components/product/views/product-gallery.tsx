"use client";

import React, { FC } from "react";
import { Product } from "@/data";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  product: Product;
}

export const ProductGallery: FC<ProductGalleryProps> = ({ product }) => {
  return (
    <section className="px-4">
      <div
        className={cn(
          "max-w-custom mx-auto grid grid-rows-[174px_174px_368px] gap-5 md:hidden"
        )}
      >
        <PhotoProvider>
          {product.gallery.mobile.map((image, index) => (
            <PhotoView key={index} src={image}>
              <img
                className={cn(
                  "rounded-lg w-full h-full object-cover object-center"
                )}
                src={image}
                alt={`${product.name} gallery image ${index + 1}`}
              />
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>

      <div
        className={cn(
          "max-w-custom mx-auto hidden md:grid",
          "md:grid-cols-[277px_1fr] md:grid-rows-[174px_174px] md:gap-4",
          "lg:hidden"
        )}
      >
        <PhotoProvider>
          {product.gallery.tablet.map((image, index) => (
            <PhotoView key={index} src={image}>
              <img
                className={cn(
                  "rounded-lg w-full h-full object-cover object-center",
                  index === 2 && "md:row-span-2 md:col-start-2 md:row-start-1"
                )}
                src={image}
                alt={`${product.name} gallery image ${index + 1}`}
              />
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>

      <div
        className={cn(
          "max-w-custom mx-auto hidden lg:grid",
          "lg:grid-rows-[280px_280px] lg:grid-cols-[445px_1fr] lg:gap-8"
        )}
      >
        <PhotoProvider>
          {product.gallery.desktop.map((image, index) => (
            <PhotoView key={index} src={image}>
              <img
                className={cn(
                  "rounded-lg w-full h-full object-cover object-center",
                  index === 2 && "md:row-span-2 md:col-start-2 md:row-start-1"
                )}
                src={image}
                alt={`${product.name} gallery image ${index + 1}`}
              />
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>
    </section>
  );
};
