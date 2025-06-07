import { featuredProducts } from "@/data"
import Image from "next/image"
// import { it } from "node:test"
import React from "react"

export default function Featured(){
  return(
    <div className="w-screen overflow-x-scroll text-red-500">
      {/*wrapper*/}
      <div className="w-max flex">
        {/*single item*/}
        {featuredProducts.map((item) => (
        <div key={item.id} className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
         {/*image container*/}
         {item.img && <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
          <Image src={item.img} alt="" className="object-contain" fill/>
         </div>}
         {/*text container*/}
          <div className="flex-1 flex flex-col gap-4 items-center text-center justify-center">
            <h1 className="text-xl pt-4 font-bold uppercase xl:text-2xl">{item.title}</h1>
            <p className="">{item.desc}</p>
            <span className="text-xl font-bold">${item.price}</span>
            <button className="bg-red-500 text-white p-2 rounded-lg">Add to Cart</button>
          </div>
        </div>))}
      </div>
    </div>
  )
}