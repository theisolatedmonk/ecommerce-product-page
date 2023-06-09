import Image from "next/image";
import cart from "@/images/icon-cart.svg";
import close from "@/images/icon-close.svg";
import delet from "@/images/icon-delete.svg";
import menu from "@/images/icon-menu.svg";
import avatar from "@/images/image-avatar.png";
import minus from "@/images/icon-minus.svg";
import next from "@/images/icon-next.svg";
import plus from "@/images/icon-plus.svg";
import previous from "@/images/icon-previous.svg";

import product1Thumb from "@/images/image-product-1-thumbnail.jpg";
import product1 from "@/images/image-product-1.jpg";
import product2Thumb from "@/images/image-product-2-thumbnail.jpg";
import product2 from "@/images/image-product-2.jpg";
import product3Thumb from "@/images/image-product-3-thumbnail.jpg";
import product3 from "@/images/image-product-3.jpg";
import product4Thumb from "@/images/image-product-4-thumbnail.jpg";
import product4 from "@/images/image-product-4.jpg";
import {
  NextBtn,
  Card,
  Discription,
  Price,
  AdddCartBtn,
  PluseMinuse,
} from "@/components/card";
import { Header } from "@/components/Header";
import { PreviewImg } from "@/components/Slid";

export default function Home() {
  return (
    <main className=" flex  justify-center items-center bg-black min-h-screen font-KumbhSans">
      <div className="w-72 relative text-black h-full bg-white flex flex-col  sm:w-full sm:min-h-screen sm:px-24">
        <Header />
        <hr className="hidden sm:flex"/>
        <div className="sm:flex  sm:justify-center sm:p-12  sm:gap-20 sm:items-center">
          <div>   <PreviewImg productsImg={""} /></div>
          <div>
          <Discription />
        <Price amount={250} discountPercent={50} discountAmount={125} />
        <div className="sm:flex sm:w-full  items-center justify-start ">
        <PluseMinuse />
        <AdddCartBtn />
        </div>
          </div>
        </div>
      </div>
    </main>
  );
}
