import { IoPeopleSharp } from "react-icons/io5";
import { CommentType } from "./CommentWrap";
import { convertToKstTime } from "@/_lib/convertToKstTime";

interface CommentProps {
  item: CommentType;
  className?: string;
}

export default function CommentList({ item, className }: CommentProps) {
  return (
    <li className={`p-2 py-4 ${className} border-[#dfdfdf]`}>
      <div className="overview flex items-center justify-between">
        <div className="flex items-center font-bold gap-1">
          <IoPeopleSharp className="text-lg" /> {item.name}
        </div>
        <p className="text-[#aaa] text-sm">
          {convertToKstTime(item.createdAt)}
        </p>
      </div>
      <p className="mt-2 bg-[#fbfbfb] border-1 border-[#eee] min-h-[70px] p-2 rounded">
        {item.content}
      </p>
    </li>
  );
}
