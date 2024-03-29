"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { navlinks } from "@/constants";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import AccountSettings from "./auth/AccountSettings";

const Navbar = () => {
  const cartListLen = useAppSelector((item) => item.cart.cartItems.length);
  const [scrollColor, setScrollColor] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }

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
  }, [prevScrollPos, path]);

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
      <nav className="container flex flex-1 justify-between items-center">
        <div className="p-1 flex justify-between items-center">
          {/*.................... logo */}
          <Image
            src={"/images/logo-tea.png"}
            alt="logo"
            width={120}
            height={20}
          />
        </div>

        {/*.................... Navs */}
        <div
          className={`p-1 md:divide-x-[0.5px] max-md:divide-y-[0.5px] divide-white/35 flex gap-4 md:items-center md:justify-end max-md:justify-center max-md:flex-col max-md:bg-dark max-md:p-8 max-md:h-screen max-md:absolute top-0 transition-all duration-300 ease-in ${
            menuOpen ? "right-0" : "-right-52"
          }`}
        >
          <div className="flex gap-6 justify-center items-center max-md:flex-col max-md:items-start">
            {navlinks.map((nav) => {
              return (
                <div key={nav.id} className="last:mr-2">
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
          <div className="p-2 flex items-center gap-4 max-md:pt-4">
            <div>
              <Link href={"/cart"} className="px-4">
                <Badge badgeContent={cartListLen} color="error">
                  <ShoppingBagOutlinedIcon />
                </Badge>
              </Link>
            </div>

            <AccountSettings />
          </div>
        </div>

        {menuOpen && (
          <div className="max-md:w-screen max-md:absolute bg-black/35 top-0 left-0 md:hidden h-screen -z-[1] overflow-hidden"></div>
        )}

        <div
          onClick={handleMenuOpen}
          className={`cursor-pointer md:hidden relative z-50 transition-all duration-200 ease-in`}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
