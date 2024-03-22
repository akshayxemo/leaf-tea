"use client"; // Error components must be Client Components

import Image from "next/image";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="pb-20 pt-36 container flex items-center justify-center flex-col text-center">
      <Image
        src={"/icons/siren.png"}
        alt="siren"
        width={80}
        height={80}
        className="mb-3"
      />
      <h2 className="text-4xl font-serif font-bold text-dark-600 mb-4">
        Something went wrong!
      </h2>
      <button onClick={() => reset()} className="text-xl">
        Try again
      </button>
    </div>
  );
}
