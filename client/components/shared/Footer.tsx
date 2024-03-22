import Image from "next/image";
import Link from "next/link";
import { navlinks } from "@/constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <footer className="w-full bg-light text-dark">
      <div className="container flex flex-wrap max-md:flex-col py-10 justify-between gap-5">
        <div>
          <Image
            src={"/images/logo-tea-dark.png"}
            alt="logo"
            width={150}
            height={50}
          />
        </div>

        <div>
          <h1 className="uppercase font-black">Navigations</h1>
          <div className="mt-1 flex flex-col gap-1">
            {navlinks.map((nav) => {
              return (
                <Link href={nav.link} key={nav.id}>
                  <p className="hover:text-orange-500 hover:font-semibold">
                    {nav.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h1 className="uppercase font-black">Contacts</h1>
          <div className="mt-1 flex flex-col gap-1">
            <div className="flex gap-1 items-center justify-start">
              <span
                className="material-symbols-outlined group-hover:scale-110 transition ease-in-out delay-150 text-right flex items-center justify-end"
                style={{ fontSize: "18px" }}
              >
                phone
              </span>
              <p className="col-span-1 row-span-1">9878414521 | 5484754625</p>
            </div>

            <div className="flex gap-1 items-center justify-start">
              <span
                className="material-symbols-outlined group-hover:scale-110 transition ease-in-out delay-150 text-right flex items-center justify-end"
                style={{ fontSize: "18px" }}
              >
                mail
              </span>
              <p className="col-span-1 row-span-1">leaftea@gmail.com</p>
            </div>

            <div className="flex gap-1 items-center justify-start">
              <span
                className="material-symbols-outlined group-hover:scale-110 transition ease-in-out delay-150 text-right flex items-center justify-end"
                style={{ fontSize: "18px" }}
              >
                location_on
              </span>
              <p className="col-span-1 row-span-1">
                Harinavi, Basumati Flat no 34A, Kolkata 700148
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="uppercase font-black">Socials</h1>
          <div className="flex gap-2 mt-1">
            <Link href={"/"} className="hover:text-orange-500">
              <FacebookIcon />
            </Link>
            <Link href={"/"} className="hover:text-orange-500">
              <InstagramIcon />
            </Link>
            <Link href={"/"} className="hover:text-orange-500">
              <YouTubeIcon />
            </Link>
            <Link href={"/"} className="hover:text-orange-500">
              <XIcon />
            </Link>
            <Link href={"/"} className="hover:text-orange-500">
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="container py-5 border-t border-orange-500">
        <p className="text-center text-sm">
          Icons by{" "}
          <a
            href="https://mui.com/material-ui/material-icons/"
            target="blank"
            className="underline"
          >
            Material Icon
          </a>
          ,&nbsp;
          <a
            href="https://fonts.google.com/icons"
            target="blank"
            className="underline"
          >
            Materia Symbols
          </a>
          , and&nbsp;
          <a href="https://icons8.com/" target="blank" className="underline">
            Icon8
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
