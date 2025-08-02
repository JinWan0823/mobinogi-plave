import { connectDB } from "@/_lib/mongodb";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/authOptions";

export async function GET(req: NextRequest) {
  const client = await connectDB;
  const db = client.db("mobinogi");

  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);
  const limit = 10;
  const skip = (page - 1) * 10;

  const category = searchParams.get("category");
  const query: Record<string, unknown> = {};
  if (category && category !== "전체") {
    query.category = category;
  }

  const search = searchParams.get("search");
  if (search && search.trim() !== "") {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { name: { $regex: search, $options: "i" } },
    ];
  }

  try {
    const totalCount = await db.collection("notice").countDocuments(query);

    const board = await db
      .collection("notice")
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    if (board.length === 0) {
      return NextResponse.json(
        { message: "존재하는 게시글이 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json({ board, totalCount }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session || !session?.user) {
    return Response.json(
      { message: "로그인 정보가 필요합니다." },
      { status: 400 }
    );
  }

  try {
    const data = await req.json();
    const { title, noticeLink, category, noticeChk } = data;

    if (!title || !noticeLink || !category) {
      return NextResponse.json(
        { message: "필수 입력란을 확인해주세요." },
        { status: 400 }
      );
    }

    const client = await connectDB;
    const db = client.db("mobinogi");

    const name = session.user.username === "admin" ? "최고관리자" : "관리자";

    const newNotice = {
      title,
      noticeLink,
      category,
      noticeChk,
      name: name,
      createdAt: new Date(),
    };
    const result = await db.collection("notice").insertOne(newNotice);

    return NextResponse.json(
      { message: "공지사항 등록 성공", result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(error) },
      { status: 500 }
    );
  }
}
