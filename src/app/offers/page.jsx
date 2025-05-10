"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaTooth,
  FaPercent,
  FaCalendarAlt,
  FaCheck,
  FaClock,
} from "react-icons/fa";

const OfferCard = ({ offer, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-r from-[#e1e7e7] to-[#e8eeef] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative">
        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white px-4 py-1 rounded-full text-sm font-semibold">
          خصم {offer.discount}%
        </div>
        <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-56 object-cover"
        />
      </div>
      <div className="p-6 text-right" dir="rtl">
        <div className="flex justify-end mb-4">
          <div className="p-3 bg-white rounded-full">{offer.icon}</div>
        </div>
        <h3 className="text-2xl font-bold text-black/80 mb-2">{offer.title}</h3>
        <p className="text-black/70 mb-4">{offer.description}</p>
        <div className="flex justify-end items-center gap-4 mb-6">
          <span className="text-2xl font-bold text-[#2c5364]">
            {offer.discountedPrice} جنيه
          </span>
          <span className="text-black/50 line-through text-lg">
            {offer.originalPrice} جنيه
          </span>
        </div>
        <div className="space-y-2 mb-6">
          {offer.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center justify-end text-black/70"
            >
              <span className="mr-2">{feature}</span>
              <FaCheck className="w-4 h-4 text-[#2c5364]" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end text-black/60 mb-4">
          <span>صالح حتى: {offer.validUntil}</span>
          <FaClock className="w-4 h-4 mr-2 text-[#2c5364]" />
        </div>
        <button className="w-full bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white py-3 px-6 rounded-lg hover:from-[#0f2027] hover:to-[#203a43] transition-all">
          احجز الآن
        </button>
      </div>
    </motion.div>
  );
};

const OffersPage = () => {
  const offers = [
    {
      id: 1,
      title: "تنظيف الأسنان الاحترافي",
      description: "احصل على تنظيف احترافي للأسنان مع خصم 30%",
      originalPrice: "500",
      discountedPrice: "350",
      discount: 30,
      image:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: <FaTooth className="w-10 h-10 text-[#0f2027]" />,
      validUntil: "30 أبريل 2024",
      features: [
        "تنظيف احترافي",
        "فحص شامل",
        "تلميع الأسنان",
        "نصائح للعناية اليومية",
      ],
    },
    {
      id: 2,
      title: "حزمة تبييض الأسنان",
      description: "تبييض احترافي للأسنان مع خصم 25%",
      originalPrice: "800",
      discountedPrice: "600",
      discount: 25,
      image:
        "https://images.unsplash.com/photo-1581585095049-9d5632a0e77e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: <FaPercent className="w-10 h-10 text-[#0f2027]" />,
      validUntil: "15 مايو 2024",
      features: [
        "جلسة تبييض احترافية",
        "فحص ما قبل التبييض",
        "نصائح للحفاظ على النتائج",
        "متابعة مجانية",
      ],
    },
    {
      id: 3,
      title: "فحص شامل مجاني",
      description: "احصل على فحص شامل مجاني للأسنان",
      originalPrice: "300",
      discountedPrice: "0",
      discount: 100,
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: <FaCalendarAlt className="w-10 h-10 text-[#0f2027]" />,
      validUntil: "1 يونيو 2024",
      features: ["فحص شامل", "أشعة سينية", "تشخيص مجاني", "خطة علاجية"],
    },
    {
      id: 4,
      title: "زراعة الأسنان",
      description: "خصم خاص على زراعة الأسنان",
      originalPrice: "5000",
      discountedPrice: "4000",
      discount: 20,
      image:
        "https://images.unsplash.com/photo-1579083578954-4d991d59d239?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: <FaTooth className="w-10 h-10 text-[#0f2027]" />,
      validUntil: "30 يونيو 2024",
      features: [
        "زراعة سن كاملة",
        "فحص وتشخيص",
        "متابعة لمدة سنة",
        "ضمان لمدة 5 سنوات",
      ],
    },
    {
      id: 5,
      title: "تقويم الأسنان للأطفال",
      description: "خصم خاص على تقويم الأسنان للأطفال",
      originalPrice: "7000",
      discountedPrice: "5500",
      discount: 21,
      image:
        "https://images.unsplash.com/photo-1601055903647-ddf1ee9701b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: <FaTooth className="w-10 h-10 text-[#0f2027]" />,
      validUntil: "15 يوليو 2024",
      features: [
        "تقويم كامل",
        "جلسات متابعة",
        "تعديلات مجانية",
        "استشارة مجانية",
      ],
    },
    {
      id: 6,
      title: "علاج جذور الأسنان",
      description: "خصم 15% على علاج جذور الأسنان",
      originalPrice: "1200",
      discountedPrice: "1020",
      discount: 15,
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: <FaTooth className="w-10 h-10 text-[#0f2027]" />,
      validUntil: "30 يوليو 2024",
      features: [
        "علاج كامل للجذور",
        "تنظيف القنوات",
        "حشو دائم",
        "متابعة بعد العلاج",
      ],
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-[#e8eeef] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-black/80 mb-4">
            عروضنا الحالية
          </h1>
          <p className="text-lg text-black/70 max-w-3xl mx-auto">
            استمتع بأفضل العروض والخصومات على خدمات طب الأسنان المتميزة لدينا.
            احجز الآن واستفد من هذه العروض المحدودة!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <OfferCard key={offer.id} offer={offer} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white p-8 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">عرض خاص للعائلات</h2>
          <p className="text-lg mb-6">
            احصل على خصم 10% إضافي عند حجز مواعيد لثلاثة أفراد أو أكثر من
            العائلة
          </p>
          <button className="bg-white text-[#0f2027] py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            تفاصيل أكثر
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default OffersPage;
