import React from "react";
import H2 from "./H2";
import Paragraph from "./Paragraph";

interface Props {
  title: string;
  date: string;
  children: React.ReactNode;
  platform: string;
  className?: string;
}
export default function Card({
  title,
  date,
  children,
  platform,
  className,
}: Props) {
  return (
    <div
      className={`bg-white p-4 border-slate-300 rounded-md shadow-md ${className}`}
    >
      <div className="spacey-y-2">
        <div className="py-2">
          <H2>{title}</H2>
        </div>
        <div className="flex justify-between">
          <Paragraph>{date}</Paragraph>
          <Paragraph>{platform}</Paragraph>
        </div>
      </div>
      <div className="pt-4">{children}</div>
    </div>
  );
}
