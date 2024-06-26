import ProductCard from "../ProductCard";
import { ProductParams } from "@/types";
import axios from "axios";

const ProductFeature = async () => {
  try {
    // URL construction
    const URL = `${process.env.NEXT_PUBLIC_SERVER_ORIGIN}/top-products`;
    const searchParams = new URLSearchParams({
      top: "4",
    });

    // API Call
    const response = await axios.get(`${URL}?${searchParams}`);
    // console.log(response);
    const products = await response.data;

    // action based on result
    if (products && products.length > 0) {
      console.log(products);
      return (
        <div className="container py-24">
          <h1 className="text-center text-4xl font-serif text-dark-600">
            Our Products
          </h1>
          <div className="mt-4 flex flex-wrap gap-3 justify-center items-center w-full">
            {products &&
              products.map((product: ProductParams, index: any) => {
                return (
                  <ProductCard
                    key={index}
                    id={product._id as string}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    discount={product.discount}
                  />
                );
              })}
          </div>
        </div>
      );
    } else {
      throw new Error("No data found");
    }
  } catch (error: any) {
    console.error("Error fetching products:", error);
    return (
      <>
        <div className="container py-24">
          <h1 className="text-center text-4xl font-serif text-dark-600">
            Our Products
          </h1>
          <div className="text-center w-full p-4 text-red-500">
            {error.message || "Failed to fetch data"}
          </div>
        </div>
      </>
    );
  }
};

export default ProductFeature;
