"use client";

import { useEffect, useState } from "react";

export default function useBoardList() {
  const [boardList, setBoardList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [pageNum, setPageNum] = useState(1);
  const [listCount, setListCount] = useState(0);

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/board?page=${pageNum}`);
      if (!res.ok) throw new Error("서버 응답 실패");
      const data = await res.json();
      setBoardList(data.board);
      setListCount(data.totalCount);
      setLoading(false);
    } catch (error) {
      console.error("게시판 리스트 로딩 실패", error);
    }
  };

  const handlePageNum = (idx: number) => {
    setPageNum(idx);
  };

  useEffect(() => {
    fetchData();
  }, [pageNum]);

  return {
    boardList,
    loading,
    pageNum,
    handlePageNum,
    listCount,
  };
}
