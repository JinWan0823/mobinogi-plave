import { convertToKstTime } from "@/_lib/convertToKstTime";
import Image from "next/image";
import NoticeToggleBtn from "./NoticeToggleBtn";

export interface ListProps {
  _id: string;
  title: string;
  category: string;
  youtubeLink: string;
  createdAt: string;
  noticeChk: boolean;
}

interface YoutubeListProps {
  item: ListProps;
  idx: number;
  checked: boolean;
  handleCheckItem: (index: number, id: string) => void;
}

const getYoutubeId = (url: string): string | null => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.searchParams.get("v");
  } catch {
    return null;
  }
};

export default function YoutubeList({
  item,
  idx,
  checked,
  handleCheckItem,
}: YoutubeListProps) {
  return (
    <tr className="hover:bg-gray-300 border-b-1 border-gray-300">
      <td className="px-4 py-3 w-10">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleCheckItem(idx, item._id)}
        />
      </td>
      <td className="px-4 py-3 w-[140px]">
        <Image
          src={`https://img.youtube.com/vi/${getYoutubeId(
            item.youtubeLink
          )}/hqdefault.jpg`}
          alt="썸네일"
          width={120}
          height={40}
          className="rounded-md w-full h-full object-cover"
        />
      </td>
      <td className="px-4 py-3 font-medium break-words">
        <div className="whitespace-normal leading-snug">{item.title}</div>
      </td>
      <td className="px-4 py-3 w-[140px] text-gray-600">{item.category}</td>
      <td className="px-4 py-3 w-[120px]">
        {convertToKstTime(item.createdAt)}
      </td>
      <td className="px-4 py-3 w-[120px] text-sm text-white">
        <NoticeToggleBtn noticeBoolean={item.noticeChk} listId={item._id} />
      </td>
    </tr>
  );
}
