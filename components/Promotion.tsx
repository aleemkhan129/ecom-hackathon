import Banner1 from "./promotionBanners/Banner1";
import Banner2 from "./promotionBanners/Banner2";
import Banner3 from "./promotionBanners/Banner3";

export default function Promotions(){
    return(
        <div className="flex flex-col items-center gap-10 my-36 mx-20">
            <h1 className="text-blue-700 font-bold">Promotions</h1>
            <h1 className="text-3xl font-bold">Out Promotions Events</h1>
            <div className="flex flex-row w-full gap-5">
                <div className="flex flex-col w-[70%] gap-5">
                    <Banner1/>
                    <Banner2/>
                </div>
                <Banner3 title={"Flex Push Button Bomber"} price="$225.00" salePrice="$190.00" img="/event3.png"/>
                <Banner3 title="Flex SweatShirt" price="$100.00" salePrice="$75.00" img="/event2.png" />

            </div>
        </div>
    )
}