import React from "react";
import Container from "../../layouts/Container";
import { categoryData } from "../../../../data/categoryData";
import Item from "./Item";

const Category = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-150 ">
          {categoryData.map((category) => (
            <Item key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Category;
