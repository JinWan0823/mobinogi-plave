"use client";

import CategoryOpt from "@/_components/manager/CategoryOpt";
import { useState } from "react";
import NoticeCheck from "./NoticeCheck";
import { useRouter } from "next/navigation";
import { useAlert } from "@/_context/AlertProvider";
import useAuthRedirect from "@/_hooks/useAuthRedirect";

export default function YoutubeForm() {
  const [selectedClasses, setSelectedClasses] = useState("꿀팁");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [title, setTitle] = useState("");
  const [noticeChk, setNoticeChk] = useState(false);

  const router = useRouter();
  const { showAlert } = useAlert();

  const status = useAuthRedirect(); // 로그인 상태 감시 및 리디렉션

  if (status === "loading") return null;

  const handleSumit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      title: title,
      youtubeLink: youtubeLink,
      category: selectedClasses,
      noticeChk: noticeChk,
    };

    if (!data.title || !data.youtubeLink || !data.category) {
      showAlert("필수 입력란을 확인해주세요.");
      return;
    }

    try {
      const res = await fetch("/api/guide", {
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
      router.push("/guide/list");
    } catch (err) {
      console.error("유튜브 영상 등록 실패", err);
    }
  };

  return (
    <div
      className="mt-4 p-4
      rounded-xl shadow-xl border-1 border-[#dfdfdf]"
    >
      <form onSubmit={handleSumit}>
        <div>
          <label htmlFor="title-input" className="block">
            영상 제목 <span className="text-red-500">*</span>
          </label>
          <input
            id="title-input"
            type="text"
            className="p-2 mt-1 w-full
            border-1 border-[#dfdfdf] rounded-lg
            outline-[#ff69b4]"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="link-input" className="block">
            유튜브 링크 <span className="text-red-500">*</span>
          </label>
          <input
            id="link-input"
            type="text"
            className="p-2 mt-1 w-full
            border-1 border-[#dfdfdf] rounded-lg
            outline-[#ff69b4]"
            placeholder="ex) https://www.youtube.com/watch?v=Lwy-4UeyFmw "
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="mb-1">
            카테고리 <span className="text-red-500">*</span>
          </p>
          <CategoryOpt
            selectedClasses={selectedClasses}
            setSelectedClasses={setSelectedClasses}
          />
        </div>

        <NoticeCheck title="중요 동영상 등록하기" setNoticeChk={setNoticeChk} />

        <button
          type="submit"
          className="w-[140px] py-2 mt-8
          rounded-lg bg-point
          font-bold text-white"
        >
          저장하기
        </button>
      </form>
    </div>
  );
}
