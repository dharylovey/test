import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function H1({ children, className }: Props) {
  return (
    <h1 className={`${className} text-3xl font-semibold text-slate-600`}>
      {children}
    </h1>
  );
}
