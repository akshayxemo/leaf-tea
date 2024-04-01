import Image from "next/image";
import loadingGif from "@/public/icons/icons8-loading.gif";

export default function loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen text-black bg-white absolute z-50 top-0 left-0">
      <div>
        <Image src={loadingGif} alt="loading-gif" />
        <p className="text-md mt-2 text-dark">loading...</p>
      </div>
    </div>
  );
}
