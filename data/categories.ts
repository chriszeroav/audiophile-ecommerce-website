export interface Product {
  slug: string;
  title: string;
  isNew: boolean;
  description: string;
  imageMobile: string;
  imageTablet: string;
  imageDesktop: string;
}

export interface Category {
  slug: string;
  title: string;
  products: Product[];
}

export const CATEGORIES: Category[] = [
  {
    slug: "headphones",
    title: "Headphones",
    products: [
      {
        slug: "xx99-mark-two-headphones",
        title: "XX99 Mark II Headphones",
        description:
          "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        isNew: true,
        imageMobile:
          "/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
        imageTablet:
          "/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
        imageDesktop:
          "/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
      },
      {
        slug: "xx99-mark-one-headphones",
        title: "XX99 Mark I Headphones",
        description:
          " As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        isNew: false,
        imageMobile:
          "/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
        imageTablet:
          "/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
        imageDesktop:
          "/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
      },
      {
        slug: "xx59-headphones",
        title: "XX59 Headphones",
        description:
          "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        isNew: false,
        imageMobile:
          "/product-xx59-headphones/mobile/image-category-page-preview.jpg",
        imageTablet:
          "/product-xx59-headphones/tablet/image-category-page-preview.jpg",
        imageDesktop:
          "/product-xx59-headphones/desktop/image-category-page-preview.jpg",
      },
    ],
  },
  {
    slug: "speakers",
    title: "Speakers",
    products: [
      {
        slug: "zx9-speaker",
        title: "ZX9 Speaker",
        description:
          " Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        isNew: true,
        imageMobile:
          "/product-zx9-speaker/mobile/image-category-page-preview.jpg",
        imageTablet:
          "/product-zx9-speaker/tablet/image-category-page-preview.jpg",
        imageDesktop:
          "/product-zx9-speaker/desktop/image-category-page-preview.jpg",
      },
      {
        slug: "zx7-speaker",
        title: "ZX7 Speaker",
        description:
          "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        isNew: false,
        imageMobile:
          "/product-zx7-speaker/mobile/image-category-page-preview.jpg",
        imageTablet:
          "/product-zx7-speaker/tablet/image-category-page-preview.jpg",
        imageDesktop:
          "/product-zx7-speaker/desktop/image-category-page-preview.jpg",
      },
    ],
  },
  {
    slug: "earphones",
    title: "Earphones",
    products: [
      {
        slug: "yx1-wireless-earphones",
        title: "YX1 Wireless Earphones",
        description:
          "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        isNew: true,
        imageMobile:
          "/product-yx1-earphones/mobile/image-category-page-preview.jpg",
        imageTablet:
          "/product-yx1-earphones/tablet/image-category-page-preview.jpg",
        imageDesktop:
          "/product-yx1-earphones/desktop/image-category-page-preview.jpg",
      },
    ],
  },
];
