"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { navlinks } from "@/constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrollColor, setScrollColor] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (window.scrollY > 2) {
      setScrollColor(true);
    }
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setScrollColor(true);
      } else {
        setScrollColor(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      //   window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        scrollColor
          ? "absolute bg-dark-600 border-dark text-light "
          : path === "/"
          ? "absolute border-white/35 text-white backdrop-blur"
          : "bg-dark-600 border-dark text-light"
      } top-0 left-0 border-b-[0.5px] z-50 w-full transition-all duration-1000`}
    >
      <nav className="container divide-x-[0.5px] divide-white/35 flex flex-1 justify-between">
        <div className="p-1 flex justify-between gap-4 items-center w-full">
          {/*.................... logo */}
          {/* <Image
            src={"/images/logo-tea.png"}
            alt="logo"
            width={120}
            height={20}
          /> */}
          <h1 className="text-2xl py-4 flex items-center gap-1">
            <span className="material-symbols-outlined">
              temp_preferences_eco
            </span>
            Leaf Tea
          </h1>

          {/*.................... Navs */}
          <div className="flex gap-6 justify-center items-center last:mr-4">
            {navlinks.map((nav) => {
              return (
                <div key={nav.id}>
                  <Link href={nav.link} className="nav-items group">
                    <span
                      className="material-symbols-outlined group-hover:scale-110 transition ease-in-out delay-150"
                      // style={{ fontSize: "30px" }}
                    >
                      {nav.icon}
                    </span>
                    <span>{nav.title}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/*.................... Signp & Cart */}
        <div className="p-2 flex items-center">
          <Button title="" icon="shopping_bag" href="/login" />
          <Button title="" icon="account_circle" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
