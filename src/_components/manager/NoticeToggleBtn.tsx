"use client";
import { useState } from "react";
import { BsFillMegaphoneFill } from "react-icons/bs";

export default function NoticeToggleBtn({
  noticeBoolean,
  listId,
}: {
  noticeBoolean: boolean;
  listId: string;
}) {
  const [notice, setNotice] = useState<boolean>(noticeBoolean);

  const handleUpdateNotice = async () => {
    try {
      const res = await fetch("/api/guide", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: listId,
          notice: !notice,
        }),
      });
      if (!res.ok) throw new Error("서버 응답 실패");
      setNotice((prev) => !prev);
    } catch (error) {
      console.error("유튜브 리스트 수정 실패", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleUpdateNotice}
      className={`flex justify-end items-center gap-1 
            p-1 rounded-lg
            ${notice ? "bg-green-600" : "bg-gray-400"}
            `}
    >
      <BsFillMegaphoneFill />
      {notice ? "고정 ON" : "고정 OFF"}
    </button>
  );
}
