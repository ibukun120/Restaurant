import { menu } from "@/data";
import Link from "next/link";
import React from "react";

export default function MenuPage(){
  return(
    <div className="p-2 lg:px-20 xl:px-40 h-[calc(100vh-1rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {
        menu.map((category)=>(<Link 
        href={category.slug}
        key={category.id}
        className="w-full h-1/3 bg-cover p-5 md:h-3/4"
        style={{backgroundImage: `url(${category.img})`}}>
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm py-6">{category.desc}</p>
            <button className={`hidden xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>Explore</button>
          </div>
        </Link>))
      }
    </div>
  )
}