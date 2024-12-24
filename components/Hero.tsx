import Image from "next/image";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <div className="relative w-24 h-24">
          <Image
        src="/chain.jpg"
        alt="logo"
        layout="fill"
        className="object-cover rounded-full"
          />
        </div>
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Best <span className="text-purple-500">Anime</span> of
          All Time
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="/jjk.jpg" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}

export default Hero;
