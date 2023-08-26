import Image from "next/image";

export default function FeatureSection(){
    return(
        <div className="mt-32 flex flex-row bg-[#fbfcff] items-center p-20 justify-evenly relative ">
            <h1 className="w-[50%] text-7xl font-bold text-[#EBECEF] leading-normal">Different<br/> From<br/> Others</h1>
            <Image src={"/p4.png"} width={300} height={300} alt="Itm" />
            <div className="flex flex-col w-[30%] items-start gap-5 pl-5">
                <text>This piece is ethically crafted in out small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</text>
                <button className="bg-black text-white px-10 py-2 border">See All Products</button>
            </div>
            <div className="flex flex-row absolute w-1/2 gap-10 left-20 ">
                <div className="flex flex-col gap-10 w-72">
                    <div>
                        <h1 className="text-xl font-bold">Using good Quality Materials</h1>
                        <text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatibus </text>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Using good Quality Materials</h1>
                        <text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatibus </text>
                    </div>
                </div>
                <div className="flex flex-col gap-10 w-72">
                    <div>
                        <h1 className="text-xl font-bold">Using good Quality Materials</h1>
                        <text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatibus </text>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Using good Quality Materials</h1>
                        <text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatibus </text>
                    </div>
                </div>
            </div>
            <h1 className="absolute text-4xl font-bold -top-12 right-20">Unique and Authentic Vintage<br/>Designer Jewellery</h1>
        </div>
    )
}