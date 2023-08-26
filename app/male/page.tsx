import Card from "@/components/Card";
import feauredList from "@/components/fetauredList";
import Link from "next/link";

export default function Male(){
    return (
        <div className="grid grid-cols-4 mx-36 gap-20">
            {/* <Card name="Brushed Raglan SweatShirt" price="$197" img="/p4.png" id={1}/> */}
            {
                feauredList.map((itm:any)=>(
                    itm.gender=="M"?<Link href={`/${itm.id}`}><Card name={itm.name} price={itm.price} img={itm.img} id={itm.id} category={itm.category}/></Link>
                    :null
                ))
            }
        </div>
    )
}