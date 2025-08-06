import Image from "next/image";
import { useState } from "react";

interface YoutubeCardProps {
  item: {
    snippet: {
      title: string;
      thumbnails: { medium: { url: string }; high: { url: string } };
      resourceId: { videoId: string };
    };
  };
}

export default function YoutubeCard({ item }: YoutubeCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}?autoplay=1&mute=1`;

  return (
    <>
      <li>
        <div className="w-[324px] md:w-[464px] aspect-video rounded-[20px] flex-shrink-0 snap-start overflow-hidden relative bg-black">
          {isPlaying ? (
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title={item.snippet.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <>
              <Image
                src={item.snippet.thumbnails.high.url}
                alt={item.snippet.title}
                width={464}
                height={260}
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => setIsPlaying(true)}
              />
            </>
          )}
        </div>
        <div className="text-white p-2 text-sm">{item.snippet.title}</div>
      </li>
    </>
  );
}
