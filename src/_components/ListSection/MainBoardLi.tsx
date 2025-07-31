import Link from "next/link";
import CategoryBadge from "./CategoryBadge";
import { convertToKstTime } from "@/_lib/convertToKstTime";

interface NoticeProps {
  item: {
    _id: string;
    name: string;
    title: string;
    createdAt: string;
    category: string;
    link: string;
    commentCount: number;
  };
}

export default function MainBoardLi({ item }: NoticeProps) {
  return (
    <li className="border-b-1 border-[#aaaaaa]">
      <Link
        href={`/board/view/${item._id}`}
        className="block w-full h-full py-6 px-2 "
      >
        <div className="flex items-center justify-between">
          <CategoryBadge category={item.category} />
          <span className="text-[#aaaaaa]">
            {convertToKstTime(item.createdAt)}
          </span>
        </div>
        <div className="flex items-start justify-between  mt-3">
          <p className="font-bold text-xl">
            {item.title}
            <span className="font-medium text-sm text-[#aaa] pl-1">
              ({item.commentCount})
            </span>
          </p>
          <span className="text-[#aaaaaa]">작성자 : {item.name}</span>
        </div>
      </Link>
    </li>
  );
}
