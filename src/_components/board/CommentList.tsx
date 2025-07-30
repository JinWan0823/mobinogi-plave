import { IoPeopleSharp } from "react-icons/io5";

export default function CommentList() {
  return (
    <li className="p-2 py-4 border-t-1 border-[#dfdfdf]">
      <div className="overview flex items-center justify-between">
        <div className="flex items-center font-bold gap-1">
          <IoPeopleSharp className="text-lg" /> 곰쥬
        </div>
        <p className="text-[#aaa] text-sm">2025. 07. 30</p>
      </div>
      <p className="mt-2 bg-[#eee] min-h-[70px] p-2 rounded">
        댓글 내용입니다.
      </p>
    </li>
  );
}
