"use client";
import { addItem } from "@/redux/slices/cartSlice";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "@/redux/store";

const ProductActionBtn = ({
  productId,
  name,
  price,
}: {
  productId: string;
  name: string;
  price: number;
}) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((item) => item.cart.cartItems);
  console.log(cartItems);

  const product = { id: productId, name: name, price: price, quantity: 1 };
  return (
    <div className="flex gap-3">
      <Button
        title="Buy Now"
        containerStyles="bg-lime-700 text-light btn-dark-hover flex-1 h-12"
      />
      {cartItems.some((item) => item.id == productId) ? (
        <Button
          title="Already added"
          containerStyles="btn-disable flex-1 h-12"
          isDisabled={true}
        />
      ) : (
        <Button
          title="Add to Cart"
          containerStyles="bg-light text-dark-600 btn-light-hover flex-1 h-12"
          handleClick={() => {
            dispatch(addItem(product));
          }}
        />
      )}
    </div>
  );
};

export default ProductActionBtn;
