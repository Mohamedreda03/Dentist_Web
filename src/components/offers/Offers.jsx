"use client";

import { useState } from "react";
import { FaTooth, FaPercent, FaCalendarAlt } from "react-icons/fa";

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "تنظيف الأسنان الاحترافي",
      description: "احصل على تنظيف احترافي للأسنان مع خصم 30%",
      originalPrice: "500",
      discountedPrice: "350",
      icon: <FaTooth className="w-12 h-12 text-[#0f2027]" />,
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
      icon: <FaPercent className="w-12 h-12 text-[#0f2027]" />,
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
      icon: <FaCalendarAlt className="w-12 h-12 text-[#0f2027]" />,
      validUntil: "1 يونيو 2024",
      features: ["فحص شامل", "أشعة سينية", "تشخيص مجاني", "خطة علاجية"],
    },
  ];

  const [selectedOffer, setSelectedOffer] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-r from-[#e8eeef] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black/80 mb-4">
            عروضنا الحالية
          </h2>
          <p className="text-lg text-black/70">
            استمتع بأفضل العروض على خدمات طب الأسنان
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-gradient-to-r from-[#e1e7e7] to-[#e8eeef] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setSelectedOffer(offer)}
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-full">{offer.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-center text-black/80 mb-2">
                  {offer.title}
                </h3>
                <p className="text-black/70 text-center mb-4">
                  {offer.description}
                </p>
                <div className="flex justify-center items-center gap-4 mb-6">
                  <span className="text-black/50 line-through text-lg">
                    {offer.originalPrice} جنيه
                  </span>
                  <span className="text-2xl font-bold text-[#2c5364]">
                    {offer.discountedPrice} جنيه
                  </span>
                </div>
                <div className="space-y-2 mb-6">
                  {offer.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-black/70"
                    >
                      <span className="w-2 h-2 bg-[#2c5364] rounded-full ml-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="text-center text-sm text-black/60 mb-4">
                  صالح حتى: {offer.validUntil}
                </div>
                <button className="w-full bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white py-3 px-6 rounded-lg hover:from-[#0f2027] hover:to-[#203a43] transition-all">
                  احجز الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
