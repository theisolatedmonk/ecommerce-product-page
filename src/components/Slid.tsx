import product1Thumb from "@/images/image-product-1-thumbnail.jpg";
import product1 from "@/images/image-product-1.jpg";
import product2Thumb from "@/images/image-product-2-thumbnail.jpg";
import product2 from "@/images/image-product-2.jpg";
import product3Thumb from "@/images/image-product-3-thumbnail.jpg";
import product3 from "@/images/image-product-3.jpg";
import product4Thumb from "@/images/image-product-4-thumbnail.jpg";
import product4 from "@/images/image-product-4.jpg";
import { NextBtn, PreviousBtn } from "./card";
import Image from "next/image";
import { type } from "os";
import { useState } from "react";

type LargeImges = {
  productsImg: string;
};
export function PreviewImg(props: LargeImges) {
  const productsImg = [product3, product2, product3, product4];
  const [currentImg, setCurrentImg] = useState(0);

  function handleClickNext() {
    if (currentImg === productsImg.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  }
  function handleClickPrivious() {
    if (currentImg ===0) {
      setCurrentImg(productsImg.length - 1);
    } else {
      setCurrentImg(currentImg - 1);
    }
  }

  console.log("products-0--", productsImg[1]);
  return (
    <div className="imgbox relative ">
      <div className="sm:flex sm:flex-col">
      <Image
        className="h-full sm:rounded-lg"
        height={200}
        width={375}
        src={productsImg[currentImg].src}
        alt=""
      />
      <div className="hidden sm:flex sm:justify-between w-[375px]  items-center py-2">
        <Image className="rounded-lg   h-[75px] w-[75px] focus:outline-orange-500 hover:opacity-10" src={product1Thumb} alt={""}/>
        <Image className="rounded-lg  h-[75px] w-[75px] hover:opacity-10" src={product2Thumb} alt={""}/>
        <Image className="rounded-lg  h-[75px] w-[75px] hover:opacity-10" src={product3Thumb} alt={""}/>
        <Image className="rounded-lg  h-[75px] w-[75px] hover:opacity-10" src={product4Thumb} alt={""}/>
      </div>
      </div>
      <div className="flex gap-[200px] px-3 w-full items-center  absolute inset-0">
        <button className=" bg-white rounded-full p-2 h-8 w-8 flex items-center sm:hidden">
          <PreviousBtn onClick={handleClickPrivious} />
        </button>
        <button className=" bg-white rounded-full p-2 flex items-center h-8 w-8 sm:hidden ">
          <NextBtn onClick={handleClickNext} />
        </button>
      </div>
    </div>
  );
}
