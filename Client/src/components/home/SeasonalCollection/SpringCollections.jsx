import Container from "@/components/layouts/Container";
import Link from "next/link";
import React from "react";
import springImage from "../../../../public/images/springImg.png";
import Image from "next/image";

export default function SpringCollections() {
  return (
    <div className="bg-gray-100 p-6 md:p-10">
      <Container>
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 pt-50 mb-3">
                <span className="bg-tertiary h-[2px] w-6"></span>
                <p className="text-tertiary font-jost text-xs leading-6 font-medium tracking-widest">
                  DEAL OF THE WEEK
                </p>
              </div>

              <h1 className="text-primary font-jost text-4xl md:text-[70px]">
                <span className="font-bold">SPRING</span> COLLECTION
              </h1>

              <Link
                href="#"
                className="after:bg-primary font-jost relative mt-6 cursor-pointer text-sm after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-3/5"
              >
                SHOP NOW
              </Link>
            </div>

            {/* TIMER */}
            <div className="mt-8 flex gap-6 text-sm text-gray-700">
              {["DAYS", "HOURS", "MINS", "SEC"].map((label, i) => (
                <div key={i}>
                  <h2 className="text-lg font-medium">05</h2>
                  <p className="text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT (IMAGE) */}
          <div className="flex justify-center">
            <div className="flex items-center justify-center bg-gray-200">
              <Image
                src={springImage}
                alt="Spring Collection"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
