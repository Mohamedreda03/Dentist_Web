"use client";

import Link from "next/link";
import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";

const MobileNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div
            lang="ar"
            dir="rtl"
            className="block lg:hidden bg-white bg-gradient-to-r to-[#e8eeef] from-white h-[85px] sticky top-0 z-[1000000] shadow">
            <div className="max-w-[1380px] mx-auto px-[30px] flex justify-between items-center relative">
                <Link href={"/"}>
                    <img src="/logo.png" alt="" className="h-[80px]" />
                </Link>
                <HiMenuAlt2
                    onClick={() => setShowMenu(true)}
                    className={`text-[35px] cursor-pointer`}
                />
                <div
                    className={`flex-col justify-center items-center gap-[60px] absolute top-0 left-0 right-0
                 bottom-0 h-[100vh] bg-[#e8eeef] ${
                     showMenu ? "flex" : "hidden"
                 }`}>
                    <AiOutlineClose
                        onClick={() => setShowMenu(false)}
                        className={`absolute top-[23px] left-[30px] text-[35px] cursor-pointer`}
                    />

                    <ul className="flex flex-col items-center gap-[40px] text-[20px] font-semibold text-black/80 ">
                        <Link href={"/"} onClick={() => setShowMenu(false)}>
                            <li className="hover:text-black">الرئيسيه</li>
                        </Link>
                        <Link
                            href={"/about"}
                            onClick={() => setShowMenu(false)}>
                            <li className="hover:text-black">عن المركز</li>
                        </Link>
                        <Link href={"/team"} onClick={() => setShowMenu(false)}>
                            <li className="hover:text-black">الفريق الطبى</li>
                        </Link>
                        <Link
                            href={"/services"}
                            onClick={() => setShowMenu(false)}>
                            <li className="hover:text-black">الخدمات</li>
                        </Link>
                        <Link
                            href={"/reviews"}
                            onClick={() => setShowMenu(false)}>
                            <li className="hover:text-black">أراء العملاء</li>
                        </Link>
                        <Link
                            href={"/offers"}
                            onClick={() => setShowMenu(false)}>
                            <li className="hover:text-black">العروض</li>
                        </Link>
                        <Link
                            href={"/articles"}
                            onClick={() => setShowMenu(false)}>
                            <li className="hover:text-black">المقالات</li>
                        </Link>
                    </ul>
                    <Link
                        onClick={() => setShowMenu(false)}
                        href={"/booking"}
                        className="text-[22px] font-semibold bg-white px-[25px] py-[15px] rounded-md">
                        أحجز موعد
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
