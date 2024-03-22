"use client";
import CartItem from "@/components/shared/CartItem";
import TotalCartPriceBar from "@/components/shared/TotalCartPriceBar";
import { getProductById } from "@/lib/actions/product.action";
import { useAppSelector } from "@/redux/store";
import { CartParams } from "@/types";
import { discountedPrice } from "@/utils";
import { useEffect, useState } from "react";

const page = () => {
  const cartItem = useAppSelector((state) => state.cart.cartItems);
  const [cart, setCart] = useState<CartParams[]>([]);
  const [cartLen, setCartLen] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addTotalPrice = (price: number) => {
    setTotalPrice(totalPrice + price);
  };

  const subTotalPrice = (price: number) => {
    setTotalPrice(totalPrice - price);
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      let total = 0;
      const updatedCart = await Promise.all(
        cartItem.map(async (item) => {
          const product = await getProduct(item.id, item.quantity, item.price);
          total += product.currentPrice * item.quantity;
          return product;
        })
      );

      setCart(updatedCart);
      setTotalPrice(total);
    };

    if (cartItem.length > 0) {
      fetchCartItems();
    }
    setCartLen(cartItem.length);
  }, [cartItem]);

  async function getProduct(
    id: string,
    quantity: number,
    currentPrice: number
  ) {
    try {
      const response = await getProductById(id);
      const product = JSON.parse(response ? response : "");
      let price = 0;
      if (product.discount) {
        price = Number(discountedPrice(product.price, product.discount));
      }
      if (currentPrice != price) {
        currentPrice = price;
      }
      return { ...product, quantity, currentPrice };
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  }

  return (
    <div className="container pb-20 pt-36">
      <div className="text-center mb-4">
        <h1 className="font-serif text-4xl text-dark-600">My Cart</h1>
        <p className="text-body">items that you have selected are here</p>
      </div>
      {cartLen > 0 ? (
        <div className="flex flex-wrap gap-4 mt-4 max-sm:flex-col">
          <div className="flex-1 flex gap-4 flex-col md:justify-between max-md:justify-center">
            {cart.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  currentPrice={item.currentPrice}
                  quantity={item.quantity}
                  image={item.image}
                  price={item.price}
                  discount={item.discount}
                  stock={item.stock}
                  addTotal={addTotalPrice}
                  subTotal={subTotalPrice}
                />
              );
            })}
          </div>
          <div>
            <TotalCartPriceBar total={totalPrice} delivery={40} />
          </div>
        </div>
      ) : (
        <h3 className="text-center text-4xl text-lime-800/60">
          {" "}
          Your cart is empty
        </h3>
      )}
    </div>
  );
};

export default page;
