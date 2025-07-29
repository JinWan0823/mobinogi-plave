"use client";

import useBoardList from "@/_hooks/useBoardList";
import LoadingSpinner from "../common/LoadingSpinner";
import BoardList from "./BoardList";
import Pagination from "./Pagination";

export default function ListWrap() {
  const { boardList, loading, pageNum, handlePageNum } = useBoardList();
  return (
    <>
      <div
        className="overflow-hidden rounded-xl shadow-xl
        border-1 border-[#dfdfdf]"
      >
        <ul>
          <li className="flex justify-between items-center p-4 py-2 border-b border-[#dfdfdf]">
            <div className="w-[140px] flex justify-center">
              <span>카테고리</span>
            </div>
            <div className="flex-1 w-full overflow-hidden">
              <h4 className="px-2">제목</h4>
            </div>

            <div className="flex items-center gap-2 text-center">
              <span className="text-sm text-gray-600 w-[100px] ">작성자</span>
              <span className="text-sm text-gray-600 w-[100px]">날짜</span>
            </div>
          </li>
          {!loading ? (
            boardList.map((item, idx) => <BoardList key={idx} item={item} />)
          ) : (
            <LoadingSpinner />
          )}
        </ul>
      </div>
      <Pagination handlePageNum={handlePageNum} pageNum={pageNum} />
    </>
  );
}
