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
    <div className="cartfill bg-white absolute w-[270px] flex flex-col z-10 rounded-md ml-2 mt-14   text-xs  font-KumbhSans hidden ">
      <p className="p-4 ">Cart</p>
      <hr className="w-full p-0" />
     <div className="w-full flex flex-col p-4 gap-4 ">
     <div className="h-16 w-full flex  justify-center items-center gap-[14px]  ">
        <Image className="h-10 w-10 rounded-md" src={product1Thumb} alt="" />
        <div className="flex flex-col ">
          <p className="text-xs text-[hsl(220,14%,75%)]">Fall Limited Edition Sneakers</p>
          <div className="flex gap-2 ">
            <p className=" text-xs text-[hsl(220,14%,75%)]">$125.00 x 3 </p>
            <p className="text-xs font-bold">$375.00</p>
          </div>
        </div>
        <button>
          <Image className=" h-3 w-3" src={delet} alt="" />
        </button>
      </div>
      <button className="p-3 text-xs font-bold text-white bg-[hsl(26,100%,55%)] rounded-md">Checkout</button>
     </div>
    </div>
  );
}

import React from "react";

type Props = {};

export function NextBtn() {
  return (
    <div className="flex gap-[200px] px-3 w-full items-center  absolute inset-0">
      <button className=" bg-white rounded-full p-2 h-8 w-8 flex items-center">
        <Image className="absolute " src={previous} alt="" />
      </button>
      <button className=" bg-white rounded-full p-2 flex items-center h-8 w-8  ">
        <Image className="absolute" src={next} alt="" />
      </button>
    </div>
  );
}

export function Discription() {
  return (
    <div className="paracontainer flex flex-col gap-2 p-4 mt-4">
      <p className="font-bold text-xs text-[hsl(26,100%,55%)] ">
        SNEAKER COMPANY
      </p>
      <p className="font-extrabold text-xl">Fall Limited Edition Sneakers</p>
      <p className="text-xs text-[hsl(220,14%,75%)]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
    </div>
  );
}

export function Price() {
  return (
    <div className="price flex  items-center justify-between  p-4">
      <div className="flex gap-2">
        <p className="font-extrabold">$125.00</p>
        <p className="bg-[hsl(26,100%,55%)] bg-opacity-20 rounded-md p-1 font-bold text-xs text-[hsl(26,100%,55%)] ">
          50%
        </p>
      </div>
      <div>
        <p className="line-through font-bold text-xs text-[hsl(220,14%,75%)]">
          $250.00
        </p>
      </div>
    </div>
  );
}

export function PluseMinuse() {
  return (
    <div className="p-4 ">
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
  );
}

export function AdddCartBtn() {
  return (
    <div className="p-3 text-white font-KumbhSans">
      <button className="flex justify-center items-center p-3 rounded-lg bg-[hsl(26,100%,55%)] w-full gap-3">
        <Image className=" h-3 w-3 " src={cart} alt="" />
        <p className=" font-bold text-xs">Add to cart</p>
      </button>
    </div>
  );
}

export function Header() {
  return (
    <div className="header flex items-center  w-full  text-xl justify-between p-4">
      <div className="flex gap-3  items-center  border-red-300 ">
        <Image className=" h-3 w-3" src={menu} alt="" />
        <p className="   font-bold mb-1">sneakers</p>
      </div>
      <div className="flex gap-3 h-4">
        <div className=" ">
          <p className="text-[8px] font-bold text-center bg-[hsl(26,100%,55%)] rounded-lg absolute z-20 ml-2 top-3 px-1">3</p>
          <Image className="h-full w-auto relative" src={cart} alt="" />
        </div>
        <Image className="h-full w-auto" src={avatar} alt="" />
      </div>
    </div>
  );
}

export default function MobileMenu() {
  return (
    <div className="w-72 text-black h-screen bg-black flex  gap- z-30 absolute top-0 bg-opacity-70 text-xs font-bold hidden">
      <div className="w-[190px] bg-white p-4 flex flex-col gap-8">
        <Image className="h-3 w-3" src={close} alt="" />
        <ul className="gap-4 flex flex-col ">
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
