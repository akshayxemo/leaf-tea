import Button from "@/components/ui/Button";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="text-center max-w-[600px]">
        <Image
          src={"/images/green-tea.png"}
          alt="green-tea-icon-png"
          width={100}
          height={100}
          className="mx-auto mb-4"
        />
        <h2 className="text-xl">404, Not Found</h2>
        <h1 className="text-4xl font-bold text-lime-700 font-serif my-2">
          Oops, Lost in the Tea Leaves!
        </h1>
        <p className="text-body">Could not find requested resource</p>
        <Button
          title="Return Home"
          href="/"
          containerStyles="mx-auto my-2"
          textStyles="underline"
        />
      </div>
      <div className="fixed bottom-0 left-0 p-4 w-full text-center border-t">
        <a
          href="https://www.flaticon.com/free-icons/green-tea"
          title="green tea icons"
          className="text-xs"
        >
          Green tea icons created by Flat Icons - Flaticon
        </a>
      </div>
    </div>
  );
}
