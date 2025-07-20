import { converToEmbedUrl } from "@/_lib/convertToEmbedUrl";

interface YoutubeCardProps {
  item: {
    youtubeLink: string;
    category: string;
    title: string;
  };
}
export default function GuideCard({ item }: YoutubeCardProps) {
  const youtubeUrl = converToEmbedUrl(item.youtubeLink);

  return (
    <li className="w-[464px] h-[260px] bg-[#aaaaaa] rounded-[20px] overflow-hidden">
      <iframe
        className="w-full h-full"
        src={youtubeUrl}
        title={item.title}
        allow="encrypted-media"
        allowFullScreen
      />
    </li>
  );
}
