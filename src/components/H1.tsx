import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function H1({ children, className }: Props) {
  return (
    <h1 className={`${className} text-5xl font-semibold text-slate-700`}>
      {children}
    </h1>
  );
}
