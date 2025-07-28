"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

export default function DeleteBtn({ name, id }: { name: string; id: string }) {
  const [openForm, setOpenForm] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleDeleteBtn = () => {
    setOpenForm(true);
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name: name,
      _id: id,
      password: password,
    };

    const res = await fetch("/api/board", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      alert(errorData.message);
      setPassword("");
      setOpenForm(false);
      return;
    }

    alert("삭제를 완료했습니다.");
    router.push("/board/list");
  };

  return (
    <>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleDeleteBtn}
          className="p-1 mb-2 bg-red-400
          text-white text-sm
          flex items-center justify-center gap-1
          rounded"
        >
          <MdDelete />
          삭제
        </button>
      </div>
      {openForm && (
        <div
          className="fixed inset-0 bg-[#333333d6] z-9999
          flex items-center justify-center"
        >
          <form
            onSubmit={handleDelete}
            className="w-[400px] bg-[#fff] p-2
            rounded-lg border-t-4 border-point
            text-center"
          >
            <h2>게시글 삭제</h2>
            <p>정말 삭제하시겠습니까?</p>
            <input
              type="password"
              placeholder="작성 비밀번호를 입력해주세요."
              className="w-full px-2 py-1 mt-1
              border-1 border-[#dfdfdf] rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="mt-2
              flex items-center justify-between
              text-white font-bold"
            >
              <button type="submit" className="w-[49%] py-1 rounded bg-point">
                삭제
              </button>
              <button
                type="button"
                className="w-[49%] py-1 rounded bg-blue-400"
                onClick={() => setOpenForm(false)}
              >
                취소
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
