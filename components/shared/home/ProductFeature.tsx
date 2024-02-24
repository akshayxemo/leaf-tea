import { getProducts } from "@/lib/actions/product.action";
import ProductCard from "../../ui/ProductCard";
import { ProductParams } from "@/types";
import Link from "next/link";

const ProductFeature = async () => {
  const response = await getProducts();
  const products = JSON.parse(response as string);
  // console.log(products);
  return (
    <div className="container py-24">
      <h1 className="text-center text-4xl font-serif text-dark-600">
        Our Products
      </h1>
      <div className="mt-4 flex flex-wrap gap-3 justify-center items-center w-full">
        {products &&
          products.map((product: ProductParams, index: any) => {
            return (
              <Link href={`/products/${product._id}`} key={index}>
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  discount={product.discount}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ProductFeature;
