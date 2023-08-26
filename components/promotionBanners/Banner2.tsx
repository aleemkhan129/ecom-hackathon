import Image from "next/image";

export default function Banner2(){
    return(
        <div className="bg-black flex flex-col flex-grow items-center justify-between px-5 text-white px-5 py-5">
            <h1 className="text-3xl font-bold text-white">GET UPTO 30%</h1>
            <h2>USE PROMO CODE</h2>
            <h2 className="bg-gray-600 rounded px-10 py-1">DINEWEEKENDSALE</h2>
        </div>
    )
}