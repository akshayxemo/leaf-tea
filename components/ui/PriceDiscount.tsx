import { discountedPrice } from "@/utils";

const PriceDiscount = ({
  price,
  discount,
}: {
  price: number;
  discount?: number;
}) => {
  return (
    <div className="flex gap-3 items-center">
      {price && discount ? (
        <p className="text-black font-bold text-2xl">
          <span className="text-gray-400 line-through font-normal text-base">
            ₹{price}
          </span>{" "}
          &nbsp;₹{discountedPrice(price, discount)}
        </p>
      ) : price && !discount ? (
        <p className="text-black font-bold text-2xl">₹{price}</p>
      ) : (
        "price not set"
      )}
      {discount && discount != 0 ? (
        <p className="text-orange-500 text-sm">{discount}% discount</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default PriceDiscount;
