import Image from "next/image";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen w-full">{children}</div>;
};

export default layout;
