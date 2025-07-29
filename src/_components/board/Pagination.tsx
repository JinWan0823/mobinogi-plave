import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import PageLi from "./PageLi";

interface PageProps {
  pageNum: number;
  handlePageNum: (idx: number) => void;
}

const arr = [1, 2, 3, 4, 5];

export default function Pagination({ handlePageNum, pageNum }: PageProps) {
  return (
    <>
      <div className="flex items-center justify-center gap-1 mt-4">
        <button
          className="w-[20px] h-[20px]
          rounded bg-point text-white
          flex items-center justify-center"
        >
          <FaAngleLeft />
        </button>
        <ul className="flex items-center justify-center gap-1">
          {arr.map((item, idx) => (
            <PageLi
              key={idx}
              idx={idx}
              pageNum={pageNum}
              handlePageNum={handlePageNum}
            />
          ))}
        </ul>

        <button
          className="w-[20px] h-[20px]
          rounded bg-point text-white
          flex items-center justify-center"
        >
          <FaAngleRight />
        </button>
      </div>
    </>
  );
}
