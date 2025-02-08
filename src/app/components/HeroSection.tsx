import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[63rem]">
      {/* Hero Image */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/images/hero.png"
          width={1440}
          height={100}
          alt="Picture of the author"
          className="object-cover w-full h-full"
        />

        {/* Hero Text */}
        <div className="absolute top-1/2 left-1/2  ml-[230px] transform -translate-x-1/2 -translate-y-1/2 bg-[#FFF3E3] p-16 rounded-lg text-center space-y-4">
          <h6 className="font-bold">New Arrival</h6>
          <h3 className="text-3xl font-extrabold text-[#B88E2F]">Discover Our <br /> New Collection</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore
          </p>
          <button className="bg-[#B88E2F] text-white py-2 px-12 rounded-lg hover:bg-[#A67C2D] transition duration-300">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
