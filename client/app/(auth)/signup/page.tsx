import SignUpForm from "@/components/shared/auth/SignUpForm";
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
      <div className="w-96 p-4 flex flex-col gap-2 rounded-md border bg-white shadow-xl">
        <p className="tracking-widest uppercase text-center text-sm">
          New Here !
        </p>
        <h1 className="text-4xl font-serif text-center text-lime-700 mb-3">
          Register Now
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default page;
