import { Anton, Lobster, Josefin_Sans, Kufam, Tajawal } from "next/font/google";

export const anton = Anton({ subsets: ["latin"], weight: ["400"] });
export const lobster = Lobster({ subsets: ["latin"], weight: ["400"] });
export const josefin_Sans = Josefin_Sans({
    subsets: ["latin"],
    weight: ["700"],
});
export const kufam = Kufam({
    subsets: ["arabic"],
    weight: ["400", "500", "600", "700", "800", "900"],
});
export const tajawal = Tajawal({
    subsets: ["arabic"],
    weight: ["200", "300", "400", "500", "700", "800", "900"],
});
