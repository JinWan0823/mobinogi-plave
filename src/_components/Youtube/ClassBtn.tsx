interface BtnProps {
  item: string;
  isActive: boolean;
  onClick: () => void;
}

export default function ClassBtn({ item, isActive, onClick }: BtnProps) {
  return (
    <li
      className={`
        py-2 px-6 rounded-[16px]
        text-lg font-bold border-2
        cursor-pointer
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
