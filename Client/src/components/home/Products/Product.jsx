import React from "react";
import productImage from "../../../../public/images/product.png";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function Product() {
  return (
    <div>
      <Image src={productImage} alt="product" className="h-auto w-full cursor-pointer" />
      <div className="flex justify-between mt-3.5">
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
        <Heart className="text-secondary cursor-pointer"/>
      </div>
    </div>
  );
}
