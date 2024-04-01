import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session: any = await getServerSession(options);

  if (session) {
    redirect(
      `/dashboard/${session.user?.role === "Admin" ? "a" : "u"}/${
        session.user?.id
      }`
    );
  }

  return <div className="min-h-screen w-full">{children}</div>;
};

export default layout;
