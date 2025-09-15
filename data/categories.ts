export interface Category {
  slug: string;
  title: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: "headphones",
    title: "Headphones",
    image: "/shared/desktop/image-category-thumbnail-headphones.png",
  },
  {
    slug: "speakers",
    title: "Speakers",
    image: "/shared/desktop/image-category-thumbnail-speakers.png",
  },
  {
    slug: "earphones",
    title: "Earphones",
    image: "/shared/desktop/image-category-thumbnail-earphones.png",
  },
];
