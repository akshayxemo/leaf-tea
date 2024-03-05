"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { navlinks } from "@/constants";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/store";

const Navbar = () => {
  const cartListLen = useAppSelector((item) => item.cart.cartItems.length);
  const [scrollColor, setScrollColor] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const path = usePathname();

  useEffect(() => {
    if (window.scrollY > 400) {
      setScrollColor(true);
    }
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrollColor(true);
      } else {
        setScrollColor(false);
      }

      const currentScrollPos = window.scrollY;

      // Check if scrolling up or down
      const isScrollingUp = currentScrollPos < prevScrollPos;

      // Show/hide navbar based on scrolling direction
      setIsVisible((prevState) =>
        isScrollingUp || currentScrollPos < 100 ? true : false
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <header
      className={`${
        isVisible ? `fixed` : "hidden"
      } top-0 left-0 border-b-[0.5px] z-50 w-full transition-all duration-1000 ${
        path === "/"
          ? `fixed ${
              scrollColor
                ? "bg-dark-600 border-dark text-light"
                : "border-white/35 text-white backdrop-blur"
            }`
          : "bg-dark-600 border-dark text-light"
      }`}
    >
      <nav className="container flex flex-1 justify-between">
        <div className="p-1 flex justify-between items-center">
          {/*.................... logo */}
          <Image
            src={"/images/logo-tea.png"}
            alt="logo"
            width={120}
            height={20}
          />
          {/* <h1 className="text-2xl py-4 flex items-center gap-1">
            <span className="material-symbols-outlined">
              temp_preferences_eco
            </span>
            Leaf Tea
          </h1> */}
        </div>

        {/*.................... Navs */}
        <div className="p-1 divide-x-[0.5px] divide-white/35 flex gap-4 items-center justify-end">
          <div className="flex gap-6 justify-center items-center last:mr-4">
            {navlinks.map((nav) => {
              return (
                <div key={nav.id}>
                  <Link
                    href={nav.link}
                    className="grid grid-cols-gridFlex grid-rows-1 group gap-2"
                  >
                    <span
                      className="material-symbols-outlined group-hover:scale-110 transition ease-in-out delay-150 col-span-1 row-span-1 text-right flex items-center justify-end"
                      // style={{ fontSize: "30px" }}
                    >
                      {nav.icon}
                    </span>
                    <span className="col-span-1 row-span-1 flex items-center justify-start">
                      {nav.title}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
          {/*.................... Signp & Cart */}
          <div className="p-2 flex items-center">
            <div>
              <Button
                title=""
                icon="shopping_bag"
                href="/cart"
                notification={cartListLen > 0 ? true : false}
              />
            </div>
            <div>
              <Button title="" icon="account_circle" href="/signup" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
