import { connectDB } from "@/_lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  const client = await connectDB;
  const db = client.db("mobinogi");
  const { category } = await params;

  try {
    const videos = await db
      .collection("youtubeGuide")
      .find({ category: category })
      .toArray();

    if (videos.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(videos, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(error) },
      { status: 500 }
    );
  }
}
