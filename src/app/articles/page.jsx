"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaCalendarAlt, FaUser, FaTag } from "react-icons/fa";
import Link from "next/link";

const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("الكل");

  const articles = [
    {
      id: 1,
      title: "كيف تحافظ على صحة أسنانك",
      excerpt:
        "نصائح مهمة للعناية اليومية بصحة الفم والأسنان وكيفية الوقاية من المشاكل الشائعة",
      content: "محتوى المقال التفصيلي...",
      image:
        "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
      date: "15 مارس 2024",
      author: "د. أحمد محمود",
      category: "صحة الأسنان",
      tags: ["العناية بالأسنان", "صحة الفم", "نصائح يومية"],
    },
    {
      id: 2,
      title: "أهمية تنظيف الأسنان المنتظم",
      excerpt:
        "لماذا يجب عليك زيارة طبيب الأسنان كل 6 أشهر وما هي فوائد التنظيف الدوري",
      content: "محتوى المقال التفصيلي...",
      image:
        "https://images.unsplash.com/photo-1541604193435-22287d80f1c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      date: "10 مارس 2024",
      author: "د. سارة خالد",
      category: "نصائح طبية",
      tags: ["تنظيف الأسنان", "زيارة الطبيب", "وقاية"],
    },
    {
      id: 3,
      title: "تقويم الأسنان: كل ما تحتاج معرفته",
      excerpt:
        "دليلك الشامل لمعرفة أنواع تقويم الأسنان وأهميتها وكيفية العناية بها",
      content: "محتوى المقال التفصيلي...",
      image:
        "https://images.unsplash.com/photo-1601055903647-ddf1ee9701b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      date: "5 مارس 2024",
      author: "د. محمد عبدالله",
      category: "تقويم الأسنان",
      tags: ["تقويم الأسنان", "أنواع التقويم", "العناية بالتقويم"],
    },
    {
      id: 4,
      title: "زراعة الأسنان: الحل الأمثل لفقدان الأسنان",
      excerpt: "كل ما تحتاج معرفته عن زراعة الأسنان وفوائدها وخطوات العملية",
      content: "محتوى المقال التفصيلي...",
      image:
        "https://images.unsplash.com/photo-1579083578954-4d991d59d239?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      date: "28 فبراير 2024",
      author: "د. نورا سمير",
      category: "زراعة الأسنان",
      tags: ["زراعة الأسنان", "فقدان الأسنان", "تعويض الأسنان"],
    },
    {
      id: 5,
      title: "كيفية التعامل مع حساسية الأسنان",
      excerpt: "أسباب حساسية الأسنان وطرق علاجها والوقاية منها",
      content: "محتوى المقال التفصيلي...",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      date: "20 فبراير 2024",
      author: "د. كريم فؤاد",
      category: "مشاكل الأسنان",
      tags: ["حساسية الأسنان", "علاج", "وقاية"],
    },
    {
      id: 6,
      title: "تبييض الأسنان: الطرق المختلفة والنتائج المتوقعة",
      excerpt:
        "مقارنة بين طرق تبييض الأسنان المختلفة ونصائح للحفاظ على النتائج",
      content: "محتوى المقال التفصيلي...",
      image:
        "https://images.unsplash.com/photo-1581585095049-9d5632a0e77e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      date: "15 فبراير 2024",
      author: "د. هدى الشريف",
      category: "تجميل الأسنان",
      tags: ["تبييض الأسنان", "تجميل", "ابتسامة"],
    },
    {
      id: 7,
      title: "العناية بأسنان الأطفال: دليل الوالدين",
      excerpt:
        "نصائح للوالدين حول كيفية العناية بأسنان أطفالهم ومتى يجب زيارة طبيب الأسنان",
      content: "محتوى المقال التفصيلي...",
      image:
        "https://images.unsplash.com/photo-1588840751252-e68b9a477865?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      date: "10 فبراير 2024",
      author: "د. سارة خالد",
      category: "طب أسنان الأطفال",
      tags: ["أسنان الأطفال", "نصائح للوالدين", "صحة الأطفال"],
    },
    {
      id: 8,
      title: "علاج جذور الأسنان: متى يكون ضرورياً؟",
      excerpt:
        "كل ما تحتاج معرفته عن علاج جذور الأسنان وكيفية التعافي بعد العملية",
      content: "محتوى المقال التفصيلي...",
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      date: "5 فبراير 2024",
      author: "د. أحمد محمود",
      category: "علاج الجذور",
      tags: ["علاج الجذور", "ألم الأسنان", "حشو الأسنان"],
    },
  ];

  const categories = [
    "الكل",
    ...new Set(articles.map((article) => article.category)),
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.includes(searchTerm) ||
      article.excerpt.includes(searchTerm) ||
      article.author.includes(searchTerm);

    const matchesCategory =
      activeCategory === "الكل" || article.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

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
            المقالات الطبية
          </h1>
          <p className="text-lg text-black/70 max-w-3xl mx-auto">
            اكتشف أحدث المقالات والنصائح الطبية في مجال طب الأسنان لمساعدتك في
            الحفاظ على صحة فمك وأسنانك
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="w-full md:w-1/2 relative">
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-12 rounded-lg border border-[#e1e7e7] focus:ring-2 focus:ring-[#2c5364] focus:border-[#2c5364] text-right"
                dir="rtl"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2c5364] w-5 h-5" />
            </div>
            <div className="w-full md:w-auto overflow-x-auto">
              <div className="flex space-x-2 justify-end" dir="rtl">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                      activeCategory === category
                        ? "bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white"
                        : "bg-white text-black/70 hover:bg-[#e1e7e7]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                className="bg-gradient-to-r from-[#e1e7e7] to-[#e8eeef] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-56">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 text-right" dir="rtl">
                  <h3 className="text-xl font-bold text-black/80 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-black/70 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-black/60 text-sm">
                      <FaCalendarAlt className="ml-1" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center text-black/60 text-sm">
                      <FaUser className="ml-1" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <Link
                    href={`/articles/${article.id}`}
                    className="inline-block bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white py-2 px-6 rounded-lg hover:from-[#0f2027] hover:to-[#203a43] transition-all"
                  >
                    اقرأ المزيد
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-xl text-black/70">
                لا توجد مقالات تطابق بحثك. حاول بكلمات مختلفة.
              </p>
            </div>
          )}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-[#0f2027] to-[#2c5364] text-white p-8 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h2>
          <p className="text-lg mb-6">
            احصل على أحدث المقالات والنصائح الطبية مباشرة إلى بريدك الإلكتروني
          </p>
          <div className="max-w-lg mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-grow py-3 px-4 rounded-lg text-black/80 text-right"
              dir="rtl"
            />
            <button className="bg-white text-[#0f2027] py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              اشترك الآن
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArticlesPage;
