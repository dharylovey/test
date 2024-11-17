interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${className} px-4 py-2 bg-[#FF6464] text-white text-[20px] rounded-sm`}
    >
      {children}
    </button>
  );
}
