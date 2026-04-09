import React from "react";
import productImage from "../../../../public/images/product.png";
import Image from "next/image";

export default function Product() {
  return (
    <div>
      <Image src={productImage} alt="product" className="h-auto w-full" />
      <h4 className="my-2 text-sm text-secondary ">Dresses</h4>
      <h2>Cropped Faux Leather Jacket</h2>
      <h4>$29</h4>
    </div>
  );
}
