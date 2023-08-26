"use client"
import {CiSearch} from "react-icons/ci"
import {AiOutlineShoppingCart} from "react-icons/ai"
import Link from "next/link"
import { useSelector } from "react-redux"
import { RootState } from "@/app/store/store"
export default function NavBar(){
    const cartValue = useSelector((state:RootState)=>state.cartSlice.value);
    return(
       <div className="flex flex-row justify-between m-10 items-center">
            <Link href={"/"}><div className="flex flex-row items-center font-bold"><span className="text-4xl font-bold">O</span>Dine Market</div></Link>
            <div className="flex flex-row">
                <ul className="flex gap-10">
                    <li><Link href={"/female"}>Female</Link></li>
                    <li><Link href={"/male"}>Male</Link></li>
                    <li><Link href={"#"}>Kids</Link></li>
                    <li><Link href={"#"}>All Products</Link></li>
                </ul>
            </div>
            <div className="flex flex-row items-center border rounded"> <CiSearch/> <input type="text" placeholder="What Are You Looking For"/></div>
            <Link href={"/cart"}>
            <div className="border  w-10 h-10 rounded-full bg-gray-200 relative">
                <AiOutlineShoppingCart className="w-7 h-7 absolute bottom-0"/>
                <div className="w-5 h-5 border-black rounded-full bg-red-500 absolute inset-x-5 top-0 text-white text-sm text-center">{cartValue.length}</div>
            </div>
            </Link>
       </div>
    )
}