"use client";

import { useAnimate, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { josefin_Sans } from "../../fonts";

const Services = () => {
    const ref2 = useRef(null);
    const inView2 = useInView(ref2, { once: true });

    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    return (
        <>
            <AnimatePresence>
                <div
                    className="max-w-[1380px] mx-auto px-[30px] mt-[80px]"
                    lang="ar"
                    dir="rtl">
                    <h2 className="text-black/80 text-[50px] font-bold flex justify-center mb-[50px]">
                        الخدمات
                    </h2>

                    {/* ............ */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[50px] gap-y-[40px]">
                        <div
                            className="opacity-0 transform translate-y-[100px] transition duration-1000 delay-[0.4s]"
                            ref={ref}
                            style={{
                                transform: inView ? "translateY(0px)" : "",
                                opacity: inView ? 1 : 0,
                            }}>
                            <img
                                src="/dental-implant.png"
                                alt=""
                                className="w-[50px] h-[50px] mb-3 rounded-full bg-[#e8eeef] p-[10px] text-white"
                            />
                            <h3 className="text-[20px] font-semibold">
                                زراعة الأسنان
                            </h3>
                            <p className="text-black/80 mt-2">
                                يُطلق البعض على زراعة الأسنان أنها السِحر الخاص
                                بعالم طب الأسنان، وذلك لما هنالك من مميزات
                                وفوائد جمّة تقدمها الزراعة، ولكن ماذا عن زراعة
                                الفك العلوي بالتحديد؟
                            </p>
                        </div>
                        <div
                            className="opacity-0 transform translate-y-[100px] transition duration-1000 delay-[0.6s]"
                            style={{
                                transform: inView ? "translateY(0px)" : "",
                                opacity: inView ? 1 : 0,
                            }}>
                            <img
                                src="/clean-tooth.png"
                                alt=""
                                className="w-[50px] h-[50px] mb-3 rounded-full bg-[#e8eeef] p-[10px] text-white"
                            />
                            <h3 className="text-[20px] font-semibold">
                                تجميل الأسنان
                            </h3>
                            <p className="text-black/80 mt-2">
                                هل تعانون من مشكلة اصفرار الاسنان؟ هل تزعجكم
                                التغيرات الواضحة في لون أسنانكم عن الطبيعي؟ هل
                                تبحثون عن طرق لعلاج تصبغات الاسنان والتخلص منها؟
                            </p>
                        </div>
                        <div
                            className="opacity-0 transform translate-y-[100px] transition duration-1000 delay-[0.8s]"
                            style={{
                                transform: inView ? "translateY(0px)" : "",
                                opacity: inView ? 1 : 0,
                            }}>
                            <img
                                src="/root-canal.png"
                                alt=""
                                className="w-[50px] h-[50px] mb-3 rounded-full bg-[#e8eeef] p-[10px] text-white"
                            />
                            <h3 className="text-[20px] font-semibold">
                                علاج جذور الأسنان
                            </h3>
                            <p className="text-black/80 mt-2">
                                هل تعانون من مشكلة اصفرار الاسنان؟ هل تزعجكم
                                التغيرات الواضحة في لون أسنانكم عن الطبيعي؟ هل
                                تبحثون عن طرق لعلاج تصبغات الاسنان والتخلص منها؟
                            </p>
                        </div>
                        <div
                            className="opacity-0 transform translate-y-[100px] transition duration-1000 delay-[1s]"
                            style={{
                                transform: inView ? "translateY(0px)" : "",
                                opacity: inView ? 1 : 0,
                            }}>
                            <img
                                src="/drilling.png"
                                alt=""
                                className="w-[50px] h-[50px] mb-3 rounded-full bg-[#e8eeef] p-[10px] text-white"
                            />
                            <h3 className="text-[20px] font-semibold">
                                التركيبات الثابتة
                            </h3>
                            <p className="text-black/80 mt-2">
                                يُطلق البعض على زراعة الأسنان أنها السِحر الخاص
                                بعالم طب الأسنان، وذلك لما هنالك من مميزات
                                وفوائد جمّة تقدمها الزراعة، ولكن ماذا عن زراعة
                                الفك العلوي بالتحديد؟
                            </p>
                        </div>
                        <div
                            className="opacity-0 transform translate-y-[100px] transition duration-1000 delay-[1.2s]"
                            style={{
                                transform: inView ? "translateY(0px)" : "",
                                opacity: inView ? 1 : 0,
                            }}>
                            <img
                                src="/braces.png"
                                alt=""
                                className="w-[50px] h-[50px] mb-3 rounded-full bg-[#e8eeef] p-[10px] text-white"
                            />
                            <h3 className="text-[20px] font-semibold">
                                تقويم الأسنان
                            </h3>
                            <p className="text-black/80 mt-2">
                                يعد تقويم الأسنان من أهم إجراءات الأسنان
                                التجميلية والعلاجية في نفس الوقت، ويتساءل الكثير
                                من الناس ما هو أفضل تقويم اسنان؟ وكيف يمكن
                                اختياره؟
                            </p>
                        </div>
                        <div
                            className="opacity-0 transform translate-y-[100px] transition duration-1000 delay-[1.4s]"
                            style={{
                                transform: inView ? "translateY(0px)" : "",
                                opacity: inView ? 1 : 0,
                            }}>
                            <img
                                src="/baby-teeth.png"
                                alt=""
                                className="w-[50px] h-[50px] mb-3 rounded-full bg-[#e8eeef] p-[10px] text-white"
                            />
                            <h3 className="text-[20px] font-semibold">
                                طب أسنان الأطفال
                            </h3>
                            <p className="text-black/80 mt-2">
                                هل تعانون من مشكلة اصفرار الاسنان؟ هل تزعجكم
                                التغيرات الواضحة في لون أسنانكم عن الطبيعي؟ هل
                                تبحثون عن طرق لعلاج تصبغات الاسنان والتخلص منها؟
                            </p>
                        </div>
                    </div>
                </div>
                {/* .................................... */}
                <div className="px-[30px]">
                    <Link
                        ref={ref2}
                        href={"/"}
                        className="rounded-md my-[180px] bg-[#e8eeef] text-black/80 py-[40px]
                    flex flex-col md:flex-row justify-between items-center max-w-[1380px] mx-auto
                    px-[80px] opacity-0 transform translate-y-[200px] transition duration-[1.5s]"
                        style={{
                            transform: inView2 ? "translateY(0px)" : "",
                            opacity: inView2 ? 1 : 0,
                        }}>
                        <div
                            className={`font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-600 to-red-500 md:text-[100px] ${josefin_Sans.className}`}>
                            SALE
                        </div>
                        <div
                            className="text-[25px] text-center md:text-[50px] font-semibold"
                            lang="ar"
                            dir="rtl">
                            <h4>شوف عروض مركز النخبة</h4>
                        </div>
                    </Link>
                </div>
            </AnimatePresence>
        </>
    );
};

export default Services;
