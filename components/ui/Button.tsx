"use client";

import { ButtonProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Button = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  icon,
  handleClick,
  href,
}: ButtonProps) => {
  const buttonContent = (
    <>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {icon && (
        <div className="relative w-6 h-6">
          {/* <Image src={icon} alt="arrow_left" fill className="object-contain" /> */}
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <button
          disabled={isDisabled}
          type={btnType || "button"}
          className={`custom-btn ${containerStyles}`}
        >
          {buttonContent}
        </button>
      </Link>
    );
  }
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
