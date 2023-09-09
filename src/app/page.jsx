import Hero from "@/components/hero/Hero";
import Slide from "@/components/slide/Slide";
import Image from "next/image";
import Services from "../components/services/Services";

export default function Home() {
    return (
        <main className="">
            <nav className="w-full h-[110px] bg-white text-black text-[30px]"></nav>
            <Hero />
            <Slide />
            <Services />
        </main>
    );
}
