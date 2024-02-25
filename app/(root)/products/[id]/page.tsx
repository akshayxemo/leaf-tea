import { Rating, RatingAndReviews } from "@/components/ui/Rating";
import { getProductById } from "@/lib/actions/product.action";
import Image from "next/image";
import { discountedPrice } from "@/utils";
import QuantityBtn from "@/components/ui/QuantityBtn";
import Button from "@/components/ui/Button";
import { ProductParams } from "@/types";
import PriceDiscount from "@/components/ui/PriceDiscount";

const Page = async ({ params }: { params: { id: string } }) => {
  const response = await getProductById(params.id);
  const product: ProductParams = JSON.parse(response ? response : "");
  // console.log(product);
  return (
    <div className="container flex flex-wrap gap-4 relative max-md:flex-col flex-row max-md:items-center">
      <div className="px-4 py-12 max-md:pb-0 max-md:w-full max-md:flex max-md:justify-center">
        <div className="sticky top-28">
          <Image
            src={product.image}
            alt="product-image"
            width={360}
            height={500}
            className="rounded-md object-cover"
          />
          <div className="flex gap-3">
            <Button
              title="Buy Now"
              containerStyles="bg-lime-700 text-light btn-dark-hover flex-1 h-12"
            />
            <Button
              title="Add to Cart"
              containerStyles="bg-light text-dark-600 btn-light-hover flex-1 h-12"
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-12 flex-1 max-md:w-full">
        <div className="grid grid-cols-5 grid-rows-4">
          {/* ........row-1 */}
          <div className="col-span-4 text-3xl font-bold text-black">
            {product.name}
          </div>
          <div className="col-span-1 flex items-center justify-center flex-nowrap gap-2">
            <span
              className="material-symbols-outlined bg-gray-100 text-gray-500 rounded-full p-2 aspect-square cursor-pointer"
              style={{ fontVariationSettings: `"FILL" 1` }}
            >
              share
            </span>
          </div>

          {/* ........row-2 */}
          <div className="flex items-center gap-3 col-span-5">
            <Rating rating={4.5} />
            <RatingAndReviews ratingCount={2000} reviewsCount={110} />
          </div>

          {/* ........row-3 */}
          <div className="col-span-5">
            <PriceDiscount price={product.price} discount={product.discount} />
          </div>

          {/* ........row-4 */}
          <div className="col-span-5">
            <QuantityBtn />
          </div>
        </div>

        <div className="mt-8 pt-5 border-t-2 flex flex-col gap-10">
          <div>
            <h2 className="text-xl font-bold mb-1">Product Description</h2>
            <p className="text-body">{product.description}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-1">Ingredients</h2>
            <p className="text-body">
              {product.ingridients?.length != 0
                ? product.ingridients?.join(", ")
                : "None Specified"}
            </p>
          </div>

          {product.videoUrl && (
            <div className="">
              <h2 className="text-xl font-bold mb-4">Product Story</h2>
              <iframe
                className="w-full h-auto aspect-video rounded-md"
                src={product.videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
