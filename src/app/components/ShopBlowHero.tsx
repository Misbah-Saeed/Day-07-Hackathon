
import Image from "next/image";
import Filter from "@/Pictures/filter.png"
export default function BlowHero() {
    return (
        <>
            <div className="showBlowBar w-[100%] h-[4rem] bg-[#F9F1E7]" >
                <div className="firstRow">
                    <Image src={Filter} width={30} alt="Picture of the author" />
                    <p>Filter</p>


                    <p>|   Showing 1–16 of 32 results</p>
                </div>



                <div className="secondRow">
                    <p>Show</p>
                    {/* <div > 16</div> */}

                    <input className="w-[2.5rem] h-[2.5rem] bg-gray-150 text-white text-center self-center" type="text" placeholder="16" name="" id="" />
                    <p>Short by</p>
                    <input className="w-[8rem] h-[2.5rem] bg-gray-150  text-white text-center self-center" type="text" placeholder="16" name="" id="" />
                </div>
            </div>
        </>
    )
}
