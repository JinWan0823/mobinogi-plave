import { IoPeopleSharp } from "react-icons/io5";
import { CommentType } from "./CommentWrap";
import { convertToKstTime } from "@/_lib/convertToKstTime";

interface CommentProps {
  item: CommentType;
}

export default function CommentList({ item }: CommentProps) {
  return (
    <li className="p-2 py-4 border-t-1 border-[#dfdfdf]">
      <div className="overview flex items-center justify-between">
        <div className="flex items-center font-bold gap-1">
          <IoPeopleSharp className="text-lg" /> {item.name}
        </div>
        <p className="text-[#aaa] text-sm">
          {convertToKstTime(item.createdAt)}
        </p>
      </div>
      <p className="mt-2 bg-[#eee] min-h-[70px] p-2 rounded">{item.content}</p>
    </li>
  );
}
