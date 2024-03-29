"use client";
import Button from "@/components/ui/Button";
// import { options } from "../../api/auth/[...nextauth]/options";
// import { getServerSession } from "next-auth/next";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const page = () => {
  const { data: Session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });
  // const [session, setSession] = useState<any>("");
  // useEffect(() => {
  //   const GetSession = async () => {
  //     const ServerSession = await getServerSession(options);
  //     setSession(ServerSession);
  //   };
  //   GetSession();
  // }, [session]);
  const handleLogOut = async () => {
    // "use server";
    await signOut();
  };

  console.log(Session);
  return (
    <div>
      <div>{Session?.user?.email}</div>
      <div onClick={handleLogOut} className="cursor-pointer">
        Sign Out
      </div>
    </div>
  );
};

export default page;
