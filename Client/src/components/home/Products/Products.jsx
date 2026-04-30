"use client"
import React, { useEffect, useState } from "react";
import Title from "@/components/layouts/CommonLayout/Title";
import { productCategoryData } from "../../../../data/productCategoryData";
import Container from "@/components/layouts/Container";
import Product from "./Product";
import axios from "axios";
import ProductSkeleton from "./ProductSkelton";
import api from "@/utils/api";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/products?limit=100");
        setProducts(res.data.products);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter(
        (product) => product.category === activeCategory
      );

  const SkeletonGrid = () => {
    return (
      Array.from({ length: 8 }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))
    );
  };

  return (
    <section id="products" className="mt-23.5 mb-20">
      <Container>
        <Title title="OUR TRENDY" titleB="PRODUCTS" />
        <div className="mt-7.75 flex justify-center gap-13.25">
          {productCategoryData.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCategory(item.slug);
                setVisibleCount(8);
              }}
              className={`font-jost after:bg-primary hover:text-primary relative cursor-pointer font-medium text-[#767676] after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-3/5 ${activeCategory === item.slug ? "text-primary after:w-3/5" : ""}`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-7.5 mt-10">
          {
            loading ? <SkeletonGrid /> :
              filteredProducts.slice(0, visibleCount).map((product) => (
                <Product key={product.id} product={product} />
              ))
          }
        </div>
        {filteredProducts.length > 8 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() =>
                visibleCount < filteredProducts.length
                  ? setVisibleCount(filteredProducts.length)
                  : setVisibleCount(8)
              }
              className="px-6 py-2 bg-primary text-white rounded-md hover:opacity-90 cursor-pointer"
            >
              {visibleCount < filteredProducts.length ? "See All" : "See Less"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Products;
