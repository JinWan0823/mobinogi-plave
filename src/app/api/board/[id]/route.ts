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
    const board = await db
      .collection("board")
      .findOne({ _id: new ObjectId(id) });

    if (!board) {
      return NextResponse.json(
        { message: "존재하는 게시글이 없습니다." },
        { status: 404 }
      );
    }

    const { password, ...boardWithoutPassword } = board;

    return NextResponse.json(boardWithoutPassword, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(error) },
      { status: 500 }
    );
  }
}
