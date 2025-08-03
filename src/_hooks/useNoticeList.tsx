"use client";

import { useAlert } from "@/_context/AlertProvider";
import { useEffect, useState } from "react";

export default function useNoticeList() {
  const [boardList, setBoardList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [pageNum, setPageNum] = useState(1);
  const [listCount, setListCount] = useState(0);

  const [selectedClasses, setSelectedClasses] = useState("전체");
  const boardCategory = ["전체", "업데이트", "이벤트", "투표일정", "에린노트"];

  const [searchText, setSearhText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [updateData, setUpdateData] = useState(false);

  const { showAlert } = useAlert();

  const fetchData = async () => {
    try {
      const searchParam = searchQuery
        ? `/api/notice?page=${pageNum}&category=${selectedClasses}&search=${searchQuery}`
        : `/api/notice?page=${pageNum}&category=${selectedClasses}`;

      const res = await fetch(searchParam);
      if (!res.ok) {
        if (res.status === 404) {
          showAlert("공지사항이 존재하지 않습니다.");
          return;
        }
        throw new Error("서버 응답 실패");
      }
      const data = await res.json();
      setBoardList(data.board);
      setListCount(data.totalCount);
      setLoading(false);
      setSearhText("");
    } catch (error) {
      console.error("공지사항 리스트 로딩 실패", error);
    }
  };

  const handlePageNum = (idx: number) => {
    setPageNum(idx);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPageNum(1);
    setSearchQuery(searchText);
  };

  useEffect(() => {
    fetchData();
  }, [pageNum, selectedClasses, searchQuery, updateData]);

  return {
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
  };
}
