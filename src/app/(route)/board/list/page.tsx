"use client";

import BoardList from "@/_components/board/BoardList";
import SubBanner from "@/_components/board/SubBanner";
import TabMenu from "@/_components/board/TabMenu";
import useBoardList from "@/_hooks/useBoardList";

export default function BoardListPage() {
  const { boardList } = useBoardList();
  return (
    <div>
      <SubBanner />
      <div
        className="menu-tab w-full
        bg-[#fff] shadow-xl"
      >
        <TabMenu />
      </div>
      <section className="py-12">
        <div
          className="w-[1140px] mx-auto mt-4
          overflow-hidden rounded-xl shadow-xl
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
            {boardList.map((item, idx) => (
              <BoardList key={idx} item={item} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
