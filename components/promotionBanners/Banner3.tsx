import Image from "next/image";

export default function Banner3({title,price,salePrice,img}:any){
    return(
        <div className="bg-[#efe1c7] pt-5 px-5">
            <h1 className="text-xl">{title}</h1>
            <h1 className="text-xl"> <span className="line-through pr-3">{price}</span><span className="font-bold">{salePrice}</span></h1>
            <Image src={img} height={300} width={300} alt="event" />
        </div>
    )
}