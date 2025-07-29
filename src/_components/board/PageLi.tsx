interface PageProps {
  pageNum: number;
  handlePageNum: (idx: number) => void;
  item: number;
}

export default function PageLi({ handlePageNum, pageNum, item }: PageProps) {
  return (
    <li
      className={`w-[20px] h-[20px]
      rounded text-white cursor-pointer
      flex items-center justify-center
      ${pageNum === item ? "bg-point" : "bg-gray-400"}`}
      onClick={() => handlePageNum(item)}
    >
      {item}
    </li>
  );
}
