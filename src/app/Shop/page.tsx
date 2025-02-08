import Image from "next/image";
import ShopImage from "@/Pictures/shophero.png";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../components/Footer";
import SecondHeader from "../components/Header";
import Items from "../components/Product";
export default function ShopHero() {
  return (
    <><SecondHeader />
      {/* shopsect */}
      <div className="relative">
        <Image src={ShopImage} alt="Picture of the author" />
        <div className="absolute  ml-[-40px] mt-[-40px] top-[50%] left-[50%] flex justify-center flex-col items-center ">
          <Image
            src="/images/logo.png"
            alt="Logo"
            height={716}
            width={1440}
            className="w-full  h-full object-cover"
          />
          <h3 className="font-bold text-[1.5rem]">Shop</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Shop</h3>
          </div>
        </div>
        {/* <div> */}
        {/* </div> */}
      </div>
      <Items/>

        

        <div className=" flex gap-2 justify-center mt-[60px] " >
          <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">1</button>
          <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">2</button>
          <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">3</button>
          <button className="w-[4rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">Next</button>
        </div>
        <div className="mb-3 mt-10 flex justify-evenly items-center p-2 w-[100%] h-[200px] bg-[#F9F1E7]">
          <div className=" ">
            <Image
              src="/images/Vector.png"
              width={40}
              height={40}
              alt="Picture of the author"
            />

            <h4 className="font-bold">High Quality</h4>
            <p>crafted from top materials</p>
          </div>
          <div>
            <Image
              src="/images/Vector (1).png"
              width={40}
              height={40}
              alt="Picture of the author"
            />
            <h4 className="font-bold">Warranty Protection</h4>
            <p>Over 2 years</p>
          </div>
          <div>
            <Image
              src="/images/Vector (2).png"
              width={40}
              height={40}
              alt="Picture of the author"
            />
            <h4 className="font-bold">Free Shipping</h4>
            <p>Order over 150 $</p>
          </div>
          <div>
            <Image
              src="/images/Vector (3).png"
              width={40}
              height={40}
              alt="Picture of the author"
            />
            <h4 className="font-bold">24 / 7 Support</h4>
            <p>Dedicated support</p>
          </div>

        </div>
      
      <Footer />
    </>
  );
}