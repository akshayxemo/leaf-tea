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
}

export interface Navlinks {
  id: Key;
  title: String;
  icon: string;
  link: Url;
}

export interface ProductParams {
  name: string;
  description: string;
  ingredients: string[];
  videoUrl: string;
  stock: number;
  price: number;
  discount: number;
  image: string | null; // Use File type for image input
  overallRating: number;
}
