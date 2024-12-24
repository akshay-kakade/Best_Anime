import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 rounded flex justify-between items-center gap-2 flex-wrap bg-[#0e4aee]">
      <p className="text-base font-bold text-white">@2025 World of <b>Anime</b></p>
        <Image
              src="/chain.jpg"
              alt="logo"
              height={24}
              width={24}
              className="object-cover rounded-full"
                />
      <div className="flex items-center gap-6">
        <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  );
}

export default Footer;
