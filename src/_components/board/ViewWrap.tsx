"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import { convertToKstTime } from "@/_lib/convertToKstTime";

interface BoardData {
  title: string;
  category: string;
  createdAt: string;
  name: string;
  _id: string;
  content: string;
}

export default function ViewWrap() {
  const { id } = useParams();
  const [boardData, setBoardData] = useState<BoardData | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`/api/board/${id}`);
    const data = await res.json();
    setBoardData(data);
    console.log(data);
  };

  return (
    <>
      {boardData ? (
        <>
          <div className="flex">
            <div className="w-[50%] flex">
              <h4 className="w-[120px] p-2 border-r-1 bg-gray-100 border-[#dfdfdf] text-center">
                작성자
              </h4>
              <p className="p-2">{boardData.name}</p>
            </div>
            <div className="w-[50%] flex">
              <h4 className="w-[120px] p-2 border-l-1 border-r-1 bg-gray-100 border-[#dfdfdf] text-center">
                카테고리
              </h4>
              <p className="p-2">{boardData.category}</p>
            </div>
          </div>
          <div className="flex border-t-1 border-[#dfdfdf]">
            <h4 className="w-[120px] p-2 border-r-1 border-[#dfdfdf] bg-gray-100 text-center">
              제목
            </h4>
            <p className="p-2">{boardData.title}</p>
          </div>
          <div className="flex border-t-1 border-[#dfdfdf]">
            <div className="w-[50%] flex">
              <h4 className="w-[120px] p-2 border-r-1 border-[#dfdfdf] bg-gray-100 text-center">
                작성일
              </h4>
              <p className="p-2">{convertToKstTime(boardData.createdAt)}</p>
            </div>
          </div>
          <div className="flex border-t-1 border-[#dfdfdf] w-full">
            <h4 className="w-[120px] shrink-0 p-2 border-r-1 border-[#dfdfdf] bg-gray-100 text-center">
              내용
            </h4>
            <div className="w-full min-h-[500px]">
              <p className="p-2">{boardData.content}</p>
            </div>
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}
