interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: Props) {
  return (
    <button
      className={`${className} px-4 py-2 bg-[#FF6464] text-white text-[20px] rounded-sm`}
    >
      {children}
    </button>
  );
}
