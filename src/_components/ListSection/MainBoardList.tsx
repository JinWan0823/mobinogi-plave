"use client";

import Link from "next/link";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import MainBoardLi from "./MainBoardLi";

export default function MainBoardList() {
  const [list, setList] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(`/api/board`);
      if (!res.ok) throw new Error("서버 응답 실패");
      const data = await res.json();

      setList(data.board.slice(0, 5));
    } catch (err) {
      console.error("서버 에러", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full md:w-[48%] mt-8 md:mt-0">
        <div className="flex items-center justify-between">
          <p className="text-2xl md:text-3xl font-bold pb-2">자유게시판</p>
          <Link
            href={"/board/list"}
            className="text-[#aaaaaa] flex items-center"
          >
            전체보기 <TbArrowBigRightLinesFilled className="text-lg ml-1" />
          </Link>
        </div>
        <ul className="border-t-4 border-[#000]">
          {list.map((item, idx) => (
            <MainBoardLi item={item} key={idx} />
          ))}
        </ul>
      </div>
    </>
  );
}
