import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

interface ListProps {
  title: string;
  category: string;
  youtubeLink: string;
}

interface YoutubeListProps {
  item: ListProps;
}

const getYoutubeId = (url: string): string | null => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.searchParams.get("v");
  } catch {
    return null;
  }
};

export default function YoutubeList({ item }: YoutubeListProps) {
  const youtubeId = getYoutubeId(item.youtubeLink);

  return (
    <tr className="hover:bg-gray-300 border-b-1 border-gray-300">
      <td className="px-4 py-3 w-10">
        <input type="checkbox" checked={true} onChange={() => {}} />
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
      <td className="px-4 py-3 w-[120px]">2025-07-21</td>
      <td className="px-4 py-3 w-[100px] text-right">
        <span className="text-green-600 font-semibold flex justify-end items-center gap-1">
          <FaCheckCircle />
          공개중
        </span>
      </td>
    </tr>
  );
}
