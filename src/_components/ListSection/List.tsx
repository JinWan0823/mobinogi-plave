"use client";

import Link from "next/link";
import NoticeList from "./NoticeLi";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { useEffect, useState } from "react";

export interface NoticeItem {
  title: string;
  date: string;
  category: string;
  link: string;
}

export default function List() {
  const [list, setList] = useState<NoticeItem[]>([]);
  const fetchData = async () => {
    try {
      const res = await fetch(`/api/notice`);
      if (!res.ok) throw new Error("서버 응답 실패");
      const data = await res.json();
      console.log(data);
      setList(data);
    } catch (err) {
      console.error("서버 에러", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-[48%]">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold pb-2">공지사항 & 이벤트</p>
          <Link href={"/"} className="text-[#aaaaaa] flex items-center">
            전체보기 <TbArrowBigRightLinesFilled className="text-lg ml-1" />
          </Link>
        </div>
        <ul className="border-t-4 border-[#000]">
          {list.map((item, idx) => (
            <NoticeList item={item} key={idx} />
          ))}
        </ul>
      </div>
    </>
  );
}
