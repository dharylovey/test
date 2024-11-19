import H2 from "./H2";
import Paragraph from "./Paragraph";

interface Props {
  title: string;
  date: string;
  children: string;
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
        <div className="flex justify-start gap-6">
          <Paragraph>{date}</Paragraph>|<Paragraph>{platform}</Paragraph>
        </div>
      </div>
      <Paragraph className="pt-4">{children}</Paragraph>
    </div>
  );
}
