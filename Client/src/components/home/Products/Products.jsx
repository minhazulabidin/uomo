"use client"
import React, { useEffect, useState } from "react";
import Title from "@/components/layouts/CommonLayout/Title";
import { productCategoryData } from "../../../../data/productCategoryData";
import Container from "@/components/layouts/Container";
import Product from "./Product";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      axios.get("https://dummyjson.com/products?limit=50").then(res => setProducts(res.data.products)).catch(err => console.log(err))
    }
    fetchData()
  }, [])
  
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
        <div className="grid grid-cols-4 gap-7.5 mt-10">
          {
            products?.map((product, idx) => (<Product product={product} key={idx} />))
          }
        </div>
      </Container>
    </section>
  );
};

export default Products;
