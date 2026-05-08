
import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function Product({ product }) {


  return (
    <div className="w-full pb-3">
      <div className="relative group">
        <Image
          src={product?.thumbnail}
          alt=""
          width={1000}
          height={100}
          className=" cursor-pointer w-full h-full "
        />
        <button className="absolute bottom-2.5 w-[95%] left-1/2 -translate-x-1/2  bg-gray-200 py-4 opacity-0 group-hover:opacity-100 cursor-pointer font-medium font-jost text-base transition-all duration-300">
          ADD TO CART
        </button>
      </div>
      <div className="mt-3.5 flex justify-between px-4">
        <div className="space-y-2.5">
          <h4 className="text-secondary font-jost text-sm leading-6">
            {product?.category}
          </h4>
          <h2 className="text-primary font-jost text-base leading-[100%]">
            {product?.title}
          </h2>
          <h4 className="text-primary font-jost text-base leading-[100%]">
            {Math.floor(product?.price * 15)} Taka
          </h4>
        </div>
        <Heart className="text-secondary cursor-pointer" />
      </div>
    </div>
  );
}
