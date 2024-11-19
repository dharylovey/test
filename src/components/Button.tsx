import { motion } from "framer-motion";
import { buttonVarriants } from "../animation/framerMotion";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

export default function Button({ children, className, onClick, type }: Props) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${className} px-4 py-2 bg-[#FF6464] text-white text-[20px] rounded-sm`}
      variants={buttonVarriants}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.0, transition: { duration: 0.5 }, y: -5 }}
      whileTap={{ scale: 0.9 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.button>
  );
}
