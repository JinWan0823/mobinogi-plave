import { connectDB } from "@/_lib/mongodb";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/authOptions";

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
  const session = await getServerSession(authOptions);

  if (!session || !session?.user) {
    return Response.json(
      { message: "로그인 정보가 필요합니다." },
      { status: 400 }
    );
  }

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

export async function DELETE(req: NextRequest) {
  const { ids }: { ids: string[] } = await req.json();

  const session = await getServerSession(authOptions);

  if (!session || !session?.user) {
    return Response.json(
      { message: "로그인 정보가 필요합니다." },
      { status: 400 }
    );
  }

  if (!ids || ids.length === 0) {
    return NextResponse.json(
      { message: "삭제할 항목이 없습니다." },
      { status: 400 }
    );
  }

  try {
    const client = await connectDB;
    const db = client.db("mobinogi");

    const result = await db.collection("youtubeGuide").deleteMany({
      _id: { $in: ids.map((id) => new ObjectId(id)) },
    });
    return NextResponse.json(
      { message: "삭제 완료", deletedCount: result.deletedCount },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(error) },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const { _id, notice }: { _id: string; notice: boolean } = await req.json();

  const session = await getServerSession(authOptions);

  if (!session || !session?.user) {
    return Response.json(
      { message: "로그인 정보가 필요합니다." },
      { status: 400 }
    );
  }

  try {
    const client = await connectDB;
    const db = client.db("mobinogi");

    const result = await db
      .collection("youtubeGuide")
      .updateOne({ _id: new ObjectId(_id) }, { $set: { noticeChk: notice } });
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "업데이트할 항목을 찾을 수 없습니다." },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "업데이트 성공" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(error) },
      { status: 500 }
    );
  }
}
