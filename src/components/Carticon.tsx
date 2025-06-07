import Image from "next/image";
import Link from "next/link";
import React from "react";
// import Image from "next/image";

export default function CartIcon(){
  return(
    <div>
      
        
      <Link href="/cart" className="flex items-center justify-center gap-3">
      <div className="reltive w-8 h-8 md:h-5">
      <Image src="/cart.png" alt="" width={40} height={20} className="h-8 md:h-5"/>
      </div>
      <span>Cart {3}</span>
      </Link>
      
    </div>
  ) 
}