"use client"
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import StripeCheckOutButton from "../checkout/page";
export default function Cart(){
    const cartValue = useSelector((state:RootState)=>state.cartSlice);
    const [totalPrice,setTotalPrice] = useState(0);
    if(cartValue.value.length==0){
        return(<div>Cart is empty</div>)
    }
    console.log(cartValue.total);
    useEffect(()=>{
        cartValue.value.map(element => {
            console.log(element);
            setTotalPrice(totalPrice+Number(element.price));
            console.log(totalPrice);
        });
    },[])
    return(
        <div className="px-20">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <div className="grid grid-cols-2   justify-center gap-20">
                
                <div className="flex flex-col gap-3">
                {cartValue.value.map((element,index)=>(

                <>
                <div className="flex flex-row gap-5">
                    <Image src={"/p1.png"} width={150} height={150} alt="img" className="rounded"/>
                    <div className="flex flex-col justify-between">
                        <h1 className="text-xl font-bold">{element.name}</h1>
                        <h2>{element.category}</h2>
                        <h2 className="font-bold">estimtaed delivery</h2>
                        <h2>5 working days</h2>
                        <h2 className="font-bold">${element.price}</h2>
                    </div>
                    <div className="flex flex-col justify-between">
                        <button>Delete</button>
                        <div className="flex">
                            <button className="bg-red-200 rounded rounded-full w-5 h-5" >-</button>
                            <span>1</span>
                            <button className="bg-red-200 rounded rounded-full w-5 h-5" >+</button>
                        </div>
                    </div>
                </div>
                </>
                ))}
                </div>
                <div className="grid grid-rows-2 ">
                    <h1 className="text-xl font-bold col-span-2">Order Summary</h1>
                    <h2>Quantity</h2>
                    <h2>2</h2>
                    <h2>Sub-total</h2>
                    <h2>${cartValue.total}</h2>
                    <StripeCheckOutButton cartItems={cartValue.value}/>
                </div>
            </div>
        </div>
    )
}