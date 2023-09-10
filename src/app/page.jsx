import Hero from "@/components/hero/Hero";
import Slide from "@/components/slide/Slide";
import Image from "next/image";
import Services from "../components/services/Services";

export default function Home() {
    return (
        <main className="">
            <Hero />
            <Slide />
            <Services />
        </main>
    );
}
