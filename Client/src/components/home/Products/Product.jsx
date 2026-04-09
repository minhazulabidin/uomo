import React from "react";
import productImage from "../../../../public/images/product.png";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function Product() {
  return (
    <div>
      <div className="relative group">
        <Image
          src={productImage}
          alt="product"
          className="h-auto w-full cursor-pointer"
        />
        <button className="absolute bottom-2.5 w-[95%] left-1/2 -translate-x-1/2 * bg-white py-4 opacity-0 group-hover:opacity-100 cursor-pointer font-medium font-jost text-base transition-all duration-300">
          ADD TO CART
        </button>
      </div>
      <div className="mt-3.5 flex justify-between">
        <div className="space-y-2.5">
          <h4 className="text-secondary font-jost text-sm leading-6">
            Dresses
          </h4>
          <h2 className="text-primary font-jost text-base leading-[100%]">
            Cropped Faux Leather Jacket
          </h2>
          <h4 className="text-primary font-jost text-base leading-[100%]">
            $29
          </h4>
        </div>
        <Heart className="text-secondary cursor-pointer" />
      </div>
    </div>
  );
}
