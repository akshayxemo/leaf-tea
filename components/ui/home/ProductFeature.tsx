import ProductCard from "../ProductCard";
const ProductFeature = () => {
  return (
    <div className="container py-24">
      <h1 className="text-center text-4xl font-serif text-dark-600">
        Our Products
      </h1>
      <div className="mt-4 flex flex-wrap gap-3 justify-center items-center w-full">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductFeature;
