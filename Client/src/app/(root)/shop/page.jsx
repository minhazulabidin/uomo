import React from "react";
import shopBg from "../../../../public/images/shopBgImg.png";
import Link from "next/link";

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
        <h2 className="font-jost text-center text-[60px] font-bold uppercase text-primary">
          Shoes
        </h2>
        <ul className="flex justify-center gap-8 mt-6">
          {shopNav.map((item, index) => (
            <li key={index}>
              <Link
                href="#"
                className="after:bg-primary font-jost relative mt-6 cursor-pointer text-sm after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-3/5 text-primary font-semibold"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <section>
        <aside></aside>
        <div></div>
      </section>
    </main>
  );
};

export default page;
