import Title from "@/components/layouts/CommonLayout/Title";
import React from "react";
import { productCategoryData } from "../../../../data/productCategoryData";
import Container from "@/components/layouts/Container";
import Product from "./Product";

const Products = () => {
  return (
    <section id="products" className="mt-23.5 mb-20">
      <Container>
        <Title title="OUR TRENDY" titleB="PRODUCTS" />
        <div className="mt-7.75 flex justify-center gap-13.25">
          {productCategoryData.map((item) => (
            <button
              key={item.id}
              className="font-jost after:bg-primary hover:text-primary relative cursor-pointer font-medium text-[#767676] after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-3/5"
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-7.5">
          <Product />
        </div>
      </Container>
    </section>
  );
};

export default Products;
