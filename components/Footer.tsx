import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    return(
        <>
        <div className="flex flex-row justify-evenly mt-36">
            <div className="flex flex-col gap-10">
                <div className="flex flex-row items-center font-bold"><span className="text-4xl font-bold">O</span>Dine Market</div>
                <text>Small, atisan label that offers a throughtfully curated collection<br/>of high quality everyday essentials made</text>
                <div className="flex flex-row gap-3">
                    <FacebookIcon size={32} className="border p-1 bg-[#F1F1F1] rounded"/>
                    <TwitterIcon size={32} className="border p-1 bg-[#F1F1F1] rounded"/>
                    <InstagramIcon size={32} className="border p-1 bg-[#F1F1F1] rounded"/>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-xl">Company</h1>
                <Link href={"#"}>About</Link>
                <Link href={"#"}>Terms of Use</Link>
                <Link href={"#"}>Privacy Policy</Link>
                <Link href={"#"}>How it Works</Link>
                <Link href={"#"}>Contact Us</Link>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-xl">Support</h1>
                <Link href={"#"}>Support Career</Link>
                <Link href={"#"}>24h Service</Link>
                <Link href={"#"}>Quick Chat</Link>
            </div>
            <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Contact</h1>
                <Link href={"#"}>Whatsapp</Link>
                <Link href={"#"}>Support 24h</Link>
            </div>
        </div>
        <hr className="mt-20 p-2"/>
        <div className="flex flex-row justify-evenly">
            <text>Copyright © 2022 Dine Market</text>
            <text>Desined by. <span className="font-bold">Weird Design Studio</span></text>
            <text>Code by.<span className="font-bold">Aleem Khan</span></text>
        </div>
        </>
    )
}