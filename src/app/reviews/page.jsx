"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { kufam } from "../../fonts";
import styles from "../../components/slide/slide.module.css";

const data = [
    {
        id: 1,
        dela: "0.4s",
        img: "/comment-1.jpg",
    },
    {
        id: 2,
        dela: "0.6s",
        img: "/comment-2.jpg",
    },
    {
        id: 3,
        dela: "0.6s",
        img: "/comment-3.jpg",
    },
    {
        id: 4,
        dela: "0.6s",
        img: "/comment-4.jpg",
    },
    {
        id: 5,
        dela: "0.6s",
        img: "/comment-5.jpg",
    },
    {
        id: 6,
        dela: "0.6s",
        img: "/comment-6.jpg",
    },
    {
        id: 7,
        dela: "0.6s",
        img: "/comment-7.jpg",
    },
    {
        id: 8,
        dela: "0.6s",
        img: "/comment-8.jpg",
    },
    {
        id: 9,
        dela: "0.6s",
        img: "/comment-9.jpg",
    },
    {
        id: 10,
        dela: "0.6s",
        img: "/comment-10.jpg",
    },
    {
        id: 11,
        dela: "0.6s",
        img: "/comment-11.jpg",
    },
    {
        id: 12,
        dela: "0.6s",
        img: "/comment-12.jpg",
    },
    {
        id: 13,
        dela: "0.6s",
        img: "/comment-13.jpg",
    },
    {
        id: 14,
        dela: "0.6s",
        img: "/comment-14.jpg",
    },
    {
        id: 15,
        dela: "0.6s",
        img: "/comment-15.jpg",
    },
    {
        id: 16,
        dela: "0.6s",
        img: "/comment-16.jpg",
    },
];

const page = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
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
                className={`flex justify-center text-[50px] font-bold mt-[60px] mb-[60px] ${kufam.className}
                    before:absolute before:w-[0px] before:h-[2px] before:bg-blue-500 transition duration-700 delay-100 ${styles.title}`}>
                نسعى جاهدين لرضا عملائنا
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

export default page;
