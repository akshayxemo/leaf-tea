"use client";
import CartItem from "@/components/shared/CartItem";
import TotalCartPriceBar from "@/components/shared/TotalCartPriceBar";
import { useAppSelector } from "@/redux/store";
import { CartParams } from "@/types";
import { discountedPrice } from "@/utils";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";

const page = () => {
  const cartItem = useAppSelector((state) => state.cart.cartItems);
  const [cart, setCart] = useState<CartParams[]>([]);
  const [cartLen, setCartLen] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [erroLen, setErrorLen] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (cartItem.length > 0) {
      fetchCartItems();
    }
    setCartLen(cartItem.length);
  }, [cartItem]);

  const fetchCartItems = async () => {
    try {
      setErrorLen(0);
      setLoading(true);
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
    } catch (error: any) {
      setErrorLen((prev) => prev + 1);
      console.log("cart error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  async function getProduct(
    id: string,
    quantity: number,
    currentPrice: number
  ) {
    try {
      //URL construction
      const URL = `${process.env.NEXT_PUBLIC_SERVER_ORIGIN}/product/${id}`;
      // API call
      const response = await axios.get(URL);
      const product = await response.data;

      let price = currentPrice;
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

  const addTotalPrice = (price: number) => {
    setTotalPrice(totalPrice + price);
  };

  const subTotalPrice = (price: number) => {
    setTotalPrice(totalPrice - price);
  };

  return (
    <div className="container pb-20 pt-36">
      <div className="text-center mb-4">
        <h1 className="font-serif text-4xl text-dark-600">My Cart</h1>
        <p className="text-body">items that you have selected are here</p>
      </div>
      {loading ? (
        <p className="text-center w-full">loading.....</p>
      ) : (
        <>
          {cartLen > 0 && erroLen === 0 ? (
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
          ) : erroLen > 0 && cartLen > 0 ? (
            <div className="flex flex-col items-center justify-center gap-5">
              <h3 className="text-center text-4xl text-lime-800/60">
                Error Fetching Data
              </h3>
              <Button
                variant="outlined"
                startIcon={<ReplayOutlinedIcon />}
                onClick={fetchCartItems}
                color="secondary"
              >
                Retry
              </Button>
            </div>
          ) : (
            <h3 className="text-center text-4xl text-lime-800/60">
              {" "}
              Your cart is empty
            </h3>
          )}
        </>
      )}
    </div>
  );
};

export default page;
