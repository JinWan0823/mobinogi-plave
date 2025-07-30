"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import { convertToKstTime } from "@/_lib/convertToKstTime";
import DeleteBtn from "./DeleteBtn";
import Link from "next/link";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import PostNavigator from "./PostNavigator";

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
      {boardData && <DeleteBtn name={boardData.name} id={boardData._id} />}
      <div className="w-full">
        {boardData ? (
          <>
            <h1 className="font-bold text-4xl">{boardData.title}</h1>
            <div
              className="overview mt-2 pb-4
              flex items-center justify-between 
              border-b-1 border-[#aaaaaa]"
            >
              <div className="lf-box text-lg flex items-center">
                <span className="w-[80px] h-[3px] bg-[#000] mr-2" />
                <p>
                  <span className="font-bold mr-2">CATEGORY</span>
                  {boardData.category}
                </p>
              </div>
              <div className="rf-box flex itesm-center gap-1 text-sm text-[#aaaaaa]">
                <span>작성일</span>|
                <span>{convertToKstTime(boardData.createdAt)}</span>|
                <span>{boardData.name}</span>
              </div>
            </div>

            <div className="content-box pt-[90px] pb-[120px] text-center">
              <p>{boardData.content}</p>
            </div>

            <PostNavigator />
          </>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
}
