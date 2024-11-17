interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

export default function Button({ children, className, onClick, type }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} px-4 py-2 bg-[#FF6464] text-white text-[20px] rounded-sm`}
    >
      {children}
    </button>
  );
}
