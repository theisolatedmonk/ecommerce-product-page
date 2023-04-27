import Image from "next/image";
import product1Thumb from "@/images/image-product-1-thumbnail.jpg";

import delet from "@/images/icon-delete.svg";
import previous from "@/images/icon-previous.svg";
import minus from "@/images/icon-minus.svg";
import next from "@/images/icon-next.svg";
import plus from "@/images/icon-plus.svg";
import cart from "@/images/icon-cart.svg";
import menu from "@/images/icon-menu.svg";
import avatar from "@/images/image-avatar.png";
import close from "@/images/icon-close.svg";



export function Card() {
  return (
    
    <div className="cartfill bg-white absolute w-[270px] flex flex-col z-10 rounded-md ml-2 mt-14 p-4  text-xs gap-4 hidden">
    <p>Cart</p>
    <hr />
    <div className="h-16 w-full flex  justify-center items-center gap-[14px]  ">
      <Image className="h-10 w-10 rounded-md" src={product1Thumb} alt="" />
      <div className="flex flex-col">
        <p>Fall Limited Edition Sneakers</p>
        <div className="flex gap-2 ">
          <p>$125 x 3 </p>
          <p>$375.00</p>
        </div>
      </div>
      <button><Image className=" h-3 w-3" src={delet} alt="" /></button>
      
    </div>
    <button className="p-3 bg-orange-500 rounded-md">Checkout</button>
  </div>
  
  );
}


import React from 'react'

type Props = {}

export  function NextBtn() {
  return (
    <div className="flex gap-[200px] px-3 w-full items-center  absolute mt-[-140px]">
    <button className=" bg-white rounded-full p-2 h-8 w-8 flex items-center">
      <Image className="absolute " src={previous} alt="" />
    </button>
    <button className=" bg-white rounded-full p-2 flex items-center h-8 w-8  ">
      <Image className="absolute" src={next} alt="" />
    </button>
  </div>
  )
}



export  function Discription() {
  return (
    <div className="paracontainer p-2">
          <p>SNEAKER COMPANY</p>
          <p>Fall Limited Edition Sneakers</p>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
        </div>
  )
}


export  function Price() {
  return (
    <div className="price flex justify-between p-2">
    <div className="flex gap-2">
      <p>$125.00</p>
      <p className="bg-orange-500 rounded-md p-1">50%</p>
    </div>
    <div>
      <p className="line-through">$250.00</p>
    </div>
  </div>
  )
}



export  function PluseMinuse() {
  return (
    <div className="p-4">
    <div className="itemcount flex justify-between items-center rounded-lg p-2 bg-slate-100">
      <button>
        <Image className=" " src={minus} alt="" />
      </button>
      <p>0</p>
      <button className="flex justify-center  items-center">
        <Image className="  " src={plus} alt="" />
      </button>
    </div>
  </div>
  )
}





export  function AdddCartBtn() {
  return (
    <div className="p-3 text-white">
    <button className="flex justify-center items-center p-2 rounded-lg bg-orange-500 w-full gap-3">
      <Image className="" src={cart} alt="" />
      <p className="">Add to cart</p>
    </button>
  </div>
  )
}


export function Header() {
  return (
    <div className="header flex items-center gap-36 w-full p-2">
    <div className="flex gap-2  items-center">
      <div className="h-3 w-3 flex justify-center items-center ">
        <Image className=" " src={menu} alt="" />
      </div>
      <p>sneakers</p>
    </div>
    <div className="flex gap-2 h-4 w-4">
      <Image className="" src={cart} alt="" />
      <Image className="" src={avatar} alt="" />
    </div>
  </div>
  )
}

export default function MobileMenu() {
  return (
    <div className="w-72 text-black h-full bg-black flex  gap-2 z-30 absolute top-0 bg-opacity-70 hidden ">
    <div className="w-[200px] bg-white p-4 flex flex-col gap-6">
      <Image src={close} alt="" />
      <ul className="gap-4 flex flex-col ">
        <li>Collection</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
  )
}