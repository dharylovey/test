import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function H3({ children, className }: Props) {
  return (
    <h1
      className={`${className} text-[22px] leading-[60px] font-normal text-[#21243D]`}
    >
      {children}
    </h1>
  );
}
