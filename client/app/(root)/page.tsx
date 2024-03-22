import About from "@/components/shared/home/About";
import Features from "@/components/shared/home/Features";
import Hero from "@/components/shared/home/Hero";
import ProductFeature from "@/components/shared/home/ProductFeature";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Features />
      {/* <ProductCard /> */}
      <ProductFeature />
    </div>
  );
}
