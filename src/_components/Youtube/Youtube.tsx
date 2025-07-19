interface YoutubeCardProps {
  item: {
    snippet: {
      title: string;
      thumbnails: { medium: { url: string }; high: { url: string } };
      resourceId: { videoId: string };
    };
  };
}
export default function Youtube({ item }: YoutubeCardProps) {
  const videoUrl = `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}?mute=1`;
  return (
    <li className="w-[464px] h-[260px] bg-[#aaaaaa] rounded-[20px] overflow-hidden">
      <iframe
        className="w-full h-full"
        src={videoUrl}
        title={item.snippet.title}
        allow="encrypted-media"
        allowFullScreen
      />
    </li>
  );
}
