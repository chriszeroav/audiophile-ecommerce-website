import { Hero, Products } from "@/components/category";
import { About, Categories } from "@/components/layout";
import { CATEGORIES } from "@/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const category = CATEGORIES.find((item) => item.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found",
      description: "Category you are looking for does not exist.",
    };
  }

  return {
    title: category.title,
    description: `Searching products in the ${category.title} category.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = CATEGORIES.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-28">
      <Hero category={category} />
      <Products products={category.products} />
      <Categories />
      <About />
    </main>
  );
}
