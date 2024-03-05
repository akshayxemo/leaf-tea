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
  count,
  notification,
}: ButtonProps) => {
  const buttonContent = (
    <>
      <span className={`${textStyles} flex items-center gap-1 relative`}>
        {icon && <span className="material-symbols-outlined">{icon}</span>}
        {title}
        {notification && (
          <div className="bg-red-500 text-white p-[0.3rem] text-sm rounded-full absolute left-0 top-1 aspect-square animate-pulse"></div>
        )}
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
