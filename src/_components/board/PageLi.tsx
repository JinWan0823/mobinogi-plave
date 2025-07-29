interface PageProps {
  pageNum: number;
  handlePageNum: (idx: number) => void;
  idx: number;
}

export default function PageLi({ handlePageNum, pageNum, idx }: PageProps) {
  return (
    <li
      className={`w-[20px] h-[20px]
      rounded text-white cursor-pointer
      flex items-center justify-center
      ${pageNum - 1 === idx ? "bg-point" : "bg-gray-400"}`}
      onClick={() => handlePageNum(idx + 1)}
    >
      {idx + 1}
    </li>
  );
}
