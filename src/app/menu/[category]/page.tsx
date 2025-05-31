import React from "react"
import { pizzas } from "@/data"
import Link from "next/link"
import Image from "next/image"

export default function CategoryPage(){
  return(
    <div className="flex flex-wrap text-red-500 group">
      {pizzas.map((item)=>(
        <Link className="w-full h-[60vh] p-4 sm:w-1/2 lg:w1/3 border-b-2 border-r-2 border-red-500 flex flex-col justify-between" href={`/product/${item.id}`} key={item.id}>
          {/*image container*/}
          <div className="relative h-[80%]">
          {item.img && <Image src={item.img} alt="" fill className="object-contain"/>}
          </div>
          {/*text container*/}
          <div className="flex justify-between items-center font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">{item.price}</h2>
            <button className="hidden group-hover:block uppercase p-2 bg-red-500 text-white rounded-md" >Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}