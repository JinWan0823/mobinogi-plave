import { connectDB } from "@/_lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const client = await connectDB;
  const db = client.db("mobinogi");

  const url = new URL(req.url);
  const category = url.searchParams.get("category");

  try {
    let videos;

    if (category && category !== "전체") {
      videos = await db.collection("youtubeGuide").find({ category }).toArray();
    } else {
      videos = await db.collection("youtubeGuide").find().toArray();
    }

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

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { title, youtubeLink, category, noticeChk } = data;

    if (!title || !youtubeLink || !category) {
      return NextResponse.json(
        { message: "필수 입력란을 확인해주세요." },
        { status: 400 }
      );
    }

    const client = await connectDB;
    const db = client.db("mobinogi");

    const newGuide = {
      title,
      youtubeLink,
      category,
      noticeChk,
      createdAt: new Date(),
    };
    const result = await db.collection("youtubeGuide").insertOne(newGuide);

    return NextResponse.json(
      { message: "유튜브 영상 등록 성공", result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(error) },
      { status: 500 }
    );
  }
}
