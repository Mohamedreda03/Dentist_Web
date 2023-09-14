"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { tajawal, kufam } from "../../fonts";
import styles from "./slide.module.css";

const data = [
    {
        id: 1,
        dela: "0.4s",
        img: "/slide-1.jpg",
    },
    {
        id: 2,
        dela: "0.6s",
        img: "/slide-2.jpg",
    },
    {
        id: 3,
        dela: "0.8s",
        img: "/slide-3.jpg",
    },
    {
        id: 4,
        dela: "1s",
        img: "/slide-4.jpg",
    },
    {
        id: 5,
        dela: "1.2s",
        img: "/slide-5.jpg",
    },
    {
        id: 6,
        dela: "1.4s",
        img: "/slide-6.jpg",
    },
];

const Slide = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const inView = useInView(ref, { once: true });
    const inView2 = useInView(ref2, { once: true });
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <div
                className={`${tajawal.className} text-black/80 max-w-[1380px] mx-auto mb-[100px] px-[30px] pb-[40px] transform translate-y-[200px] opacity-0 transt duration-[1.5s] delay-100`}
                ref={ref2}
                style={{
                    opacity: inView2 ? 1 : 0,
                    transform: inView2 ? "translateY(0px)" : "",
                }}
                lang="ar"
                dir="rtl">
                <div className="flex justify-center text-[40px] font-semibold mt-[100px] mb-4 text-center">
                    مركز النخبة لطب وتقويم الأسنان
                </div>
                <p className="text-center mx-auto text-[22px] font-medium">
                    مركز النخبة لطب وتقويم الأسنان هو مركز رائد في مجال الرعاية
                    الصحية الفموية والأسنان، والذي يقدم خدمات متكاملة وعالية
                    الجودة في مدينة الزقازيق. يعتبر مركز النخبة مكانًا متخصصًا
                    للعناية بصحة وجمال الأسنان، حيث يتضمن فريقًا مؤهلاً من
                    الأطباء والمتخصصين في مجالات متعددة مثل طب الأسنان العام، و
                    طب اسنان الاطفال، وتقويم الأسنان.
                </p>
            </div>
            <div
                className={`flex justify-center text-[50px] font-bold mb-[90px] ${kufam.className}
                    before:absolute before:w-[0px] before:h-[2px] text-black/80 before:bg-blue-500 transition duration-700 delay-100 ${styles.title}`}>
                نتشرف دائما بخدمة عملائنا
            </div>
            <div
                className={`max-w-[1380px] m-auto px-[30px] py-[40px]`}
                ref={ref}>
                <Carousel
                    autoPlay={true}
                    responsive={responsive}
                    infinite={true}
                    containerClass="-mx-[10px]"
                    itemClass="px-[10px]">
                    {data.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className={`transform -translate-x-[500px] opacity-0
                        transition duration-[0.6s] delay-[1s]`}
                                style={{
                                    transform: inView ? "translateX(0px)" : "",
                                    opacity: inView ? 1 : 0,
                                }}>
                                <img src={item.img} alt="" className="w-full" />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};

export default Slide;
