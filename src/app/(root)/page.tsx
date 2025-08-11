import HeroSection from "@/components/HeroSection";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <section className="b-sky-500 w-full mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl space-y-10">
      <HeroSection />

      <ProductList />
    </section>
  );
}
