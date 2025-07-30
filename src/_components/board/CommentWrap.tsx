import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { useParams } from "next/navigation";
import { RiErrorWarningLine } from "react-icons/ri";

export interface CommentType {
  _id: string;
  postId: string;
  content: string;
  name: string;
  createdAt: string;
}

export default function CommentWrap() {
  const [commentUpload, setCommentUpload] = useState(false);
  const [commentsData, setCommentsData] = useState<CommentType[]>([]);
  const { id } = useParams();
  useEffect(() => {
    fetchComments();
  }, [commentUpload]);

  const fetchComments = async () => {
    const res = await fetch(`/api/board/comment/${id}`);
    const data = await res.json();

    if (!res.ok) {
      setCommentsData([]);
      return;
    }
    setCommentsData(data);
  };

  return (
    <div className="w-full">
      <div>
        <p className="w-full border-1 border-[#aaa] rounded p-1 px-2 font-bold text-sm">
          댓글({commentsData.length})
        </p>
      </div>
      <ul className="">
        {commentsData.length === 0 ? (
          <li className="py-[60px] text-[#aaa] flex flex-col justify-center items-center">
            <RiErrorWarningLine className="text-2xl" />
            <p className="text-center font-bold mt-1">
              아직 등록된 댓글이 없습니다.
            </p>
          </li>
        ) : (
          commentsData.map((item, idx) => (
            <CommentList
              key={idx}
              item={item}
              className={idx === 0 ? "" : "border-t-1"}
            />
          ))
        )}
      </ul>
      <CommentForm setCommentUpload={setCommentUpload} />
    </div>
  );
}
