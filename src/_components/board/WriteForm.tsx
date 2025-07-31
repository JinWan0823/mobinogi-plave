"use client";

import Input from "@/_components/board/Input";
import CategoryOpt from "@/_components/manager/CategoryOpt";
import { useAlert } from "@/_context/AlertProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const boardCategory = ["자유게시글", "질문", "버스요청"];
export default function WriteForm() {
  const [selectedClasses, setSelectedClasses] = useState("카테고리 선택");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();
  const { showAlert } = useAlert();

  const handleSubmitBoard = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name: name,
      password: password,
      title: title,
      content: content,
      category: selectedClasses,
    };
    if (!data.title || !data.name || !data.password) {
      showAlert("필수 입력란을 확인해주세요.");
      return;
    }
    try {
      const res = await fetch("/api/board", {
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
      showAlert("게시글을 등록하였습니다.");
      router.push("/board/list");
    } catch (error) {
      console.error("자유게시판 글 등록 실패", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmitBoard}
      className="w-full h-full p-4 mx-auto
            border-2 border-[#dfdfdf]"
    >
      <div className="mb-2 flex gap-2">
        <Input type="text" value={name} onChange={setName} />
        <Input type="password" value={password} onChange={setPassword} />
      </div>
      <input
        type="text"
        className="w-full p-2 bg-[#fff] border-1 border-[#dfdfdf] rounded-lg"
        placeholder="제목을 입력해주세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="mt-2 bg-[#fff]">
        <CategoryOpt
          selectedClasses={selectedClasses}
          setSelectedClasses={setSelectedClasses}
          categoryList={boardCategory}
        />
      </div>

      <textarea
        className="w-full min-h-[400px] p-2 mt-4
        border-[#dfdfdf] border-1 rounded-lg bg-[#fff]"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <button
        type="submit"
        className="w-[160px] py-2 bg-[#333] rounded text-white font-bold mt-4"
      >
        작성하기
      </button>
    </form>
  );
}
