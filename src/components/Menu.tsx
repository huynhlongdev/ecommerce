"use client";

import { useState } from "react";

import  Image from 'next/image'
import Link from "next/link";

const Menu = () => {
    const [open, setOpen] = useState(false);

    // const handleMenuClick = (prev) => {
    //     setOpen(!prev);
    //     console.log('click', open);
        
    // }
  return (
      <div onClick={()=>setOpen((prev)=>!prev)}>
          <Image src="/menu.png" alt="Menu" width={24} height={24} className="hover:cursor-pointer"/>
          {
              open && (
                  <div className="">
                      <Link href="/"> Home </Link>
                      <Link href="/about"> About us </Link>
                      <Link href="/shop"> Shop </Link>
                      <Link href="/deals"> Deals </Link>
                      <Link href="/contact-us"> Contact </Link>
                      <Link href="/cart"> Cart </Link>
                  </div>
              )
          }
    </div>
  )
}

export default Menu