import { motion } from "framer-motion";
import { textVariants } from "./section/Hero";

interface Props {
  children: string;
  className?: string;
}

export default function H1({ children, className }: Props) {
  const text = children.toString().split(" ");
  return (
    <p
      className={`${className}text-xs md:text-base font-normal text-slate-800 leading-4`}
    >
      {text.map((word, index) => (
        <motion.span
          variants={textVariants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: index / 10 }}
          key={index}
        >
          {word}{" "}
        </motion.span>
      ))}
    </p>
  );
}
