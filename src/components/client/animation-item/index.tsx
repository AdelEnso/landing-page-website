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
      initial={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 1 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
