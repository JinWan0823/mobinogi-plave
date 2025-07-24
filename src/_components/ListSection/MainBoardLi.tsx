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
  };
}

export default function MainBoardLi({ item }: NoticeProps) {
  return (
    <li className="border-b-1 border-[#aaaaaa]">
      <Link
        href={`/board/list/${item._id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full py-6 px-2 "
      >
        <div className="flex items-center justify-between">
          <CategoryBadge category={item.category} />
          <span className="text-[#aaaaaa]">
            {convertToKstTime(item.createdAt)}
          </span>
        </div>
        <p className="font-bold text-xl mt-3">{item.title}</p>
      </Link>
    </li>
  );
}
