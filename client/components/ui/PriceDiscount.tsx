import { discountedPrice } from "@/utils";

const PriceDiscount = ({
  price,
  discount,
  priceStyle,
  prevPriceStyle,
  discountPriceStyle,
}: {
  price: number;
  discount?: number;
  priceStyle?: string;
  prevPriceStyle?: string;
  discountPriceStyle?: string;
}) => {
  return (
    <div className="flex gap-3 items-center">
      {price && discount ? (
        <p className={`text-black font-bold ${priceStyle}`}>
          <span
            className={`text-gray-400 line-through font-normal ${prevPriceStyle}`}
          >
            ₹{price}
          </span>{" "}
          &nbsp;₹{discountedPrice(price, discount)}
        </p>
      ) : price && !discount ? (
        <p className={`text-black font-bold ${priceStyle}`}>₹{price}</p>
      ) : (
        "price not set"
      )}
      {discount && discount != 0 ? (
        <p className={`text-orange-500 ${discountPriceStyle}`}>
          {discount}% discount
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default PriceDiscount;
