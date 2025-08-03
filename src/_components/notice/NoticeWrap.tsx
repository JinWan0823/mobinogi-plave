"use client";

import LoadingSpinner from "../common/LoadingSpinner";
import CategoryOpt from "../manager/CategoryOpt";
import { MdOutlineSearch } from "react-icons/md";
import BoardList from "../board/BoardList";
import Pagination from "../board/Pagination";
import useNoticeList from "@/_hooks/useNoticeList";
import WriteBtn from "../board/WriteBtn";
import { useSession } from "next-auth/react";

export default function NoticeWrap() {
  const {
    boardList,
    loading,
    pageNum,
    setPageNum,
    handlePageNum,
    listCount,
    selectedClasses,
    setSelectedClasses,
    boardCategory,
    searchText,
    setSearhText,
    handleSearchSubmit,
    setSearchQuery,
    setUpdateData,
  } = useNoticeList();

  const { data: session } = useSession();

  return (
    <>
      <div className="flex items-end justify-between mb-2">
        <div className="flex items-center gap-1">
          <div className="w-[220px]">
            <CategoryOpt
              selectedClasses={selectedClasses}
              setSelectedClasses={setSelectedClasses}
              categoryList={boardCategory}
              setPageNum={setPageNum}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              className="w-[400px] p-2
              border border-[#dfdfdf] rounded-lg
              relative"
              placeholder="제목또는 작성자를 검색해주세요."
              value={searchText}
              onChange={(e) => setSearhText(e.target.value)}
            />
            <button
              type="submit"
              className="text-2xl text-point bg-[#fff]
              absolute top-1/2 -translate-y-1/2 right-2
            "
            >
              <MdOutlineSearch />
            </button>
          </form>
        </div>
        <div className="flex items-end gap-1">
          <p className="text-sm text-[#aaaaaa] text-right p-1">
            총 게시글 : {listCount}
          </p>
          {session?.user && <WriteBtn type="notice" />}
        </div>
      </div>
      <div
        className="rounded-xl shadow-xl
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
              {session?.user && <div className="w-[36px]"></div>}
            </div>
          </li>
          {!loading ? (
            boardList.map((item, idx) => (
              <BoardList
                key={idx}
                item={item}
                user={session?.user}
                setUpdateData={setUpdateData}
              />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </ul>
      </div>
      <Pagination
        handlePageNum={handlePageNum}
        pageNum={pageNum}
        listCount={listCount}
      />
    </>
  );
}
