import { About, Categories } from "@/components/layout";
import {
  GoBack,
  ProductCard,
  ProductDetails,
  ProductGallery,
  Products,
} from "@/components/product";
import { PRODUCTS } from "@/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "Product you are looking for does not exist.",
    };
  }

  return {
    title: product.name,
    description: "Experience the best quality sound with the " + product.name,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-32 pt-24">
      <div className="flex flex-col gap-6 lg:gap-10 pt-8">
        <GoBack />
        <ProductCard product={product} />
      </div>
      <ProductDetails product={product} />
      <ProductGallery product={product} />
      <Products product={product} />
      <Categories />
      <About />
    </main>
  );
}
