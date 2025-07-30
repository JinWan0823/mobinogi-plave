import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

export default function CommentWrap() {
  const [commentUpload, setCommentUpload] = useState(false);

  useEffect(() => {}, [commentUpload]);

  return (
    <div className="w-full">
      <ul className="">
        {/* <li className="py-[60px] flex flex-col justify-center items-center">
          <RiErrorWarningLine className="text-2xl" />
          <p className="text-center font-bold mt-1">
            아직 등록된 댓글이 없습니다.
          </p>
        </li>
         */}
        <CommentList />
        <CommentList />
        <CommentList />
      </ul>
      <CommentForm setCommentUpload={setCommentUpload} />
    </div>
  );
}
