import { NextResponse } from "next/server";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = "UCPZIPuQPrfrUG9Xe_okEmQA";

export async function GET() {
  const channelRes = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
  );

  const channelData = await channelRes.json();
  const uploadPlaylistId =
    channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

  if (!uploadPlaylistId) {
    return NextResponse.json(
      { error: "업로드 목록을 찾을 수 없습니다." },
      { status: 500 }
    );
  }

  const videosRes = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadPlaylistId}&maxResults=10&key=${YOUTUBE_API_KEY}`
  );
  const videoData = await videosRes.json();

  return NextResponse.json(videoData.items);
}
