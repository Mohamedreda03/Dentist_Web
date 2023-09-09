"use client";
import React from "react";
import styles from "./hero.module.css";
import { josefin_Sans } from "../../fonts";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_container}>
                <motion.h1
                    className={`${styles.hero_text} ${josefin_Sans.className}`}
                    initial={{ x: "-1200px" }}
                    animate={{ x: "0%" }}>
                    keep <br /> calm <br /> and <br /> smile
                </motion.h1>
            </div>
        </div>
    );
};

export default Hero;
