"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const TeamMember = ({ name, title, image, bio, socialLinks }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-[#e1e7e7] to-[#e8eeef] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-72 w-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 text-right" dir="rtl">
        <h3 className="text-2xl font-bold text-black/80 mb-1">{name}</h3>
        <p className="text-[#2c5364] font-medium mb-4">{title}</p>
        <p className="text-black/70 mb-6">{bio}</p>
        <div className="flex justify-end space-x-4">
          {socialLinks.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2c5364] hover:text-[#0f2027]"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2c5364] hover:text-[#0f2027]"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2c5364] hover:text-[#0f2027]"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "د. أحمد محمود",
      title: "أخصائي جراحة الفم والأسنان",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "خبرة أكثر من 15 عاماً في مجال طب الأسنان وجراحة الفم. حاصل على درجة الدكتوراه من جامعة القاهرة وزمالة الكلية الملكية للجراحين.",
      socialLinks: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 2,
      name: "د. سارة خالد",
      title: "أخصائية تقويم الأسنان",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "متخصصة في تقويم الأسنان للأطفال والبالغين. حاصلة على درجة الماجستير في تقويم الأسنان من جامعة عين شمس وعضو الجمعية الأمريكية لتقويم الأسنان.",
      socialLinks: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 3,
      name: "د. محمد عبدالله",
      title: "أخصائي زراعة الأسنان",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "متخصص في زراعة وتجميل الأسنان بخبرة تتجاوز 10 سنوات. حاصل على شهادات متقدمة في زراعة الأسنان من الولايات المتحدة وألمانيا.",
      socialLinks: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 4,
      name: "د. نورا سمير",
      title: "أخصائية علاج جذور الأسنان",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "متخصصة في علاج جذور الأسنان والحفاظ على الأسنان الطبيعية. حاصلة على درجة الدكتوراه في علاج جذور الأسنان من جامعة الإسكندرية.",
      socialLinks: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 5,
      name: "د. كريم فؤاد",
      title: "أخصائي طب أسنان الأطفال",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "متخصص في طب أسنان الأطفال وذوي الاحتياجات الخاصة. حاصل على شهادات متخصصة في التعامل مع الأطفال وعلاج مشاكل الأسنان اللبنية.",
      socialLinks: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 6,
      name: "د. هدى الشريف",
      title: "أخصائية تجميل الأسنان",
      image:
        "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=1641&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "متخصصة في تجميل الأسنان والابتسامة. حاصلة على شهادات متخصصة في قشور الأسنان وتبييض الأسنان من أكاديمية طب الأسنان التجميلي الأمريكية.",
      socialLinks: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
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
            فريقنا الطبي
          </h1>
          <p className="text-lg text-black/70 max-w-3xl mx-auto">
            نفخر بفريقنا الطبي المتميز من الأطباء والمتخصصين الذين يجمعون بين
            الخبرة العلمية والمهارة العملية لتقديم أفضل رعاية لأسنانك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
