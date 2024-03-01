import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Text, Great_Vibes } from "next/font/google";
import "@/styles/globals.css";
import ReduxProvider from "@/redux/ReduxProviders";

const DmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans" });
const DmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dmserif",
});
const GreatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gratevibes",
});

export const metadata: Metadata = {
  title: "Leaf Tea",
  description: "A World of Tea Delights",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          />
          <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        </head>
        <body
          className={`${DmSans.variable} ${DmSerif.variable} ${GreatVibes.variable} font-sans`}
        >
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </html>
    </>
  );
}
