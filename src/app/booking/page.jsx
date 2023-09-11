"use client";

import React from "react";
import { josefin_Sans } from "../../fonts";
import { motion } from "framer-motion";

const page = () => {
    return (
        <motion.div
            className="max-w-[1380px] mx-auto px-[30px] mt-[40px]"
            initial={{ opacity: 0, transform: "translateY(200px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}>
            <h1 className="text-center text-[40px] font-semibold">
                يمكنك حجز موعد من خلال مكالمه هاتفيه
            </h1>
            <div className="px-[30px]">
                <div
                    className="rounded-md mt-[80px] mb-[40px] bg-[#e8eeef] text-black/80 py-[40px]
                    flex flex-col md:flex-row justify-between items-center max-w-[1380px] mx-auto
                    px-[80px] transition duration-[1.5s]">
                    <div className={`font-extrabold text-[40px] text-black/80`}>
                        01111496647 - 0552313649
                    </div>
                    <div
                        className="text-[25px] text-center md:text-[50px] font-semibold"
                        lang="ar"
                        dir="rtl">
                        <h4>فرع المفارق</h4>
                    </div>
                </div>
            </div>
            {/* ............. */}
            <div className="px-[30px]">
                <div
                    className="rounded-md bg-[#e8eeef] text-black/80 py-[40px]
                    flex flex-col md:flex-row justify-between items-center max-w-[1380px] mx-auto
                    px-[80px] transition duration-[1.5s]">
                    <div className={`font-extrabold text-[40px] text-black/80`}>
                        01113979701
                    </div>
                    <div
                        className="text-[25px] text-center md:text-[50px] font-semibold"
                        lang="ar"
                        dir="rtl">
                        <h4>فرع المحطة</h4>
                    </div>
                </div>
            </div>
            {/* ....................................... */}
            <h1 className="text-center text-[40px] mt-[100px] font-semibold">
                يمكنك التواصل معنا ايضا من خلال
            </h1>
            {/* ....................................... */}
            <a
                target="_blank"
                href={"https://www.facebook.com/alnokhbadental/"}
                className="px-[30px]">
                <div
                    className="rounded-md mt-[80px] mb-[40px] bg-[#e8eeef] text-black/80 py-[40px]
                    flex flex-col md:flex-row justify-center items-center max-w-[1380px] mx-auto
                    px-[80px] transition duration-[1.5s]">
                    <div
                        className="text-[25px] text-center md:text-[50px] font-semibold"
                        lang="ar"
                        dir="rtl">
                        <h4 className={josefin_Sans.className}>facebook</h4>
                    </div>
                </div>
            </a>
            {/* ....................................... */}
        </motion.div>
    );
};

export default page;
