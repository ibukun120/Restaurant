"use client"

import Image from "next/image";
// import { title } from "process";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always cripsy & always hot",
    image: "/slide1.png"
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png"
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.png"
  }
]

export default function Slider(){
  const [currentSlider] = useState(0)

  // useEffect(()=>{
  //    const interval = setInterval(
  //      () => setCurrentSlider((prev) => (prev === data.length -1 ? 0 : prev+1)),
  //      2000
  //      );
  //      return () => clearInterval(interval); 
  //  }, []);
  return(
    <div className="flex flex-col h-[calc(100vh-0.5rem)] md:h-[calc(100vh-3rem)] lg:flex-row">
      {/*text container*/}
      <div className="h-1/2 flex items-center justify-center flex-col gap-4 text-red-500 font-bold lg:h-full lg:w-1/2 bg-fuchsia-50">
        <h1 className="text-center text-5xl p-4  md:text-6xl xl:text-7xl uppercase ">
          {data[currentSlider].title}
        </h1>
        <button className="bg-red-500 py-4 px-8 text-white">Order Now</button>
      </div>

      {/*image container*/}
      <div className="w-full h-1/2 relative lg:h-full lg:w-1/2 ">
        <Image src={data[currentSlider].image} alt="" fill className="object-cover"/>
      </div>
    </div>
  )
}