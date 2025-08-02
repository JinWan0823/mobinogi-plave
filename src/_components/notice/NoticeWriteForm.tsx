"use client";

import CategoryOpt from "@/_components/manager/CategoryOpt";
import { useAlert } from "@/_context/AlertProvider";
import useAuthRedirect from "@/_hooks/useAuthRedirect";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NoticeCheck from "../manager/NoticeCheck";

export const boardCategory = ["투표일정", "업데이트", "이벤트", "에린노트"];
export default function NoticeWriteForm() {
  const [selectedClasses, setSelectedClasses] = useState("카테고리 선택");
  const [title, setTitle] = useState("");
  const [noticeLink, setNoticeLink] = useState("");
  const [noticeChk, setNoticeChk] = useState(false);

  const router = useRouter();
  const { showAlert } = useAlert();

  const status = useAuthRedirect(); // 로그인 상태 감시 및 리디렉션
  console.log(status);
  if (status === "loading") return null;

  const handleSubmitBoard = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      title: title,
      category: selectedClasses,
      noticeLink: noticeLink,
      noticeChk: noticeChk,
    };
    if (!data.title || selectedClasses === "카테고리 선택") {
      showAlert("필수 입력란을 확인해주세요.");
      return;
    }
    try {
      const res = await fetch("/api/notice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        showAlert("필수 입력란을 확인해주세요.");
        return;
      }
      console.log(res.json());
      showAlert("공지사항 등록 성공!");
      router.push("/notice/list");
    } catch (error) {
      console.error("공지사항 등록 실패", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmitBoard}
      className="w-full h-full p-2 mx-auto
            border-2 border-[#dfdfdf]"
    >
      <div className="bg-[#fff]">
        <CategoryOpt
          selectedClasses={selectedClasses}
          setSelectedClasses={setSelectedClasses}
          categoryList={boardCategory}
        />
      </div>
      <input
        type="text"
        className="w-full mt-2 p-2 bg-[#fff] 
        border-1 border-[#dfdfdf] rounded-lg"
        placeholder="제목을 입력해주세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        className="w-full mt-2 p-2 bg-[#fff] 
        border-1 border-[#dfdfdf] rounded-lg"
        placeholder="링크를 입력해주세요."
        value={noticeLink}
        onChange={(e) => setNoticeLink(e.target.value)}
      />
      <NoticeCheck title="중요 공지 등록" setNoticeChk={setNoticeChk} />
      <button
        type="submit"
        className="w-[160px] py-2 bg-[#333] rounded text-white font-bold mt-4"
      >
        작성하기
      </button>
    </form>
  );
}
