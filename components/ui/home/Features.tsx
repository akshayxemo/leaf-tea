import Image from "next/image";
import FeatImg from "@/public/images/tea-feature.png";
import { features } from "@/constants";

const Features = () => {
  return (
    <div className="py-32 overflow-hidden bg-light w-full relative -z-[1]">
      <div className="container flex flex-row justify-between max-lg:flex-col">
        <div className="max-w-[60%] max-lg:max-w-[100%] pr-3 max-sm:pr-0">
          {features.map((feat) => {
            return (
              <div
                className="flex gap-4 mb-10 max-xsm:flex-col max-xsm:text-center"
                key={feat.title}
              >
                <div className="">
                  <span
                    className="material-symbols-outlined group-hover:scale-110 transition ease-in-out delay-150 rounded-full aspect-square border-2 border-lime-600 text-light bg-lime-600"
                    style={{ fontSize: "50px" }}
                  >
                    {feat.icon}
                  </span>
                </div>
                <div className="">
                  <div className="">
                    <h1 className="text-3xl font-semibold text-dark-600 mb-2 max-xxsm:text-2xl">
                      {feat.title}
                    </h1>
                  </div>
                  <div className="">
                    <p className="text-body">{feat.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative max-xsm:hidden flex items-center justify-center">
          <Image
            src={FeatImg}
            alt="feature-img"
            width={550}
            height={550}
            className="relative z-10 -right-7 max-sm:-right-0"
          />
          <div className="bg-dark transform rotate-[30deg] w-[800px] h-[2000px] absolute -right-[500px] -top-[400px] max-lg:rotate-[80deg] max-lg:-right-0 max-lg:-top-[300px] -z-[1]"></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
