"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaFacebookMessenger } from "react-icons/fa";

const Links = () => {
    return (
        <div className="flex gap-4 justify-center md:justify-start">
            <div
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/[0.5] cursor-pointer"
                onClick={() =>
                    window.open(
                        "https://www.facebook.com/alnokhbadental/",
                        "_blank"
                    )
                }>
                <FaFacebookF size={20} />
            </div>
            <div
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/[0.5] cursor-pointer"
                onClick={() => window.open("https://twitter.com", "_blank")}>
                <FaFacebookMessenger size={20} />
            </div>
        </div>
    );
};

export default Links;
