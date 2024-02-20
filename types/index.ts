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
