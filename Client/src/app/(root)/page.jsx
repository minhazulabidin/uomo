import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category/Category";
import Products from "@/components/home/Products/Products";
import SpringCollections from "@/components/home/SeasonalCollection/SpringCollections";
import React from "react";

export default function Home() {
  return (
    <main>
      <Banner />
      <Category />
      <Products />
      <SpringCollections />
    </main>
  );
}
