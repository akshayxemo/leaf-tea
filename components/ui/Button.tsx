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
      <span className={`${textStyles}`}>{title}</span>
      {icon && (
        <div className="relative">
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
          className={`custom-btn flex items-center gap-2 justify-center ${containerStyles}`}
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
      className={`custom-btn flex items-center gap-2 justify-center ${containerStyles}`}
      onClick={handleClick}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
