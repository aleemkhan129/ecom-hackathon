import Image from "next/image";
import {AiOutlineShoppingCart} from "react-icons/ai"

export default function Hero(){
    return(
        <div className="flex flex-row mx-20">
            <div className="flex flex-col w-1/2 justify-between">
                <div className="bg-blue-200 px-4 py-2 text-blue-600 rounded-lg w-28">Sale 70%</div>
                <h1 className="text-5xl font-bold md:w-80 lg:w-auto lg:text-6xl">An Industrial Take On StreetWear</h1>
                <text className="w-72">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</text>
                <button className="bg-black text-white flex flex-row items-center w-36 px-3 py-2 gap-2"><AiOutlineShoppingCart className="w-10 h-10"/> Start Shopping</button>
                <div className="flex flex-row justify-between">
                    <Image src={"/Featured1.png"} width={100} height={100} alt="png"/>
                    <Image src={"/Featured2.png"} width={100} height={100} alt="png"/>
                    <Image src={"/Featured3.png"} width={100} height={100} alt="png"/>
                    <Image src={"/Featured4.png"} width={100} height={100} alt="png"/>
                </div>
            </div>
            <div className="bg-[#ffece3]  rounded-full relative ">
                <Image src={"/heroimage.webp"} width={500} height={500} alt="heroimage" className=""/>
            </div>
        </div>
    )
}