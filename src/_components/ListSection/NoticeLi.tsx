import Link from "next/link";
import CategoryBadge from "./CategoryBadge";
import { NoticeItem } from "./List";

interface NoticeProps {
  item: NoticeItem;
}

export default function NoticeList({ item }: NoticeProps) {
  return (
    <li className="border-b-1 border-[#aaaaaa]">
      <Link
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full py-6 px-2 "
      >
        <div className="flex items-center justify-between">
          <CategoryBadge category={item.category} />
          <span className="text-[#aaaaaa]">{item.date}</span>
        </div>
        <p className="font-bold text-xl mt-3">{item.title}</p>
      </Link>
    </li>
  );
}
