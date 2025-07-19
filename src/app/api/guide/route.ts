import { NextResponse } from "next/server";

interface YoutubeCardProps {
  item: {
    snippet: {
      title: string;
      thumbnails: { medium: { url: string }; high: { url: string } };
      resourceId: { videoId: string };
    };
  };
}

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_IDS = [
  "UCPZIPuQPrfrUG9Xe_okEmQA", // 김진솔 채널
  "UCwT_HPVB3tnyl2H32x9pDVw", //새크리마 채널
];

export async function GET(
  req: NextResponse,
  { params }: { params: Promise<{ name: string }> }
) {
  const keyword = "마비노기";
  const { category } = await params;

  try {
    const allVideos = [];

    // 채널별 업로드 재생목록 ID 받아오기
    for (const channelId of CHANNEL_IDS) {
      const channelRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`
      );
      const channelData = await channelRes.json();

      const uploadPlaylistId =
        channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

      if (!uploadPlaylistId) {
        console.warn(`업로드 재생목록 없음: ${channelId}`);
        continue; // 업로드 재생목록 없으면 다음 채널로
      }

      // 업로드 영상 목록 가져오기 (최대 50개)
      const videosRes = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadPlaylistId}&maxResults=50&key=${YOUTUBE_API_KEY}`
      );
      const videoData = await videosRes.json();

      if (!videoData.items) continue;

      // 키워드 포함 필터링 후 합치기
      const filteredVideos = videoData.items.filter((item) =>
        item.snippet.title.includes(`${category} 공략`)
      );
      allVideos.push(...filteredVideos);
    }

    if (allVideos.length === 0) {
      return NextResponse.json(
        { error: "검색 결과가 없습니다." },
        { status: 404 }
      );
    }

    allVideos.sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt).getTime();
      const dateB = new Date(b.snippet.publishedAt).getTime();
      return dateB - dateA; // 최신순
    });

    // 중복 제거 후 6개 추출
    const uniqueVideos = Array.from(
      new Map(
        allVideos.map((item) => [item.snippet.resourceId.videoId, item])
      ).values()
    );

    const limitedVideos = uniqueVideos.slice(0, 6);

    return NextResponse.json(limitedVideos);
  } catch (error) {
    console.error("error :", error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
