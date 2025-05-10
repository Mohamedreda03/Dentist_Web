import Hero from "@/components/hero/Hero";
import Slide from "@/components/slide/Slide";
import Image from "next/image";
import Services from "../components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";
import ContactSection from "@/components/contact/ContactSection";
import LatestArticles from "@/components/articles/LatestArticles";
import Offers from "@/components/offers/Offers";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Slide />
      <Services />
      <Offers />
      <WhyChooseUs />
      <Testimonials />
      <LatestArticles />
      <ContactSection />
    </main>
  );
}
