import { Url } from "next/dist/shared/lib/router/router";
import { Key, MouseEventHandler } from "react";

export interface ButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  icon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  notification?: boolean;
}

export interface IconProps {
  icon: string;
  fill?: boolean;
  fontsize?: string;
  iconClass?: string;
}

export interface Navlinks {
  id: Key;
  title: string;
  icon: string;
  link: Url;
}

export interface ProductParams {
  _id?: string;
  name: string;
  description: string;
  ingridients?: Array<string>;
  videoUrl?: string;
  stock: number;
  price: number;
  discount?: number;
  image: string; // Use File type for image input
  overallRating?: number;
}

export interface CartParams {
  _id: string;
  name: string;
  price: number;
  discount?: number;
  image: string; // Use File type for image input
  overallRating?: number;
  quantity: number;
  currentPrice: number;
  stock: number;
}

//..................Store.................
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
}
