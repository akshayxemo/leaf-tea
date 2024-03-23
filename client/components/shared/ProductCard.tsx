"use client";
import Image from "next/image";
import { discountedPrice } from "@/utils";
import Button from "../ui/Button";
import Link from "next/link";
import { addItem } from "@/redux/slices/cartSlice";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import PriceDiscount from "../ui/PriceDiscount";
import { Rating, RatingAndReviews } from "../ui/Rating";

const ProductCard = ({
  id,
  image,
  name,
  price,
  discount,
}: {
  id: string;
  image: string;
  name: string;
  price: number;
  discount?: number;
}) => {
  let item = { id: id, name: name, price: price, quantity: 1 };
  if (discount) {
    item = {
      ...item,
      price: Number(discountedPrice(price, discount)),
    };
  }
  // console.log(item);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();
  // console.log("Cart: ", cartItems);

  return (
    <div className="p-4 max-w-64">
      <Link href={`/products/${id}`}>
        <Image
          src={image}
          alt="product"
          width={224}
          height={309}
          className="object-cover xxsm:min-h-[309px] rounded-md"
        />

        <div className="flex gap-2 flex-col mt-2">
          {/* .....................Rating */}
          <div className="flex gap-2 items-center">
            <Rating rating={4.5} />
            <RatingAndReviews ratingCount={2000} reviewsCount={100} />
          </div>

          {/* .....................Title */}
          <h3 className="font-bold text-lg leading-[24px]">{name}</h3>

          {/* .....................Price */}
          <PriceDiscount
            price={price}
            discount={discount}
            priceStyle="text-lg text-green-500"
            prevPriceStyle="text-sm"
            discountPriceStyle="text-xs"
          />
        </div>
      </Link>
      {/* .....................Add to cart */}
      {cartItems.some((item) => item.id == id) ? (
        <Button
          title="Already added"
          containerStyles="w-full btn-disable justify-center mt-3"
          isDisabled={true}
          handleClick={() => {
            dispatch(addItem(item));
          }}
        />
      ) : (
        <Button
          title="Add to Cart"
          containerStyles="w-full bg-light btn-light-hover justify-center mt-3"
          handleClick={() => {
            dispatch(addItem(item));
          }}
        />
      )}
    </div>
  );
};

export default ProductCard;
