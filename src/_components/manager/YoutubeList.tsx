import Image from "next/image";
import { BsFillMegaphoneFill } from "react-icons/bs";

export interface ListProps {
  _id: string;
  title: string;
  category: string;
  youtubeLink: string;
  createdAt: string;
  notice: boolean;
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
  const youtubeId = getYoutubeId(item.youtubeLink);

  const utcDate = new Date(item.createdAt);
  const kstDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);

  const formattedKstDate = kstDate.toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

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
          src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
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
      <td className="px-4 py-3 w-[120px]">{formattedKstDate}</td>
      <td className="px-4 py-3 w-[100px] text-right">
        {item.notice ? (
          <span className="text-green-600 font-semibold flex justify-end items-center gap-1">
            <BsFillMegaphoneFill />
            고정
          </span>
        ) : (
          <span className="text-green-600 font-semibold flex justify-end items-center gap-1">
            <BsFillMegaphoneFill />
            고정
          </span>
        )}
      </td>
    </tr>
  );
}
