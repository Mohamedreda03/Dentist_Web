"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaTooth,
  FaUserMd,
  FaHospital,
  FaAward,
  FaHistory,
  FaHandshake,
} from "react-icons/fa";

const AboutPage = () => {
  const stats = [
    {
      id: 1,
      value: "+15",
      label: "سنوات من الخبرة",
      icon: <FaHistory className="w-8 h-8 text-[#2c5364]" />,
    },
    {
      id: 2,
      value: "+10,000",
      label: "مريض سعيد",
      icon: <FaHandshake className="w-8 h-8 text-[#2c5364]" />,
    },
    {
      id: 3,
      value: "+20",
      label: "طبيب متخصص",
      icon: <FaUserMd className="w-8 h-8 text-[#2c5364]" />,
    },
    {
      id: 4,
      value: "+30",
      label: "جائزة تميز",
      icon: <FaAward className="w-8 h-8 text-[#2c5364]" />,
    },
  ];

  const values = [
    {
      id: 1,
      title: "الجودة",
      description:
        "نلتزم بتقديم أعلى معايير الجودة في جميع خدماتنا وإجراءاتنا الطبية",
      icon: <FaAward className="w-12 h-12 text-[#0f2027]" />,
    },
    {
      id: 2,
      title: "الرعاية الشخصية",
      description:
        "نهتم بكل مريض بشكل فردي ونقدم خطط علاجية مخصصة تناسب احتياجاته",
      icon: <FaUserMd className="w-12 h-12 text-[#0f2027]" />,
    },
    {
      id: 3,
      title: "التكنولوجيا المتقدمة",
      description:
        "نستخدم أحدث التقنيات والأجهزة في مجال طب الأسنان لضمان أفضل النتائج",
      icon: <FaTooth className="w-12 h-12 text-[#0f2027]" />,
    },
    {
      id: 4,
      title: "بيئة مريحة",
      description:
        "نوفر بيئة علاجية مريحة وهادئة تساعد المرضى على الاسترخاء أثناء العلاج",
      icon: <FaHospital className="w-12 h-12 text-[#0f2027]" />,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#e8eeef] to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-1/2 text-right" dir="rtl">
              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-black/80 mb-6"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                مركز النخبة لطب الأسنان
              </motion.h1>
              <motion.p
                className="text-lg text-black/70 mb-8 leading-relaxed"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                منذ تأسيسنا في عام 2008، نسعى جاهدين لتقديم أعلى مستويات الرعاية
                في مجال طب الأسنان. يضم فريقنا نخبة من الأطباء المتخصصين ذوي
                الخبرة الواسعة في مختلف مجالات طب الأسنان، مدعومين بأحدث
                التقنيات والمعدات الطبية.
              </motion.p>
              <motion.p
                className="text-lg text-black/70 mb-8 leading-relaxed"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                نؤمن بأن كل مريض فريد من نوعه، لذلك نقدم خطط علاجية مخصصة تلبي
                احتياجات كل مريض على حدة. هدفنا هو تحقيق أفضل النتائج العلاجية
                مع توفير تجربة مريحة وخالية من القلق.
              </motion.p>
              <motion.button
                className="bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white py-3 px-8 rounded-lg hover:from-[#0f2027] hover:to-[#203a43] transition-all"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                احجز موعداً الآن
              </motion.button>
            </div>
            <motion.div
              className="md:w-1/2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="مركز النخبة لطب الأسنان"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-black/80 mb-4">قيمنا</h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              نلتزم بمجموعة من القيم الأساسية التي توجه عملنا وتعاملنا مع المرضى
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                className="bg-gradient-to-r from-[#e1e7e7] to-[#e8eeef] p-8 rounded-xl shadow-lg text-right"
                dir="rtl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-end mb-6">
                  <div className="p-4 bg-white rounded-full">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-black/80 mb-4">
                  {value.title}
                </h3>
                <p className="text-black/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-r from-[#e1e7e7] to-[#e8eeef]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="فريق مركز النخبة"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              className="lg:w-1/2 text-right"
              dir="rtl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-black/80 mb-6">قصتنا</h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                بدأت رحلة مركز النخبة لطب الأسنان في عام 2008 بفكرة بسيطة: تقديم
                رعاية أسنان استثنائية في بيئة مريحة وودية. منذ ذلك الحين، نمت
                عيادتنا من عيادة صغيرة إلى مركز متكامل يضم أحدث التقنيات
                والمعدات.
              </p>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                على مر السنين، قمنا بعلاج آلاف المرضى وساعدناهم في الحصول على
                ابتسامات صحية وجميلة. نفخر بالثقة التي يضعها مرضانا فينا، ونسعى
                دائماً للحفاظ على هذه الثقة من خلال تقديم أفضل رعاية ممكنة.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                اليوم، يضم مركز النخبة فريقاً من الأطباء المتخصصين في مختلف
                مجالات طب الأسنان، مما يتيح لنا تقديم مجموعة شاملة من الخدمات
                تحت سقف واحد.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
