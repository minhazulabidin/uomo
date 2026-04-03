import React from "react";

const Item = ({ category }) => {
  const isBgColor = category.id === 4;

  return (
    <div
      className={`${category.id === 1 && "col-span-2 row-span-2"} ${
        category.id === 2 && "col-span-2"
      } cursor-pointer`}
      style={{
        background: isBgColor
          ? "#F5E6E0"
          : `url(${category?.image?.src}) center center/cover`,
      }}
    >
      <div className="flex flex-col h-full justify-end pb-10 ps-10 font-jost">
        <h4 className="text-sm">{category.title}</h4>
        <h2 className="text-[26px] font-medium">{category.name}</h2>
      </div>
    </div>
  );
};

export default Item;
