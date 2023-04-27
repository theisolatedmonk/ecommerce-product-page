import Image from "next/image";
import cart from "@/images/icon-cart.svg";
import close from "@/images/icon-close.svg";
import delet from "@/images/icon-delete.svg";
import menu from "@/images/icon-menu.svg";
import minus from "@/images/icon-minus.svg";
import next from "@/images/icon-next.svg";
import plus from "@/images/icon-plus.svg";
import previous from "@/images/icon-previous.svg";
import avatar from "@/images/image-avatar.png";
import product1Thumb from "@/images/image-product-1-thumbnail.jpg";
import product1 from "@/images/image-product-1.jpg";
import product2Thumb from "@/images/image-product-2-thumbnail.jpg";
import product2 from "@/images/image-product-2.jpg";
import product3Thumb from "@/images/image-product-3-thumbnail.jpg";
import product3 from "@/images/image-product-3.jpg";
import product4Thumb from "@/images/image-product-4-thumbnail.jpg";
import product4 from "@/images/image-product-4.jpg";

export default function Home() {
  return (
    <main className=" flex  justify-center items-center bg-black min-h-screen-h-screen">
      <div className="w-64 text-black h-full bg-white flex flex-col gap-2">
        <div className="header flex items-center gap-28 w-full p-2">
          <div className="flex gap-2  items-center">
            <div className="h-3 w-3 flex justify-center items-center">
            <Image className=" " src={menu} alt="" />
            </div>
            <p>sneakers</p>
          </div>
          <div className="flex gap-2 h-4 w-4">
            <Image className="" src={cart} alt="" />
            <Image className="" src={avatar} alt="" />
          </div>
        </div>

        <div className="imgbox relative">
          <Image className="" src={product1} alt="" />
          <div className="flex gap-[176px] px-2 w-full items-center  absolute mt-[-140px]">
            <button className=" bg-white rounded-full p-2 h-8 w-8 flex items-center">
              <Image className="absolute " src={previous} alt="" />
            </button>
            <button className=" bg-white rounded-full p-2 flex items-center h-8 w-8  ">
              <Image className="absolute" src={next} alt="" />
            </button>
          </div>
        </div>

        <div className="paracontainer p-2">
          <p>SNEAKER COMPANY</p>
          <p>Fall Limited Edition Sneakers</p>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
        </div>

        <div className="price flex justify-between p-2">
          <div className="flex gap-2">
            <p>$125.00</p>
            <p className="bg-orange-500 rounded-md p-1">50%</p>
          </div>
          <div>
            <p className="line-through">$250.00</p>
          </div>
        </div>

        <div className="p-4"><div className="itemcount flex justify-between items-center rounded-lg p-2 bg-slate-100">
          <button><Image className=" " src={minus} alt="" /></button>
          <p>0</p>
          <button className="flex justify-center  items-center"><Image className="  " src={plus} alt="" /></button>
        </div></div>
        
        <div className="p-3 text-white">
        <button className="flex justify-center items-center p-2 rounded-lg bg-orange-500 w-full gap-3">
        <Image className="" src={cart} alt="" />
          <p className="">Add to cart</p>
        </button>
        </div>
      </div>

    </main>
  );
}
