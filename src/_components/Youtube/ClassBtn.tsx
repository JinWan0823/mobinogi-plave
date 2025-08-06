interface BtnProps {
  item: string;
  isActive: boolean;
  onClick: () => void;
}

export default function ClassBtn({ item, isActive, onClick }: BtnProps) {
  return (
    <li
      className={`
        py-1 px-3 rounded-[16px]
        font-bold border-2
        cursor-pointer
        md:text-lg md:py-2 md:px-6
        ${
          isActive
            ? "bg-white text-[#000] border-point"
            : "bg-[#d5d5d5] text-[#aaaaaa] border-[#d5d5d5]"
        }
      `}
      onClick={onClick}
    >
      <span>{item}</span>
    </li>
  );
}
