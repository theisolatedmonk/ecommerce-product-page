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
import logo from "@/images/logo.svg";

export function Card() {
  return (
    <div className="cartfill bg-white absolute w-[270px] flex flex-col z-10 rounded-md ml-2 mt-14   text-xs  font-KumbhSans hidden ">
      <p className="p-4 ">Cart</p>
      <hr className="w-full p-0" />
      <div className="w-full flex flex-col p-4 gap-4 ">
        <div className="h-16 w-full flex  justify-center items-center gap-[14px]  ">
          <Image className="h-10 w-10 rounded-md" src={product1Thumb} alt="" />
          <div className="flex flex-col ">
            <p className="text-xs text-[hsl(220,14%,75%)]">
              Fall Limited Edition Sneakers
            </p>
            <div className="flex gap-2 ">
              <p className=" text-xs text-[hsl(220,14%,75%)]">$125.00 x 3 </p>
              <p className="text-xs font-bold">$375.00</p>
            </div>
          </div>
          <button>
            <Image className=" h-3 w-3" src={delet} alt="" />
          </button>
        </div>
        <button className="p-3 text-xs font-bold text-white bg-[hsl(26,100%,55%)] rounded-md">
          Checkout
        </button>
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
        <Image className="mb-[3px] h-4 w-[100px] " src={logo} alt="" />
      </div>
      <div className="flex gap-3 h-4">
        <div className=" ">
          <p className=" h-[16px] w-[20px] font-bold text-center bg-[hsl(26,100%,55%)] rounded-full absolute z-20 ml-2 top-3 px-1 text-[8px] flex items-center justify-center text-white">
            3
          </p>
          <Cart Name="border-2 " />
        </div>
        <Image  className="h-full w-auto" src={avatar} alt="" />
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

export function Cart(props: { Name?: string;  }) {
  return (
    <svg
      width="22"
      height="20"
      className={"fill-[#69707D] hover:fill-black " }
      // className={"fill-[#69707D] hover:fill-black" + 'border-2'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
        // fill="#69707D"
        fill-rule="nonzero"
      />
    </svg>
  );
}
export function Next({}: Props) {
  return (
    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m2 1 8 8-8 8"
        stroke="#1D2026"
        stroke-width="3"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  );
}
export function Previous({}: Props) {
  return (
    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 1 3 9l8 8"
        stroke="#1D2026"
        stroke-width="3"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  );
}
export function Logo({}: Props) {
  return (
    <svg width="138" height="20"  className=""   xmlns="http://www.w3.org/2000/svg"><path d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z" fill="#1D2026" fill-rule="nonzero"/></svg>
  );
}
