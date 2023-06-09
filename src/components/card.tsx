import Image from "next/image";
import product1Thumb from "@/images/image-product-1-thumbnail.jpg";

import delet from "@/images/icon-delete.svg";
import previous from "@/images/icon-previous.svg";
import minus from "@/images/icon-minus.svg";
import next from "@/images/icon-next.svg";
import plus from "@/images/icon-plus.svg";
import cart from "@/images/icon-cart.svg";
import close from "@/images/icon-close.svg";
import { useAtom } from "jotai";
import { cartItemAtom, countAtom } from "@/store/atom";

export function Card() {
  // const[ empty, setEmpty] =useState('hidden');
  const [cartItemNo, setCartItemAtom] = useAtom(cartItemAtom);

  return (
    <div className="cartfill bg-white absolute w-[270px]  flex-col z-10 rounded-md ml-2 mt-14 sm:top-5 shadow-xl sm:ml-[800px]   text-sm  font-KumbhSans ">
      <p className="p-4 font-bold ">Cart</p>
      <hr className="w-full " />
      <div className="w-full   p-4 ">
        {cartItemNo > 0 ? <CartFilled /> : <CartEmpty />}
      </div>
    </div>
  );
}

import React, { useState } from "react";

type Props = {};

export function Discription() {
  return (
    <div className="paracontainer flex flex-col gap-2 p-4 mt-4 sm:w-96">
      <p className="font-bold text-sm text-[hsl(26,100%,55%)] ">
        SNEAKER COMPANY
      </p>
      <p className="font-extrabold text-xl">Fall Limited Edition Sneakers</p>
      <p className="text-sm text-[hsl(220,14%,75%)]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
    </div>
  );
}
type PriceType = {
  amount: number;
  discountPercent: number;
  discountAmount: number;
};
export function Price(props: PriceType) {
  return (
    <div className="price flex  items-center justify-between  p-4">
      <div className="flex gap-2">
        <p className="font-extrabold">$ {props.discountAmount}</p>
        <p className="bg-[hsl(26,100%,55%)] bg-opacity-20 rounded-md p-1 font-bold text-sm text-[hsl(26,100%,55%)] ">
          {props.discountPercent}%
        </p>
      </div>
      <div>
        <p className="line-through font-bold text-sm text-[hsl(220,14%,75%)]">
          $ {props.amount}
        </p>
      </div>
    </div>
  );
}

export function PluseMinuse() {
  const [count, setCount] = useAtom(countAtom);
  // const [count, setCount] = useState(0);
  // const [text, setText] = useAtom(textAtom);

  function handleClickPluse() {
    setCount(count + 1);
  }
  function handleClickMinus() {
    if (count === 1 || count > 1) setCount(count - 1);
  }

  return (
    <div className="p-4 sm:w-32">
      <div className="itemcount flex justify-between items-center  rounded-lg p-2 bg-slate-100 sm:">
        <button onClick={handleClickMinus}>
          <Image className=" " src={minus} alt="" />
        </button>
        <p>{count} </p>
        <button
          onClick={handleClickPluse}
          className="flex justify-center  items-center"
        >
          <Image
            className="  "
            src={plus}
            alt=""
            onClick={() => setCount(count)}
          />
        </button>
      </div>
    </div>
  );
}

export function AdddCartBtn() {
  const [count, setCount] = useAtom(countAtom);
  const [, setCartItem] = useAtom(cartItemAtom);
  function handleOnClick() {
    setCartItem(count);
    setCount(0);
  }
  return (
    <div className="p-3 text-white font-KumbhSans sm:w-52">
      <button
        className="flex justify-center items-center p-3 rounded-lg bg-[hsl(26,100%,55%)] w-full gap-3"
        onClick={handleOnClick}
      >
        <Image className=" h-3 w-3 " src={cart} alt="" />
        <p className=" font-bold text-sm">Add to cart</p>
      </button>
    </div>
  );
}

export function NextBtn(props: any) {
  return (
    <svg
      {...props}
      className={
        "fill-none rounded-full  hover:stroke-[hsl(26,100%,55%)] stroke-black   "
      }
      width="13"
      height="18"
      xmlns="http://www.w3.org/2000/svg "
    >
      <path
        d="m2 1 8 8-8 8"
        // stroke="#1D2026"
        stroke-width="3"
        // fill="none"
        fill-rule="evenodd"
      />
    </svg>
  );
}
export function PreviousBtn(props: any) {
  return (
    <svg
      {...props}
      width="12"
      height="18"
      className=" hover:stroke-[hsl(26,100%,55%)] stroke-black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1 3 9l8 8"
        // stroke="#1D2026"
        stroke-width="3"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  );
}

export function CartFilled() {
  const [cartItemNo, setCartItemAtom] = useAtom(cartItemAtom);

  function handleDelete() {
    // setShow(false);
    setCartItemAtom(0);
  }

  return (
    <>
      {cartItemNo > 0 && (
        <div className={` flex-col  `}>
          <div
            className={`h-32 w-full flex  justify-center items-center gap-[14px] `}
          >
            <Image
              className="h-10 w-10 rounded-md"
              src={product1Thumb}
              alt=""
            />
            <div className="flex flex-col  sm:gap-5">
              <p className="text-sm text-[hsl(220,14%,75%)]">
                Fall Limited Edition Sneakers
              </p>
              <div className="flex gap-2 ">
                <p className=" text-sm text-[hsl(220,14%,75%)]">
                  $125.00 x {cartItemNo}{" "}
                </p>
                <p className="text-sm font-bold">${125 * cartItemNo}.00</p>

                {/* <p className="text-sm font-bold">$375.00</p> */}
              </div>
            </div>
            <button>
              <DeleteSvg className="" onClick={handleDelete} />
            </button>
          </div>
          <button
            className={`p-3 text-sm font-bold text-white bg-[hsl(26,100%,55%)] rounded-md w-full `}
          >
            Checkout
          </button>
        </div>
      )}
    </>
  );
}

export function CartEmpty() {
  return (
    <div className="text-center font-bold text-[hsl(219,9%,45%)] py-12 ">
      Your cart is empty
    </div>
  );
}

export function Logo({}: Props) {
  return (
    <svg
      width="138"
      height="20"
      className=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
        fill="#1D2026"
        fill-rule="nonzero"
      />
    </svg>
  );
}



function DeleteSvg(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width={14}
      height={16}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 015.213 0h3.571a.75.75 0 01.672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 01-.375.375H.375A.376.376 0 010 2.625zm13 1.75V14.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 011 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375zM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7z"
          id="a"
        />
      </defs>
      <use fill="#C3CAD9" xlinkHref="#a" />
    </svg>
  );
}
