"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";

const ServicesPageComp = ({ id, img, head, desc }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div
      className="flex lg:flex-row flex-col h-auto lg:even:flex-row-reverse gap-[50px] p-[20px]
                                        lg:p-[25px] rounded-lg lg:h-[500px] bg-gradient-to-r to-[#e8eeef]
                                        from-[#e1e7e7] shadow-sm translate-y-[200px] opacity-0 transition duration-500 delay-75"
      ref={ref}
      style={{
        transform: inView ? "translateY(0px)" : "",
        opacity: inView ? 1 : 0,
      }}
    >
      <img
        src={img}
        alt={head}
        className="w-full h-[320px] md:h-[450px] lg:max-w-[48%] lg:h-auto object-cover rounded-md"
      />
      <div className="text-right text-black/80 flex flex-col justify-center p-[20px]">
        <h2 className="text-[30px] text-center md:text-start lg:text-[40px] font-semibold mb-4">
          {head}
        </h2>
        <p className="text-[18px] lg:text-[20px] text-center md:text-start font-medium leading-8">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ServicesPageComp;
