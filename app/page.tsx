import {
  Hero,
  PromoCard,
  SimplePromoCard,
  SplitPromoCard,
} from "@/components/home";
import { About, Categories } from "@/components/layout";

export default function Page() {
  return (
    <main className="flex flex-col gap-28">
      <Hero />
      <Categories />
      <div className="flex flex-col gap-6 md:gap-8">
        <PromoCard />
        <SimplePromoCard />
        <SplitPromoCard />
      </div>
      <About />
    </main>
  );
}
