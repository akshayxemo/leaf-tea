"use client";
import Image from "next/image";
import { Rating } from "../ui/Rating";
import PriceDiscount from "../ui/PriceDiscount";
import QuantityBtn from "../ui/QuantityBtn";
import Button from "../ui/Button";
import Link from "next/link";
import { useAppDispatch } from "@/redux/store";
import { removeItem } from "@/redux/slices/cartSlice";
import { updateQuantity } from "@/redux/slices/cartSlice";

const CartItem = ({
  id,
  name,
  currentPrice,
  quantity,
  image,
  price,
  discount,
  stock,
  addTotal,
  subTotal,
}: {
  id: string;
  name: string;
  currentPrice: number;
  quantity: number;
  image: string;
  price: number;
  discount?: number;
  stock: number;
  addTotal: Function;
  subTotal: Function;
}) => {
  const dispatch = useAppDispatch();

  const add = () => {
    let newQuant = quantity + 1;
    addTotal(currentPrice);
    dispatch(updateQuantity({ id: id, quantity: newQuant }));
  };

  const sub = () => {
    let newQuant = quantity - 1;
    subTotal(currentPrice);
    dispatch(updateQuantity({ id: id, quantity: newQuant }));
  };

  return (
    <div className="flex gap-4 flex-wrap p-4 rounded-md border justify-between flex-1">
      <div className="flex gap-4 flex-wrap items-center justify-center">
        <div>
          <Link href={`/products/${id}`}>
            <Image
              src={image}
              alt="product"
              height={150}
              width={110}
              className="aspect-auto"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Rating rating={4.5} />
          <h1 className="text-2xl font-bold">{name}</h1>
          {discount ? (
            <PriceDiscount
              price={price}
              discount={discount}
              priceStyle="text-lg"
              prevPriceStyle="text-sm"
              discountPriceStyle="text-sm"
            />
          ) : (
            <PriceDiscount
              price={price}
              priceStyle="text-lg"
              prevPriceStyle="text-sm"
              discountPriceStyle="text-sm"
            />
          )}
          <QuantityBtn
            quantity={quantity}
            increment={add}
            decrement={sub}
            stock={stock}
            max={10}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between items-center pl-4 flex-wrap max-md:flex-1">
        <div className="text-center">
          <h1 className="text-lg">Total Ammount</h1>
          <p className="text-xl font-bold text-lime-600">
            ₹ {currentPrice * quantity}
          </p>
        </div>
        <Button
          title="Remove"
          icon="delete"
          containerStyles="text-red-500 hover:bg-red-500 hover:text-white"
          handleClick={() => {
            dispatch(removeItem(id));
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
