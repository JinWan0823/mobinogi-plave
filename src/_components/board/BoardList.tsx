import { convertToKstTime } from "@/_lib/convertToKstTime";
import Link from "next/link";

interface ListProps {
  item: {
    _id: string;
    title: string;
    category: string;
    name: string;
    createdAt: string;
    commentCount: number;
  };
}

export default function BoardList({ item }: ListProps) {
  return (
    <li>
      <Link
        href={`/board/view/${item._id}`}
        className="flex justify-between items-center p-4 border-b border-[#dfdfdf]"
      >
        <div className="w-[140px] flex justify-center">
          <span className="p-1 px-4 text-[#aaaaaa] border-1 border-1-[#aaaaaa] rounded-full">
            {item.category}
          </span>
        </div>
        <div className="flex-1 w-full overflow-hidden">
          <h3 className="text-lg font-semibold px-2 ">
            {item.title}{" "}
            <span className="text-sm ml-1 font-medium text-[#aaa]">
              댓글({item.commentCount})
            </span>
          </h3>
        </div>

        <div className="flex items-center gap-2 text-center">
          <span className="text-sm text-gray-600 w-[100px] ">{item.name}</span>
          <span className="text-sm text-gray-600 w-[100px]">
            {convertToKstTime(item.createdAt)}
          </span>
        </div>
      </Link>
    </li>
  );
}
