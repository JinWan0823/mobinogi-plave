import { SetStateAction, useState } from "react";
import Input from "./Input";
import { useParams } from "next/navigation";
import { useAlert } from "@/_context/AlertProvider";

interface CommentProps {
  setCommentUpload: React.Dispatch<SetStateAction<boolean>>;
}

export default function CommentForm({ setCommentUpload }: CommentProps) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");

  const { id } = useParams();
  const { showAlert } = useAlert();

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      postId: id,
      name: name,
      password: password,
      content: content,
    };

    if (!data.name || !data.password || !data.content) {
      showAlert("필수 입력란을 확인해주세요.");
      return;
    }

    try {
      const res = await fetch(`/api/board/comment`, {
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
      setCommentUpload((prev) => !prev);
      setName("");
      setPassword("");
      setContent("");
      showAlert("댓글을 등록하였습니다.");
      console.log(res.json());
    } catch (error) {
      console.error("자유게시판 글 등록 실패", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmitComment}
      className="border-1 border-[#dfdfdf] p-4 my-4 rounded"
    >
      <div className="flex items-center justify-between">
        <div className="mb-2 flex gap-2 text-sm">
          <Input type="text" value={name} onChange={setName} />
          <Input type="password" value={password} onChange={setPassword} />
        </div>
        <button
          type="submit"
          className="bg-point text-white font-bold py-1 px-6 rounded"
        >
          작성하기
        </button>
      </div>
      <textarea
        className="w-full mt-1 p-2 min-h-[120px] bg-[#fbfbfb]
          border-1 border-[#dfdfdf] rounded"
        placeholder="내용을 입력해주세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </form>
  );
}
