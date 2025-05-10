"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(4);

  // ..............................................................................

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[110px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    // ترتيب الاحداث هنا هو ال مخلي قيمت دي اكبر من الي فوق
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <>
      <div
        lang="ar"
        dir="rtl"
        className={`hidden lg:block bg-white bg-gradient-to-r to-[#e8eeef] from-white transition duration-200 h-[110px] sticky top-0 z-[1000000] ${show}`}
      >
        <div className="max-w-[1380px] mx-auto px-[30px] flex justify-between items-center">
          <div className="flex items-center gap-[60px]">
            <Link href={"/"}>
              <img
                src="/logo.png"
                alt=""
                className="h-[100px]"
                aria-label="logo"
              />
            </Link>
            <ul className="flex items-center gap-[40px] text-[18px] font-semibold text-black/80 ">
              <li className="hover:text-black">
                <Link href={"/"}>الرئيسيه</Link>
              </li>
              <li className="hover:text-black">
                <Link href={"/about"}>عن المركز</Link>
              </li>
              <li className="hover:text-black">
                <Link href={"/team"}>الفريق الطبى</Link>
              </li>
              <li className="hover:text-black">
                <Link href={"/services"}>الخدمات</Link>
              </li>
              <li className="hover:text-black">
                <Link href={"/reviews"}>أراء العملاء</Link>
              </li>
              <li className="hover:text-black">
                <Link href={"/offers"}>العروض</Link>
              </li>
              <li className="hover:text-black">
                <Link href={"/articles"}>المقالات</Link>
              </li>
              <li className="hover:text-black">
                <Link href={"/schedule"}>جدول المواعيد</Link>
              </li>
            </ul>
          </div>
          <Link
            href={"/booking"}
            className="text-[22px] font-semibold bg-[#e8eeef] px-[25px] py-[15px] rounded-md"
          >
            أحجز موعد
          </Link>
        </div>
      </div>
      <MobileNav />
    </>
  );
};

export default Navbar;
