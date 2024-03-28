// "use client";
import Button from "@/components/ui/Button";
import { options } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { signOut } from "next-auth/react";
import Link from "next/link";

const page = async () => {
  const handleLogOut = async () => {
    "use server";
    await signOut();
  };
  const session = await getServerSession(options);
  console.log(session);
  return (
    <div>
      <div>{session?.user?.email}</div>
      <div onClick={handleLogOut} className="cursor-pointer">
        Sign Out
      </div>
    </div>
  );
};

export default page;
