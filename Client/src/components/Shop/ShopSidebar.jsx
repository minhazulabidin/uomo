"use client";

import { ChevronUp, Search } from "lucide-react";
import { useState } from "react";

const categories = [
  "Dresses",
  "Sweatshirts",
  "Jackets",
  "Jeans",
  "Men",
  "Shorts",
  "Swimwear",
  "T-Shirts & Tops",
  "Trousers",
  "Jumpers & Cardigans",
];

const colors = [
  "#1D3A8A",
  "#B6A15A",
  "#5A5A5A",
  "#A7C6D9",
  "#C79B4B",
  "#C8903D",
  "#E2B7A3",
  "#D9D9D9",
  "#C94343",
  "#A7CDB6",
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const brands = [
  { name: "Adidas", count: 2 },
  { name: "Balmain", count: 7 },
  { name: "Balenciaga", count: 10 },
  { name: "Burberry", count: 39 },
  { name: "Kenzo", count: 95 },
  { name: "Givenchy", count: 1092 },
  { name: "Zara", count: 48 },
];

const tags = ["BLUES", "MAI PRCIE $493", "Zara", "ACNE FLEX"];

const ShopSidebar = () => {
  const [selectedColor, setSelectedColor] = useState("#1D3A8A");
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="w-[250px] bg-[#f5f5f5] border border-[#e5e5e5] p-5 font-poppins">

      {/* PRODUCT CATEGORIES */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#222]">
            Product Categories
          </h3>

          <ChevronUp size={14} className="text-[#777]" />
        </div>

        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li
              key={index}
              className="text-[12px] text-[#555] hover:text-black cursor-pointer transition-all"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t border-[#e2e2e2] my-8" />

      {/* COLORS */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#222]">
            Color
          </h3>

          <ChevronUp size={14} className="text-[#777]" />
        </div>

        <div className="flex flex-wrap gap-3">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`w-4 h-4 rounded-full border transition-all ${
                selectedColor === color
                  ? "ring-2 ring-offset-2 ring-black"
                  : ""
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#e2e2e2] my-8" />

      {/* SIZES */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#222]">
            Sizes
          </h3>

          <ChevronUp size={14} className="text-[#777]" />
        </div>

        <div className="flex flex-wrap gap-3">
          {sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(size)}
              className={`min-w-[38px] h-[28px] border text-[11px] transition-all ${
                selectedSize === size
                  ? "bg-black text-white border-black"
                  : "bg-white text-[#666] border-[#ddd]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#e2e2e2] my-8" />

      {/* BRANDS */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#222]">
            Brands
          </h3>

          <ChevronUp size={14} className="text-[#777]" />
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[36px] border border-[#ddd] bg-white pl-3 pr-10 text-[12px] outline-none"
          />

          <Search
            size={15}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999]"
          />
        </div>

        {/* Brand List */}
        <div className="space-y-4">
          {brands.map((brand, index) => (
            <label
              key={index}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 accent-black"
                />

                <span className="text-[12px] text-[#555]">
                  {brand.name}
                </span>
              </div>

              <span className="text-[11px] text-[#888]">
                {brand.count}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#e2e2e2] my-8" />

      {/* PRICE */}
      <div>
        <div className="relative mb-4">
          <div className="h-[2px] bg-[#cfcfcf] w-full" />

          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-black bg-white" />

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-black bg-white" />
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#777]">
          <p>Min Price: $29</p>
          <p>Max Price: $937</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#e2e2e2] my-8" />

      {/* TAGS */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <button
            key={index}
            className="flex items-center gap-1 border border-[#ddd] bg-[#efefef] px-2 py-1 text-[10px] text-[#666]"
          >
            <span className="text-[11px]">✕</span>
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShopSidebar;