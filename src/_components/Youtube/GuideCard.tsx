import { useState } from "react";
import { converToEmbedUrl } from "@/_lib/convertToEmbedUrl";
import Image from "next/image";

interface YoutubeCardProps {
  item: {
    youtubeLink: string;
    category: string;
    title: string;
    noticeChk: boolean;
  };
}

export default function GuideCard({ item }: YoutubeCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeUrl = converToEmbedUrl(item.youtubeLink);

  const videoId = new URL(item.youtubeLink).searchParams.get("v") || "";

  return (
    <li className="w-full aspect-video cursor-pointer relative">
      {item.noticeChk && (
        <Image
          src={`/main/notice.png`}
          alt={"중요체크"}
          width={100}
          height={100}
          className="absolute top-[20px] left-[20px] -translate-x-1/2 -translate-y-1/2 z-999"
        />
      )}
      <div className="relative w-full h-full rounded-[20px] overflow-hidden">
        {!isPlaying ? (
          <>
            <Image
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={item.title}
              width={464}
              height={260}
              className="w-full h-full object-cover"
              onClick={() => setIsPlaying(true)}
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              onClick={() => setIsPlaying(true)}
            >
              <Image
                src={"/icon/youtube.png"}
                alt="youtube-icon"
                width={60}
                height={60}
              />
            </div>
          </>
        ) : (
          <iframe
            className="w-full h-full"
            src={`${youtubeUrl}?autoplay=1&mute=1`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>
    </li>
  );
}
