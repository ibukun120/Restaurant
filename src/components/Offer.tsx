import Image from "next/image";
// import CountDown from "./CountDown";

export default function Offer(){
  return(
    <div className="bg-black h-[90vh] flex flex-col md:flex-row text-white md:justify-between md:h-[70vh]">
      {/*text container*/}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 p-6">
        <h1 className="text-5xl font-bold xl:text-6xl">Delicious Burger & French Fry</h1>
        <p className="xl:text-xl ">Progressively simplify effectivee-tailers and process-centric methods of employment. Quickly ponificate parallel.</p>
        {/* <CountDown/> */}
        <button className="bg-red-500 rounded-md py-3 px-6">Order Now</button>

      </div>
      {/*text container*/}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain"/>
      </div>
    </div>
  )
}