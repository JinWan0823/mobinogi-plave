"use client";

import { useEffect, useState } from "react";

export default function useBoardList() {
  const [boardList, setBoardList] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/board");
      if (!res.ok) throw new Error("서버 응답 실패");
      const data = await res.json();
      setBoardList(data);
    } catch (error) {
      console.error("게시판 리스트 로딩 실패", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    boardList,
  };
}
