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
    noticeLink: string;
  };
}

export default function NoticeList({ item }: NoticeProps) {
  return (
    <li className="border-b-1 border-[#aaaaaa]">
      <Link
        href={item.noticeLink}
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
        <div className="flex items-start justify-between  mt-3">
          <p className="font-bold text-xl pr-10 overflow-hidden text-ellipsis whitespace-nowrap">
            {item.title}
          </p>
          <span className="text-[#aaaaaa] shrink-0">{item.name}</span>
        </div>
      </Link>
    </li>
  );
}
