import { connectDB } from "@/_lib/mongodb";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const client = await connectDB;
  const db = client.db("mobinogi");
  const { id } = await params;
  try {
    const current = await db
      .collection("board")
      .findOne({ _id: new ObjectId(id) });

    if (!current) {
      return NextResponse.json(
        { message: "존재하는 게시글이 없습니다." },
        { status: 404 }
      );
    }

    const prev = await db
      .collection("board")
      .findOne(
        { createdAt: { $lt: current.createdAt } },
        { sort: { createdAt: -1 }, projection: { _id: 1, title: 1 } }
      );

    const next = await db
      .collection("board")
      .findOne(
        { createdAt: { $gt: current.createdAt } },
        { sort: { createdAt: 1 }, projection: { _id: 1, title: 1 } }
      );

    return NextResponse.json(
      {
        post: current,
        prev,
        next,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(error) },
      { status: 500 }
    );
  }
}
