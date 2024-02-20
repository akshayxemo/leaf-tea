import Button from "../Button";
const Hero = () => {
  return (
    <div className="object-cover bg-cover relative h-screen bg-hero-image flex">
      <div className="container text-white my-auto mx-0">
        <p className="toptext mt-10">Welcome to</p>
        <h1 className="text-7xl font-serif leading-snug tracking-wide">
          A World of Tea <br />
          Delights <span className="font-display text-6xl">Pure & Organic</span>
        </h1>
        <Button
          isDisabled={false}
          title="Explore"
          containerStyles="border-light border-2 w-32 mt-5 text-light hover:text-dark hover:bg-light"
          textStyles=""
          href="/shop"
        />
      </div>
    </div>
  );
};

export default Hero;
