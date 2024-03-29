const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex relative">
      <div className="md:w-[50%] w-full flex flex-col flex-1 justify-center items-center">
        {children}
        <div>
          <p className="text-body text-xs mt-4">
            Photo by{" "}
            <a
              href="https://unsplash.com/@mitifotos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              className="underline"
            >
              Miti
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/photos/tea-serve-on-white-teacup-DFtvglCPWjY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              className="underline"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
      <div className="w-[50%] h-full overflow-hidden p-4 max-md:absolute max-md:-z-10 max-md:w-full">
        <img
          src={"/images/loginSideImg.jpg"}
          alt="welcome tea"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default layout;
