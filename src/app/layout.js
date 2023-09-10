import Footer from "@/components/footer/Footer";
import "./globals.css";
import { Tajawal } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

const tajawal = Tajawal({
    subsets: ["arabic"],
    weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata = {
    title: "NOKHBA",
    onpagehide: {
        images: "../../public/logo.png",
    },
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${tajawal.className} bg-gradient-to-r from-[#e8eeef] to-white`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
