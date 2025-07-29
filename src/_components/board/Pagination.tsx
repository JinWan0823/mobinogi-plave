import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import PageLi from "./PageLi";
import { useAlert } from "@/_context/AlertProvider";

interface PageProps {
  pageNum: number;
  handlePageNum: (idx: number) => void;
  listCount: number;
}

export default function Pagination({
  handlePageNum,
  pageNum,
  listCount,
}: PageProps) {
  const totalPage = Math.ceil((listCount || 0) / 10);
  const maxVisiblePages = 5;

  const groupStart =
    Math.floor((pageNum - 1) / maxVisiblePages) * maxVisiblePages + 1;
  const groupEnd = Math.min(groupStart + maxVisiblePages - 1, totalPage);

  const arr = Array.from(
    { length: groupEnd - groupStart + 1 },
    (_, i) => groupStart + i
  );

  const { showAlert } = useAlert();

  return (
    <div className="flex items-center justify-center gap-1 mt-4">
      <button
        className="w-[20px] h-[20px] rounded bg-point text-white flex items-center justify-center"
        onClick={() => {
          if (pageNum > 1) {
            handlePageNum(pageNum - 1);
          } else {
            showAlert("첫번째 페이지입니다.");
          }
        }}
      >
        <FaAngleLeft />
      </button>

      <ul className="flex items-center justify-center gap-1">
        {arr.map((item) => (
          <PageLi
            key={item}
            item={item}
            pageNum={pageNum}
            handlePageNum={handlePageNum}
          />
        ))}
      </ul>

      <button
        className="w-[20px] h-[20px] rounded bg-point text-white flex items-center justify-center"
        onClick={() => {
          if (pageNum < totalPage) {
            handlePageNum(pageNum + 1);
          } else {
            showAlert("마지막 페이지입니다.");
          }
        }}
      >
        <FaAngleRight />
      </button>
    </div>
  );
}
