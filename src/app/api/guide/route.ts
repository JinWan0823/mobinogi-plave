import { connectDB } from "@/_lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await connectDB;
  const db = client.db("mobinogi");

  try {
    const videos = await db.collection("youtubeGuide").find().toArray();

    if (!videos) {
      return NextResponse.json(
        { error: "조회된 동영상이 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(videos, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(error) },
      { status: 500 }
    );
  }
}
