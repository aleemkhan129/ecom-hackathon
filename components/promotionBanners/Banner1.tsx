import Image from "next/image";

export default function Banner1(){
    return(
        <div className="bg-gray-300 flex flex-row items-center justify-between px-5">
            <div className="flex flex-col">
            <h1 className="text-3xl font-bold">GET UP TO 60%</h1>
            <text>For the summer season</text>
            </div>
            <Image src={"/event1.png"} width={250} height={100} alt="event"/>
        </div>
    )
}