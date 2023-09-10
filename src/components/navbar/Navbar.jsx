// "use client";

import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
    return (
        <>
            <div
                lang="ar"
                dir="rtl"
                className="hidden lg:block bg-white bg-gradient-to-r to-[#e8eeef] from-white h-[110px] sticky top-0 z-[1000000] shadow">
                <div className="max-w-[1380px] mx-auto px-[30px] flex justify-between items-center">
                    <div className="flex items-center gap-[60px]">
                        <Link href={"/"}>
                            <img src="/logo.png" alt="" className="h-[100px]" />
                        </Link>
                        <ul className="flex items-center gap-[40px] text-[18px] font-semibold text-black/80 ">
                            <Link href={"/"}>
                                <li className="hover:text-black">الرئيسيه</li>
                            </Link>
                            <Link href={"/"}>
                                <li className="hover:text-black">عن المركز</li>
                            </Link>
                            <Link href={"/"}>
                                <li className="hover:text-black">
                                    الفريق الطبى
                                </li>
                            </Link>
                            <Link href={"/"}>
                                <li className="hover:text-black">الخدمات</li>
                            </Link>
                            <Link href={"/"}>
                                <li className="hover:text-black">
                                    أراء العملاء
                                </li>
                            </Link>
                            <Link href={"/"}>
                                <li className="hover:text-black">العروض</li>
                            </Link>
                            <Link href={"/"}>
                                <li className="hover:text-black">المقالات</li>
                            </Link>
                        </ul>
                    </div>
                    <Link
                        href={"/"}
                        className="text-[22px] font-semibold bg-[#e8eeef] px-[25px] py-[15px] rounded-md">
                        أحجز موعد
                    </Link>
                </div>
            </div>
            <MobileNav />
        </>
    );
};

export default Navbar;
