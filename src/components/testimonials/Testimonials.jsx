"use client";

import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "أحمد محمد",
      rating: 5,
      comment:
        "تجربة رائعة! الفريق الطبي متعاون جداً والعلاج كان مريحاً. أنصح الجميع بزيارة العيادة.",
      image: "/testimonials/person1.jpg",
    },
    {
      name: "سارة أحمد",
      rating: 5,
      comment:
        "خدمة ممتازة وأطباء محترفين. ساعدوني في حل مشكلة أسناني بشكل نهائي.",
      image: "/testimonials/person2.jpg",
    },
    {
      name: "محمد علي",
      rating: 5,
      comment:
        "عيادة نظيفة ومجهزة بأحدث الأجهزة. الأطباء متعاونون والعلاج كان فعالاً.",
      image: "/testimonials/person3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-white to-[#e8eeef]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black/80 mb-4">آراء المرضى</h2>
          <p className="text-lg text-black/70">نفخر بتجارب مرضانا الإيجابية</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#e1e7e7] to-[#e8eeef] rounded-lg shadow-xl p-8 relative">
            <div className="flex items-center justify-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-[#2c5364] w-6 h-6" />
                ))}
              </div>
              <p className="text-xl text-black/80 mb-4">
                {testimonials[currentIndex].comment}
              </p>
              <h4 className="text-lg font-semibold text-black/80">
                {testimonials[currentIndex].name}
              </h4>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
              <button
                onClick={prevTestimonial}
                className="bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white p-2 rounded-full hover:from-[#0f2027] hover:to-[#203a43] transition-all"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white p-2 rounded-full hover:from-[#0f2027] hover:to-[#203a43] transition-all"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
