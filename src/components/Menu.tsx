"use client"

import Link from "next/link";
import React, { useState } from "react"
import CartIcon from "./Carticon";
import Image from "next/image";

const links = [
  {id: 1, title: "Homepage", url:"/"},
  {id: 2, title: "Menu", url:"/menu"},
  {id: 3, title: "Working Hours", url:"/"},
  {id: 4, title: "Contact", url:"/"}
]

export default function Menu(){
  const [open, setOpen] = useState(false);

  const user = false;
  return(
    <div>
      {!open ? (<Image src="/open.png" alt="" className="cursor-pointer" width={20} height={20} onClick={()=>setOpen(true)}/>) : (<Image src="/close.png" alt="" className="cursor-pointer" width={20} height={20} onClick={()=>setOpen(false)}/>)
    }

    {open && <div className=" w-full bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-19rem)] flex flex-col gap-8 items-center text-3xl z-50">
      {links.map(item=>(
        <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>{item.title}</Link>
      ))}

      {!user ? (<Link href="/login" onClick={()=>setOpen(false)}>Login</Link>) : (<Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link>)}

      <Link href="/cart" onClick={()=>setOpen(false)}>
      <CartIcon/>
      </Link>
    </div>}
    </div>
  )
}