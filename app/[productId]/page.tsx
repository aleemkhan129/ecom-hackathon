"use client"
import Image from "next/image";
import feauredList from "@/components/fetauredList";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { cartActions } from "../store/slice/cartSlice";
export default function ProductPage({params}){
    const cartValue = useSelector((state:RootState)=>state.cartSlice.value);
    const dispatch = useDispatch();
    let productId = params.productId;
    const [counter,setCounter] = useState(1);
    const [itm,setItm] = useState({});
    const [found,setFound] = useState(false);
    const incrementCounter =()=>{
        setCounter(counter+1);
    }
    const decrementCounter =()=>{
        setCounter(counter-1);
    }
    const addToCart = ()=>{
        dispatch(cartActions.addToCart({id:itm.id,name:itm.name,price:itm.price,img:itm.img,gender:itm.gender,category:itm.category}))
    }
    console.log(cartValue);
    useEffect(()=>{
        const findItm = feauredList.find(element=>element.id==productId)
        if(findItm)setFound(true);
        setItm(findItm);
        console.log(itm);
    },[])
    if(!found){
        return(<div>page not found</div>)
    }
    const AddToCart = ()=>{

    }
    return(
        <div className="flex flex-row gap-6 justify-center">
            <div>
                <Image src={itm.img} height={150} width={150} alt="img"/>
            </div>
            <div>
                <Image src={itm.img} height={500} width={500} alt="img"/>
            </div>
            <div className="flex flex-col gap-6">
                <h1 className="font-bold text-xl">{itm.name}</h1>
                <h2 className="font-bold text-gray-500">{itm.category}</h2>
                <div>
                    <h1 className="font-bold">select size</h1>
                    <div className="flex flex-row gap-4 text-gray-500 font-bold">
                        <span className="">xs</span>
                        <span>xl</span>
                        <span>xxl</span>
                        <span>m</span>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <h1 className="font-bold">Quantity</h1>
                    <button className="bg-red-200 rounded rounded-full w-5 h-5" onClick={decrementCounter}>-</button>
                    <span>{counter}</span>
                    <button className="bg-red-200 rounded rounded-full w-5 h-5" onClick={incrementCounter}>+</button>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <button className="bg-black text-white p-2" onClick={addToCart}>Add To Cart</button>
                    <span className="font-bold">{itm.price}</span>
                </div>
            </div>
        </div>
    )
}