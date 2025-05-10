import Image from "next/image";
import Link from "next/link";

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      title: "كيف تحافظ على صحة أسنانك",
      excerpt: "نصائح مهمة للعناية اليومية بصحة الفم والأسنان",
      image: "/articles/dental-care.jpg",
      date: "15 مارس 2024",
      category: "صحة الأسنان",
    },
    {
      id: 2,
      title: "أهمية تنظيف الأسنان المنتظم",
      excerpt: "لماذا يجب عليك زيارة طبيب الأسنان كل 6 أشهر",
      image: "/articles/cleaning.jpg",
      date: "10 مارس 2024",
      category: "نصائح طبية",
    },
    {
      id: 3,
      title: "تقويم الأسنان: كل ما تحتاج معرفته",
      excerpt: "دليلك الشامل لمعرفة أنواع تقويم الأسنان وأهميتها",
      image: "/articles/braces.jpg",
      date: "5 مارس 2024",
      category: "تقويم الأسنان",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#e8eeef] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black/80 mb-4">
            أحدث المقالات
          </h2>
          <p className="text-lg text-black/70">
            اكتشف أحدث المعلومات والنصائح في مجال طب الأسنان
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-gradient-to-r from-[#e1e7e7] to-[#e8eeef] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#2c5364] font-semibold">
                    {article.category}
                  </span>
                  <span className="text-sm text-black/60">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-black/80 mb-2">
                  {article.title}
                </h3>
                <p className="text-black/70 mb-4">{article.excerpt}</p>
                <Link
                  href={`/articles/${article.id}`}
                  className="text-[#2c5364] font-semibold hover:text-[#203a43] transition-colors"
                >
                  اقرأ المزيد
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
