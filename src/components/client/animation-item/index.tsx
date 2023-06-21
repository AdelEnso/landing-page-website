"use client";
import { motion } from "framer-motion";

export const AnimationDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      {children}
    </motion.section>
  );
};
