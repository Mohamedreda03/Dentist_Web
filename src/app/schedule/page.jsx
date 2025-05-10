"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaClock,
  FaCalendarAlt,
  FaUserMd,
  FaTooth,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState("الاثنين");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const days = [
    "السبت",
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
  ];

  const doctors = [
    {
      id: 1,
      name: "د. أحمد محمود",
      specialty: "جراحة الفم والأسنان",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
      availability: ["السبت", "الاثنين", "الأربعاء"],
    },
    {
      id: 2,
      name: "د. سارة خالد",
      specialty: "تقويم الأسنان",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      availability: ["الأحد", "الثلاثاء", "الخميس"],
    },
    {
      id: 3,
      name: "د. محمد عبدالله",
      specialty: "زراعة الأسنان",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      availability: ["السبت", "الاثنين", "الخميس"],
    },
    {
      id: 4,
      name: "د. نورا سمير",
      specialty: "علاج جذور الأسنان",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
      availability: ["الأحد", "الثلاثاء", "الجمعة"],
    },
  ];

  const services = [
    {
      id: 1,
      name: "فحص وتشخيص",
      duration: "30 دقيقة",
      icon: <FaTooth className="w-6 h-6" />,
    },
    {
      id: 2,
      name: "تنظيف الأسنان",
      duration: "45 دقيقة",
      icon: <FaTooth className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "حشو الأسنان",
      duration: "60 دقيقة",
      icon: <FaTooth className="w-6 h-6" />,
    },
    {
      id: 4,
      name: "علاج جذور",
      duration: "90 دقيقة",
      icon: <FaTooth className="w-6 h-6" />,
    },
    {
      id: 5,
      name: "تركيبات ثابتة",
      duration: "60 دقيقة",
      icon: <FaTooth className="w-6 h-6" />,
    },
    {
      id: 6,
      name: "تقويم الأسنان",
      duration: "45 دقيقة",
      icon: <FaTooth className="w-6 h-6" />,
    },
  ];

  const timeSlots = [
    "9:00 صباحاً",
    "10:00 صباحاً",
    "11:00 صباحاً",
    "12:00 ظهراً",
    "1:00 مساءً",
    "2:00 مساءً",
    "3:00 مساءً",
    "4:00 مساءً",
    "5:00 مساءً",
    "6:00 مساءً",
    "7:00 مساءً",
    "8:00 مساءً",
  ];

  const availableDoctors = doctors.filter((doctor) =>
    doctor.availability.includes(selectedDay)
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert("تم حجز موعدك بنجاح! سنتواصل معك قريباً لتأكيد الموعد.");
    // Reset form
    setSelectedDoctor(null);
    setSelectedService(null);
    setSelectedTime(null);
    setShowForm(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      notes: "",
    });
  };

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
            جدول المواعيد
          </h1>
          <p className="text-lg text-black/70 max-w-3xl mx-auto">
            احجز موعدك بسهولة مع أطبائنا المتخصصين. اختر اليوم والطبيب والخدمة
            المناسبة لك.
          </p>
        </motion.div>

        <div className="bg-gradient-to-r from-[#e1e7e7] to-[#e8eeef] rounded-lg shadow-lg p-8 mb-12">
          {/* Step 1: Select Day */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-2xl font-bold text-black/80 mb-6 text-right"
              dir="rtl"
            >
              1. اختر اليوم المناسب
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`py-3 px-4 rounded-lg text-center transition-all ${
                    selectedDay === day
                      ? "bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white"
                      : "bg-white text-black/70 hover:bg-[#e1e7e7]"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Step 2: Select Doctor */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2
              className="text-2xl font-bold text-black/80 mb-6 text-right"
              dir="rtl"
            >
              2. اختر الطبيب
            </h2>
            {availableDoctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {availableDoctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    onClick={() => setSelectedDoctor(doctor)}
                    className={`bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-all ${
                      selectedDoctor?.id === doctor.id
                        ? "ring-2 ring-[#2c5364] transform scale-[1.02]"
                        : "hover:shadow-lg"
                    }`}
                  >
                    <div className="relative h-40">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-right" dir="rtl">
                      <h3 className="text-lg font-semibold text-black/80">
                        {doctor.name}
                      </h3>
                      <p className="text-[#2c5364]">{doctor.specialty}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="text-black/70">
                  لا يوجد أطباء متاحين في هذا اليوم. يرجى اختيار يوم آخر.
                </p>
              </div>
            )}
          </motion.div>

          {/* Step 3: Select Service */}
          {selectedDoctor && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2
                className="text-2xl font-bold text-black/80 mb-6 text-right"
                dir="rtl"
              >
                3. اختر الخدمة
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all ${
                      selectedService?.id === service.id
                        ? "bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white"
                        : "bg-white text-black/80 hover:bg-[#e1e7e7]"
                    }`}
                    dir="rtl"
                  >
                    <div className="flex items-center">
                      <div
                        className={`p-2 rounded-full mr-3 ${
                          selectedService?.id === service.id
                            ? "bg-white/20"
                            : "bg-[#e8eeef]"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p
                          className={
                            selectedService?.id === service.id
                              ? "text-white/80"
                              : "text-black/60"
                          }
                        >
                          {service.duration}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        selectedService?.id === service.id
                          ? "bg-white text-[#2c5364]"
                          : "bg-[#e8eeef]"
                      }`}
                    >
                      {selectedService?.id === service.id ? "✓" : ""}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 4: Select Time */}
          {selectedService && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2
                className="text-2xl font-bold text-black/80 mb-6 text-right"
                dir="rtl"
              >
                4. اختر الوقت
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 px-4 rounded-lg text-center transition-all ${
                      selectedTime === time
                        ? "bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white"
                        : "bg-white text-black/70 hover:bg-[#e1e7e7]"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 5: Booking Form */}
          {selectedTime && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="flex items-center text-[#2c5364] font-semibold"
                >
                  {showForm ? (
                    <FaChevronUp className="mr-2" />
                  ) : (
                    <FaChevronDown className="mr-2" />
                  )}
                  {showForm ? "إخفاء النموذج" : "إظهار نموذج الحجز"}
                </button>
                <h2
                  className="text-2xl font-bold text-black/80 text-right"
                  dir="rtl"
                >
                  5. أكمل بيانات الحجز
                </h2>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div
                  className="flex flex-col md:flex-row justify-between mb-6 text-right"
                  dir="rtl"
                >
                  <div className="flex items-center mb-4 md:mb-0">
                    <FaCalendarAlt className="text-[#2c5364] ml-2" />
                    <div>
                      <p className="text-black/60">اليوم</p>
                      <p className="font-semibold">{selectedDay}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 md:mb-0">
                    <FaClock className="text-[#2c5364] ml-2" />
                    <div>
                      <p className="text-black/60">الوقت</p>
                      <p className="font-semibold">{selectedTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 md:mb-0">
                    <FaUserMd className="text-[#2c5364] ml-2" />
                    <div>
                      <p className="text-black/60">الطبيب</p>
                      <p className="font-semibold">{selectedDoctor.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaTooth className="text-[#2c5364] ml-2" />
                    <div>
                      <p className="text-black/60">الخدمة</p>
                      <p className="font-semibold">{selectedService.name}</p>
                    </div>
                  </div>
                </div>
              </div>

              {showForm && (
                <motion.form
                  onSubmit={handleSubmit}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  dir="rtl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-black/80 font-medium mb-2">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-[#e1e7e7] rounded-md focus:ring-2 focus:ring-[#2c5364] focus:border-[#2c5364]"
                      />
                    </div>
                    <div>
                      <label className="block text-black/80 font-medium mb-2">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-[#e1e7e7] rounded-md focus:ring-2 focus:ring-[#2c5364] focus:border-[#2c5364]"
                      />
                    </div>
                    <div>
                      <label className="block text-black/80 font-medium mb-2">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[#e1e7e7] rounded-md focus:ring-2 focus:ring-[#2c5364] focus:border-[#2c5364]"
                      />
                    </div>
                    <div>
                      <label className="block text-black/80 font-medium mb-2">
                        ملاحظات إضافية
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-2 border border-[#e1e7e7] rounded-md focus:ring-2 focus:ring-[#2c5364] focus:border-[#2c5364]"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white py-3 px-8 rounded-lg hover:from-[#0f2027] hover:to-[#203a43] transition-all"
                    >
                      تأكيد الحجز
                    </button>
                  </div>
                </motion.form>
              )}
            </motion.div>
          )}
        </div>

        {/* Clinic Hours */}
        <motion.div
          className="bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">ساعات العمل</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-right" dir="rtl">
              <h3 className="text-xl font-semibold mb-4">فرع المفارق</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>9:00 صباحاً - 9:00 مساءً</span>
                  <span>السبت - الخميس</span>
                </li>
                <li className="flex justify-between">
                  <span>2:00 مساءً - 9:00 مساءً</span>
                  <span>الجمعة</span>
                </li>
              </ul>
              <div className="mt-4">
                <p>للاتصال: 01111496647 - 0552313649</p>
              </div>
            </div>
            <div className="text-right" dir="rtl">
              <h3 className="text-xl font-semibold mb-4">فرع المحطة</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>9:00 صباحاً - 9:00 مساءً</span>
                  <span>السبت - الخميس</span>
                </li>
                <li className="flex justify-between">
                  <span>2:00 مساءً - 9:00 مساءً</span>
                  <span>الجمعة</span>
                </li>
              </ul>
              <div className="mt-4">
                <p>للاتصال: 01113979701</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SchedulePage;
