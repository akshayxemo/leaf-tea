import Image from "next/image";
import sample from "@/public/images/sample-product.png";
import Button from "./Button";
const ProductCard = () => {
  return (
    <div className="p-4 max-w-64">
      <Image src={sample} alt="product" width={294} height={386} />

      <div className="flex gap-2 flex-col">
        {/* .....................Rating */}
        <div className="flex gap-2 items-center">
          <div className="px-2 py-[0.35rem] bg-lime-600 rounded-md">
            <h6 className="flex items-center gap-1 text-white text-xs font-bold justify-center leading-[0]">
              4.5{" "}
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "12px", fontVariationSettings: `"FILL" 1` }}
              >
                star_rate
              </span>
            </h6>
          </div>
          <p className="text-body text-xs font-semibold">
            2000 Rating & 100 reviews
          </p>
        </div>

        {/* .....................Title */}
        <h3 className="font-bold text-lg leading-[24px]">
          High Quality Oolong Tea
        </h3>

        {/* .....................Price */}
        <div className="flex gap-2 items-center">
          <p className="text-green-500 font-bold text-lg">
            <span className="text-gray-400 line-through font-normal text-sm">
              ₹150
            </span>{" "}
            &nbsp;₹120
          </p>
          <p className="text-orange-500 text-xs">20% discount</p>
        </div>

        {/* .....................Add to cart */}
        <Button
          title="Add to Cart"
          containerStyles="w-full bg-light btn-light-hover justify-center"
        />
      </div>
    </div>
  );
};

export default ProductCard;
