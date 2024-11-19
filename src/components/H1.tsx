import React from "react";
import { motion } from "framer-motion";
import { h1Variants } from "../animation/framerMotion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function H1({ children, className }: Props) {
  return (
    <motion.h1
      variants={h1Variants}
      initial="hidden"
      animate="show"
      whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
      viewport={{ once: true }}
      exit="hidden"
      className={`${className} text-5xl font-semibold text-slate-700`}
    >
      {children}
    </motion.h1>
  );
}
