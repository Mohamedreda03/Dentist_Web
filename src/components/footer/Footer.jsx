import React from "react";

import Wrapper from "../wrapper/Wrapper";
import Links from "../linksFooter/Links";

const Footer = () => {
    return (
        <footer
            className="bg-[#e8eeef] text-white pt-14 pb-3 mt-[100px]"
            lang="ar"
            dir="rtl">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* LOGO */}
                    <div className="flex flex-col gap-3 shrink-0">
                        <img src="/logo.png" alt="fas" className="w-[80px]" />
                        <p className="w-[200px] text-black">
                            مركز النخبة لطب وتقويم الأسنان هو مركز رائد في مجال
                            الرعاية الصحية الفموية والأسنان.
                        </p>
                    </div>
                    {/* LOGO END */}
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0 text-black">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            Find a store
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            become a partner
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            sign up for email
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            send us feedback
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            student discount
                        </div>
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0 text-black">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-md">
                                get help
                            </div>
                            <div className="text-[15px] font-medium text-black/[0.8] hover:text-black cursor-pointer">
                                Order Status
                            </div>
                            <div className="text-[15px] font-medium text-black/[0.8] hover:text-black cursor-pointer">
                                Delivery
                            </div>
                            <div className="text-[15px] font-medium text-black/[0.8] hover:text-black cursor-pointer">
                                Returns
                            </div>
                            <div className="text-[15px] font-medium text-black/[0.8] hover:text-black cursor-pointer">
                                Payment Options
                            </div>
                            <div className="text-[15px] font-medium text-black/[0.8] hover:text-black cursor-pointer">
                                Contact Us
                            </div>
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            <div className="font-oswald font-medium uppercase text-md">
                                About nike
                            </div>
                            <div className="text-[15px] font-medium text-black/[0.8] hover:text-black cursor-pointer">
                                News
                            </div>
                            <div className="text-[15px] font-medium text-black/[0.8] hover:text-black cursor-pointer">
                                Careers
                            </div>
                            <div className="text-[15px] font-medium text-black/[0.8] hover:text-black cursor-pointer">
                                Investors
                            </div>
                            <div className="text-[15px] font-medium text-black/[0.8] hover:text-black cursor-pointer">
                                Sustainability
                            </div>
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <Links />
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-black/[0.8] hover:text-black cursor-pointer text-center md:text-left">
                    © 2023 Nike, Inc. All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[15px] font-medium text-black/[0.8] hover:text-black cursor-pointer">
                        Guides
                    </div>
                    <div className="text-[15px] font-medium text-black/[0.8] hover:text-black cursor-pointer">
                        Terms of Sale
                    </div>
                    <div className="text-[15px] font-medium text-black/[0.8] hover:text-black cursor-pointer">
                        Terms of Use
                    </div>
                    <div className="text-[15px] font-medium text-black/[0.8] hover:text-black cursor-pointer">
                        Privacy Policy
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;
