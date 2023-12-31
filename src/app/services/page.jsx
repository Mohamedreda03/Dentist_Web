"use client";

import React from "react";
import ServicesPageComp from "../../components/servicesPageComp/ServicesPageComp";

const data = [
  {
    id: 1,
    linkId: "one",
    img: "/serv-1.jpg",
    head: "تجميل الاسنان",
    desc: `يهدف تبييض الأسنان إلى تبييض الطبقة الخارجية للأسنان
                            ،وهي تسمي مينا الأسنان. وهو إجراء غير جراحي يعمل علي
                            إعادة الأسنان إلي لونها الطبيعي من خلال إزالة
                            الصبغات الناتجة عن إصفرار الأسنان ويعتبر أقل تكلفة
                            من أي نوع أخر من العلاج التجميلي. من خلال تبييض
                            الأسنان في مراكز شايني وايت، تتخلص من تصبغ وبقع
                            الأسنان وتحصل علي شكل جمالي طبيعي
                            لإبتسامتك في خلال ساعات.`,
  },
  {
    id: 2,
    linkId: "two",
    img: "/serv-2.jpg",
    head: "زراعة الأسنان",
    desc: `هي الحل الأمثل للحصول علي أسنان طبيعة وأسترجاع مظهر ابتسامتك وطريقة نطقك السليمة وسهولة الأكل والمضغ، وتعد زراعة الاسنان هي التطور الأكبر لطب الأسنان، لأنها عالجت مشكلة فقدان الأسنان بشكل فعال ومضمون، وذلك من خلال زراعة أسنان تُحل مكان الأسنان القديمة، وتٌصنع زرعات الأسنان من مادة التاتينيوم التي تٌحفز الزرعة في العظم دون الشعور أنها جسم غريب.`,
  },
  {
    id: 3,
    linkId: "three",
    img: "/serv-3.jpg",
    head: "التركيبات الثابتة",
    desc: `يُطلق البعض على زراعة الأسنان أنها السِحر الخاص بعالم طب الأسنان، وذلك لما هنالك من مميزات وفوائد جمّة تقدمها الزراعة، ولكن ماذا عن زراعة الفك العلوي بالتحديد؟
`,
  },
  {
    id: 4,
    linkId: "four",
    img: "/serv-4.jpg",
    head: "طب أسنان الأطفال",
    desc: `هل تعانون من مشكلة اصفرار الاسنان؟ هل تزعجكم التغيرات الواضحة في لون أسنانكم عن الطبيعي؟ هل تبحثون عن طرق لعلاج تصبغات الاسنان والتخلص منها؟`,
  },
  {
    id: 5,
    linkId: "five",
    img: "/serv-5.jpg",
    head: "تقويم الاسنان",
    desc: `التقويم يعمل علي تحريك الأسنان من مكانها بشكل تدريجي لتصبح الأسنان متناسقة ومستقيمة وصحية، والجدير بالذكر أن تقويم الاسنان لجميع الأعمار ليس فقط الأطفال كما هو شائع.`,
  },
  {
    id: 6,
    linkId: "six",
    img: "/serv-6.jpg",
    head: "علاج الجذور",
    desc: `وهي طريقة علاجية تهدف إلي تنظيف الأسنان من التسوس والبكتيريا وإصلاح السن الذي تعرض للتلف أو تلوث بدلاً من إزالته، ويحدث التلف نتيجة تأكل السن لكثرة التسوس الذي يخترق طبقات السن الداخلية ويصل إلي اللب “وهي الطبقة الداخلية التي تجتمع بها الأعصاب والأوعية الدموية” وعلاج قناة الجذر هي الطريقة الوحيدة لعلاج هذة الحالة قبل التهاب السن وتضرر الأنسجة العظمية.`,
  },
];

const page = () => {
  return (
    <div className="max-w-[1380px] mx-auto px-[20px] lg:px-[30px] flex flex-col gap-[30px]">
      <h2 className="flex justify-center font-extrabold text-[60px] text-black/80 my-[50px]">
        الخدمات
      </h2>
      <div className="flex flex-col gap-[80px]" lang="ar" dir="rtl">
        {data.map((item) => {
          return <ServicesPageComp key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default page;
