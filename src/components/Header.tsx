import Image from "next/image";
import avatar from "@/images/image-avatar.png";
import logo from "@/images/logo.svg";
import menuImg from "@/images/icon-menu.svg";

import close from "@/images/icon-close.svg";

import { Dispatch, SetStateAction, useState } from "react";
import { Card } from "./card";
import { useAtom } from "jotai";
import { cartItemAtom } from "@/store/atom";

export function Header() {
  const [menu, setMenu] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [cartItemNo] = useAtom(cartItemAtom);

  const [cartActive, setCartActive] = useState("hidden");
  function handleClickCart() {
    if (cartActive === "hidden") {
      setCartActive("flex");
    } else {
      setCartActive("hidden");
    }
  }

  return (
    <>
      <MobileMenu menu={menu} setMenu={setMenu} />
      <div className="header flex items-center  w-full  text-xl justify-between p-4">
        <div className="flex gap-3  items-center  border-red-300 ">
          <Image
            className=" h-3 w-3"
            src={menuImg}
            alt=""
            onClick={() => setMenu(true)}
          />
          <Image className="mb-[3px] h-4 w-[100px] " src={logo} alt="" />
        </div>
        <div className="flex gap-3 h-4">
          <div className=" ">
            <p className=" h-[16px] w-[20px] font-bold text-center bg-[hsl(26,100%,55%)] rounded-full absolute z-20 ml-2 top-3 px-1 text-[8px] flex items-center justify-center text-white">
              {cartItemNo}
            </p>
            <CartSvg onclick={() => setShowCard(!showCard)} />

            {/* <CartSvg onclick={() => !setShowCard(false)} /> */}
          </div>
          <Image className="h-full w-auto" src={avatar} alt="" />
        </div>
      </div>
      {showCard === true ? <Card /> : ""}
    </>
  );
}

function MobileMenu({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`w-72 text-black h-screen bg-black   gap- z-30 fixed top-0 bg-opacity-70 text-xs font-bold  ${
        menu ? "flex" : "hidden"
      } `}
    >
      <div className="w-[190px] bg-white p-4 flex flex-col gap-8">
        <Image
          className="h-3 w-3"
          src={close}
          alt=""
          onClick={() => setMenu(false)}
        />
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

export function CartSvg(props: { Name?: string; onclick: () => void }) {
  return (
    <svg
      onClick={props.onclick}
      width="22"
      height="20"
      className={"fill-[#69707D] hover:fill-black "}
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
