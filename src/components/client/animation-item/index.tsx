"use client";
import { motion } from "framer-motion";

export const AnimationDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | undefined;
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
