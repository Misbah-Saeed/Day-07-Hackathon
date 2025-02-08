import Image from "next/image";
// import ShopeHero from "@/Pictures/shophero.png";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../components/Footer";
import SecondHeader from "../components/Header";

export default function Cart() {
    return (
        <>
            <SecondHeader />
            <div className="relative">
                <Image
                    src="/images/Im1.png"
                    alt="backgroud"
                    width={400}
                    height={400}
                    className="object-cover rounded-md w-[100%] h-[300px]"
                />
                <div className=" mt-[-40px]  ml-[-40px] absolute top-[50%] left-[50%] flex justify-center flex-col items-center ">


                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        height={716}
                        width={1440}
                        className="w-full  h-full object-cover"
                    />
                    <h3 className="font-bold text-[1.5rem]">Blog</h3>
                    <div className="flex items-center">
                        <h3>Home</h3>
                        <IoIosArrowForward />
                        <h3>Blog</h3>
                    </div>
                </div>
                {/* <div> */}
                {/* </div> */}
            </div>

           
          
                   <div >
                    <div >
                        <div>
                        <div >
                             <Image
                                        src="/images/blog1.png"
                                        alt="Dining Room"
                                        width={300}
                                        height={200}
                                        className="w-[500px] h-[300px] mt-[100px] mb-[20px] ml-[100px]"
                                      /></div>
                                     
                        <div  >
                            <Image
                                src="/images/blog2.png"
                                width={300}
                                height={200}
                                alt="Picture of the author"
                                className="w-[349px] h-[24px] mt-[5px] mb-[20px] ml-[100px]"
                            />
                        </div>
                        <div className="w-[500px] h-[45px] font-bold mt-[5px] ml-[100px] text-[#000000]"><h1>Going all-in with millennial design</h1>
                        </div>
                        <div className="w-[400px] h-[22.5px] font-bold mt-[5px] ml-[100px] text-[#9F9F9F]"><p> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Mus mauris vitae ultricies leo integer malesuada nunc In nulla posuere sollicitudin aliquam ultrices Morbi blandit cursus risus at ultrices mi tempus imperdiet Libero enim sed faucibus turpis in Cursus mattis molestie a iaculis at erat Nibh cras pulvinar mattis nunc sed blandit libero Pellentesque elit ullamcorper dignissim cras tincidunt Pharetra et ultrices neque ornare aenean euismod elementum</p>
                        </div>
                        <div className="w-[400px] h-[24px] font-bold mt-[250px] mb[400px] ml-[100px] text-[#000000]">Read more
                        </div>
                        </div>
                       
                   
                        <div >
                        <Image
                                        src="/images/blog3.png"
                                        alt="Dining Room"
                                        width={300}
                                        height={200}
                                        className="w-[500px] h-[300px] mt-[50px] mb-[20px] ml-[100px]"
                                      /></div>
                        <div>
                        <Image
                                src="/images/blog4.png"
                                width={300}
                                height={200}
                                alt="Picture of the author"
                                 className="w-[349px] h-[24px] mt-[5px] mb-[20px] ml-[100px]"
                            />
                        </div>
                        <div className="w-[500px] h-[45px] font-bold mt-[5px] ml-[100px] text-[#000000]">Exploring new ways of decorating
                        </div>
                        <div className="w-[400px] h-[22.5px] font-bold mt-[5px] ml-[100px] text-[#9F9F9F]"><p> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Mus mauris vitae ultricies leo integer malesuada nunc In nulla posuere sollicitudin aliquam ultrices Morbi blandit cursus risus at ultrices mi tempus imperdiet Libero enim sed faucibus turpis in Cursus mattis molestie a iaculis at erat Nibh cras pulvinar mattis nunc sed blandit libero Pellentesque elit ullamcorper dignissim cras tincidunt Pharetra et ultrices neque ornare aenean euismod elementum</p>
                        </div>
                        <div  className="w-[400px] h-[24px] font-bold mt-[250px] mb[400px] ml-[100px] text-[#000000]">Read more
                        </div>
                    
                   
                        <div >
                        <Image
                                src="/images/blog5.png"
                                width={300}
                                height={200}
                                alt="Picture of the author"
                                 className="w-[500px] h-[300px] mt-[50px] mb-[20px] ml-[100px]"
                            />
                        </div>
                        <div >
                        <Image
                                src="/images/blog2.png"
                                width={300}
                                height={200}
                                alt="Picture of the author"
                                 className="w-[349px] h-[24px] mt-[5px] mb-[20px] ml-[100px]"
                            />
                        </div>
                        <div  className="w-[500px] h-[45px] font-bold mt-[5px] ml-[100px] text-[#000000]">Handmade pieces that took time to make
                        </div>
                        <div className="w-[400px] h-[22.5px] font-bold mt-[5px] ml-[100px] text-[#9F9F9F]"><p> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Mus mauris vitae ultricies leo integer malesuada nunc In nulla posuere sollicitudin aliquam ultrices Morbi blandit cursus risus at ultrices mi tempus imperdiet Libero enim sed faucibus turpis in Cursus mattis molestie a iaculis at erat Nibh cras pulvinar mattis nunc sed blandit libero Pellentesque elit ullamcorper dignissim cras tincidunt Pharetra et ultrices neque ornare aenean euismod elementum</p>
                        </div>
                        <div  className="w-[400px] h-[24px] font-bold mt-[250px] mb[400px] ml-[100px] text-[#000000]">Read more
                        </div>
                        </div>
                        </div>
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