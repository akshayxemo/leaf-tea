import ProductCard from "@/components/ui/ProductCard";
import About from "@/components/ui/home/About";
import Features from "@/components/ui/home/Features";
import Hero from "@/components/ui/home/Hero";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Features />
      <ProductCard />
    </div>
  );
}
