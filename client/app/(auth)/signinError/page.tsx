import { redirect } from "next/navigation";
const page = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  redirect(`/signin?callbackUrl=/&error=${searchParams?.error}`);
  //   return <div>page {searchParams?.error}</div>;
};

export default page;
