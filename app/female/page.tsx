import Card from "@/components/Card";
import feauredList from "@/components/fetauredList";
import Link from "next/link";
export default function Female(){
    return(
        <div className="grid grid-cols-4 mx-36 gap-20">
            
            {
                feauredList.map((itm:any)=>(
                    itm.gender=="F"?<Link href={`/${itm.id}`}><Card name={itm.name} price={itm.price} img={itm.img} id={itm.id} category={itm.category}/></Link>
                    :null
                ))
            }
        </div>
    )
}