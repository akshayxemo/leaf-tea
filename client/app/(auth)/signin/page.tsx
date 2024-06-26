import SignInForm from "@/components/shared/auth/SignInForm";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link
        href={"/"}
        className="flex flex-row gap-3 items-center justify-start mb-4 group hover:cursor-pointer"
      >
        <div className="p-3 rounded-full aspect-square border group-hover:bg-gray-50">
          <ArrowBackOutlinedIcon />
        </div>
        <span>Home</span>
      </Link>
      <div className="w-96 p-4 flex flex-col gap-4 rounded-md border bg-white shadow-xl">
        <h1 className="text-4xl font-serif text-center text-orange-700">
          Login
        </h1>
        <p className="tracking-widest uppercase text-center text-sm">
          Welcome Back
        </p>
        <SignInForm />
      </div>
    </div>
  );
};

export default page;
