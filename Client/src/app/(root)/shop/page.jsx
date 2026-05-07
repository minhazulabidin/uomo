import React from "react";
import shopBg from "../../../../public/images/shopBgImg.png";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layouts/CommonLayout/Breadcrumbs";
import Container from "@/components/layouts/Container";
import ViewAndSort from "@/components/Shop/ViewAndSort";
import Pagination from "@/components/Shop/Pagination";

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
                className="after:bg-primary font-jost text-primary relative mt-6 cursor-pointer text-sm font-semibold after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-3/5"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <section className="mt-9">
        <aside></aside>
        <Container>
          <div className="flex justify-between">
            <Breadcrumbs />
            <ViewAndSort />
          </div>
          <Pagination itemsPerPage={3} />
        </Container>
      </section>
    </main>
  );
};

export default page;
