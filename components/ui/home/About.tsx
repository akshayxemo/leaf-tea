import Button from "../Button";
import img from "@/public/images/tea-pickers.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="container py-32 flex justify-between items-center gap-6 max-sm:flex-col ">
      <div className="">
        <p className="toptext text-orange-500">About Us</p>
        <h1 className="text-4xl font-serif tracking-wide text-dark-600">
          The story behind our journey
        </h1>
        <p className="mt-4 text-body max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <Button
          isDisabled={false}
          title="Read More"
          containerStyles="bg-light w-32 mt-5 btn-light-hover text-dark"
          href="/about"
        />
      </div>
      <div className="max-sm:hidden">
        <Image src={img} alt="about-image" width={350} height={350} />
      </div>
    </div>
  );
};

export default About;
