import React from "react";
import shopBg from "../../../../public/images/shopBgImg.png";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layouts/CommonLayout/Breadcrumbs";
import Container from "@/components/layouts/Container";
import ViewAndSort from "@/components/Shop/ViewAndSort";
import Pagination from "@/components/Shop/Pagination";
import useViewProductStore from "@/ZustandStore/ViewProduct.store";

const page = () => {
  const shopNav = [
    "#STAYHOME",
    "NEW IN",
    "JACKETS",
    "HOODIES",
    "MEN",
    "WOMEN",
    "TROUSERS",
    "ACCESSORIES",
    "SHOES",
  ];
  return (
    <main>
      <div
        style={{ backgroundImage: `url(${shopBg.src})` }}
        className="bg-cover bg-center bg-no-repeat py-37.5"
      >
        <h2 className="font-jost text-primary text-center text-[60px] font-bold uppercase">
          Shoes
        </h2>
        <ul className="mt-6 flex justify-center gap-8">
          {shopNav.map((item, index) => (
            <li key={index}>
              <Link
                href="#"
                className="after:bg-primary font-jost text-primary mt-6 text-sm font-semibold link-underline"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <section className="mt-9">
        <Container className="flex gap-15">
          <aside className="w-full max-w-75"></aside>
          <div className="w-full flex-1">
            <div className="flex justify-between">
              <Breadcrumbs />
              <ViewAndSort />
            </div>
            <Pagination/>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default page;
