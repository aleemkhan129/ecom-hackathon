export default function NewsLetter(){
    return(
        <div className="flex items-center justify-center relative my-36">
            <h1 className="text-7xl text-[#EBECEF] tracking-wide font-bold">NewsLetter</h1>
            <div className="flex flex-col absolute gap-3">
                <h1 className="text-xl font-bold">Subscibe Our NewsLetter</h1>
                <text>Get the latest information and promo offers directly</text>
                <div className="flex flex-row gap-2">
                    <input className="border border-black p-2" type="text" placeholder="Input email address"/>
                    <button className="bg-black text-white px-2 py-1">Get Started</button>
                </div>
            </div>  
        </div>
    )
}