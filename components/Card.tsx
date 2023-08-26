import Image from "next/image";

export default function Card({name="Brushed Raglan SweatShirt",price="$197",img="/p4.png",id,category=""}:any){
    return(
        <div key={id} className="">
            <Image src={img} width={300} height={300} alt="featured products" />
            <h1 className="font-bold pt-3">{name}</h1>
            <text>{category}</text>
            <h1 className="font-bold">${price}</h1>
        </div>
    )
}