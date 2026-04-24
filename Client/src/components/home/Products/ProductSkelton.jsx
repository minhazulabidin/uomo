"use client";
import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Image */}
      <div className="w-82.5 h-100 bg-gray-200 rounded-lg"></div>

      {/* Content */}
      <div className="mt-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        {/* Price */}
        <div className="h-5 bg-gray-300 rounded w-1/3 mt-2"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;