
import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function Product({ product }) {

  console.log(product.category)

  return (
    <div>
      <div className="relative group">
        <Image
          src={product?.thumbnail}
          alt=""
          width={330}
          height={400}
          className=" cursor-pointer"
        />
        <button className="absolute bottom-2.5 w-[95%] left-1/2 -translate-x-1/2  bg-gray-200 py-4 opacity-0 group-hover:opacity-100 cursor-pointer font-medium font-jost text-base transition-all duration-300">
          ADD TO CART
        </button>
      </div>
      <div className="mt-3.5 flex justify-between">
        <div className="space-y-2.5">
          <h4 className="text-secondary font-jost text-sm leading-6">
            {product?.category}
          </h4>
          <h2 className="text-primary font-jost text-base leading-[100%]">
            {product?.title}
          </h2>
          <h4 className="text-primary font-jost text-base leading-[100%]">
            {product?.price}
          </h4>
        </div>
        <Heart className="text-secondary cursor-pointer" />
      </div>
    </div>
  );
}
