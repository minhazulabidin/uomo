import Container from "@/components/layouts/Container";
import Link from "next/link";
import React from "react";
import springImage from "../../../../public/images/springImg.png";
import Image from "next/image";
import { CountDownTime } from "@/utils/CountDownTime";

export default function SpringCollections() {
  return (
    <div className="bg-gray-100 p-6 md:p-10">
      <Container>
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-3 flex items-center gap-1.5 pt-50">
                <span className="bg-tertiary h-0.5 w-6"></span>
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
          
            <CountDownTime />
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
