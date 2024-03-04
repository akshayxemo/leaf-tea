"use client";

import { ButtonProps } from "@/types";
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
      <span className={`${textStyles} flex items-center gap-1`}>
        {icon && <span className="material-symbols-outlined">{icon}</span>}
        {title}
      </span>
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
