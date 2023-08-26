import Card from "./Card";
import Swiper from "./Swiper";

export default function FeaturedProducts(){
    return(
        <div className="my-20 mx-20">
        <div className="flex flex-col items-center my-20 mx-20 gap-10 ">
            <h2 className="text-blue-700 font-bold">Products</h2>
            <h1 className="text-3xl font-bold">Check What We Have</h1>
        </div>
        <Swiper/>
        </div>
    )
}