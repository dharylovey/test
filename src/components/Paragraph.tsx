import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function H1({ children, className }: Props) {
  return (
    <p
      className={`${className}text-xs md:text-base font-normal text-slate-800 leading-4`}
    >
      {children}
    </p>
  );
}
