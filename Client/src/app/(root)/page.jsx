import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category/Category";
import LimitedEdition from "@/components/home/LimitedEdition/LimitedEdition";
import Products from "@/components/home/Products/Products";
import SpringCollections from "@/components/home/SeasonalCollection/SpringCollections";
import ServiceFeatures from "@/components/home/ServiceFeatures/ServiceFeatures";
import TrendyCategory from "@/components/home/TrendyCategory/TrendyCategory";
import React from "react";

export default function Home() {
  return (
    <main>
      <Banner />
      <Category />
      <Products />
      <SpringCollections />
      <TrendyCategory />
      <LimitedEdition />
      <ServiceFeatures />
    </main>
  );
}
