import React from "react";

import Wrapper from "../wrapper/Wrapper";
import Links from "../linksFooter/Links";
import Link from "next/link";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer
        className="bg-[#e8eeef] text-white pt-14 pb-3 mt-[100px]"
        lang="ar"
        dir="rtl"
      >
        <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
          {/* LEFT START */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
            {/* LOGO */}
            <div className="flex flex-col gap-3 shrink-0">
              <img src="/logo.png" alt="fas" className="w-[80px]" />
              <p className="w-[200px] text-[16px] font-medium text-black">
                مركز النخبة لطب وتقويم الأسنان هو مركز رائد في مجال الرعاية
                الصحية الفموية والأسنان.
              </p>
            </div>
            {/* LOGO END */}
            {/* MENU START */}
            <div className="flex flex-col gap-3 shrink-0 text-[16px] text-black">
              <div className="font-oswald font-semibold text-[22px]">
                روابط سريعة
              </div>
              <Link
                href={"/"}
                className="font-oswald font-medium uppercase cursor-pointer"
              >
                الرئيسية
              </Link>
              <Link
                href={"/about"}
                className="font-oswald font-medium uppercase cursor-pointer"
              >
                عن المركز
              </Link>
              <Link
                href={"/team"}
                className="font-oswald font-medium uppercase cursor-pointer"
              >
                الفريق الطبي
              </Link>
              <Link
                href={"/services"}
                className="font-oswald font-medium uppercase cursor-pointer"
              >
                الخدمات
              </Link>
              <Link
                href={"/reviews"}
                className="font-oswald font-medium uppercase cursor-pointer"
              >
                أراء العملاء
              </Link>
              <Link
                href={"/articles"}
                className="font-oswald font-medium uppercase cursor-pointer"
              >
                المقالات
              </Link>
              <Link
                href={"/offers"}
                className="font-oswald font-medium uppercase cursor-pointer"
              >
                العروض
              </Link>
              <Link
                href={"/booking"}
                className="font-oswald font-medium uppercase cursor-pointer"
              >
                اتصل بنا
              </Link>
            </div>
            {/* MENU END */}

            {/* NORMAL MENU START */}
            <div className="flex flex-col gap-5 shrink-0 text-[16px] text-black">
              <div className="font-oswald font-semibold text-[22px]">
                التخصصات
              </div>
              <div className="font-oswald font-medium">علاج جزور الأسنان</div>
              <div className="font-oswald font-medium">طب أسنان الأطفال</div>
              <div className="font-oswald font-medium">زراعة الأسنان</div>
              <div className="font-oswald font-medium">تقويم الأسنان</div>
              <div className="font-oswald font-medium">تجميل الأسنان</div>
              <div className="font-oswald font-medium">التركيبات الثابتة</div>
            </div>
            {/* NORMAL MENU END */}
            {/* ............... */}
            <div className="text-black/80">
              <h2 className="text-[22px] font-semibold">إتصل بنا</h2>
              <div className="mt-5 flex gap-2">
                <div className="">
                  <MdLocationPin size={25} className="text-black/80" />
                </div>
                <div className="">
                  <h2 className="text-[18px] font-medium mb-2">فرع المفارق</h2>
                  <p className="text-[16px] font-medium">
                    الزقازيق - المفارق نهاية شارع المحافظة -أمام السجل المدني
                    برج قصر الحياة الدور الثاني
                  </p>
                  <p className="text-[16px] font-medium mt-2">
                    01111496647 - 0552313649
                  </p>
                </div>
              </div>
              <div className="mt-5 flex gap-2">
                <div className="">
                  <MdLocationPin size={25} className="text-black/80" />
                </div>
                <div className="">
                  <h2 className="text-[18px] font-medium mb-2">فرع المحطة</h2>
                  <p className="text-[16px] font-medium">
                    الزقازيق - شارع الجلاء ( المحطة) - بجواز بنزينة أبو عزيزة -
                    أعلي صيدلية د.محمد حسانين - الدور العاشر
                  </p>
                  <p className="text-[16px] font-medium mt-2">01113979701</p>
                </div>
              </div>
            </div>
            {/* ............... */}
          </div>
          {/* LEFT END */}

          {/* RIGHT START */}
          <Links />
          {/* RIGHT END */}
        </Wrapper>
      </footer>
      <div
        lang="ar"
        dir="rtl"
        className="flex justify-center p-[20px] flex-col md:flex-row gap-[10px] bg-[#d5dfe0] md:gap-0"
      >
        {/* RIGHT START */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center"></div>
        {/* RIGHT END */}
        {/* LEFT START */}
        <div className="flex flex-row-reverse items-center text-[18px] text-black/[0.8] hover:text-black text-center md:text-left">
          Created by{" "}
          <img src="/blackLogo.png" alt="" className="h-[25px] ml-2" />
        </div>
        {/* LEFT END */}
      </div>
    </>
  );
};

export default Footer;
