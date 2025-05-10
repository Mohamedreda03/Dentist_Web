"use client";

import {
  FaTooth,
  FaUserMd,
  FaClock,
  FaHospital,
  FaCheckCircle,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaTooth className="w-12 h-12 text-[#0f2027]" />,
      title: "أحدث التقنيات",
      description:
        "نستخدم أحدث الأجهزة والتقنيات في طب الأسنان لضمان أفضل النتائج",
      benefits: [
        "أجهزة تشخيص متطورة",
        "تقنيات علاج حديثة",
        "أدوات معقمة",
        "بيئة آمنة",
      ],
    },
    {
      icon: <FaUserMd className="w-12 h-12 text-[#0f2027]" />,
      title: "فريق طبي محترف",
      description: "أطباء متخصصون ذو خبرة عالية في جميع مجالات طب الأسنان",
      benefits: ["خبرة واسعة", "تدريب مستمر", "معايير عالمية", "رعاية شخصية"],
    },
    {
      icon: <FaClock className="w-12 h-12 text-[#0f2027]" />,
      title: "مواعيد مرنة",
      description: "نسعى لتوفير مواعيد تناسب جدولك اليومي",
      benefits: [
        "مواعيد صباحية",
        "مواعيد مسائية",
        "مواعيد عطلة نهاية الأسبوع",
        "حجز سريع",
      ],
    },
    {
      icon: <FaHospital className="w-12 h-12 text-[#0f2027]" />,
      title: "بيئة مريحة",
      description: "نسعى لتوفير تجربة مريحة وهادئة لجميع المرضى",
      benefits: ["جو هادئ", "رعاية خاصة", "مرافق حديثة", "خدمة متميزة"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#e8eeef] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black/80 mb-4">
            لماذا تختارنا؟
          </h2>
          <p className="text-lg text-black/70">
            نقدم أفضل خدمات طب الأسنان مع ضمان الجودة والراحة
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#e1e7e7] to-[#e8eeef] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-white rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black/80">
                  {feature.title}
                </h3>
                <p className="text-black/70 mb-4">{feature.description}</p>
                <div className="space-y-2 w-full">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-black/70">
                      <FaCheckCircle className="w-4 h-4 text-[#2c5364] ml-2" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
