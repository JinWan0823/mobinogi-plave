import { connectDB } from "@/_lib/mongodb";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const client = await connectDB;
    const db = client.db("mobinogi");
    const { id } = await params;

    const comments = await db
      .collection("comment")
      .find({ postId: new ObjectId(id) })
      .sort({ createdAt: -1 })
      .toArray();

    if (!comments || comments.length === 0) {
      return NextResponse.json(
        { message: "댓글이 없습니다." },
        { status: 404 }
      );
    }

    const commentsWithoutPassword = comments.map(
      ({ password, ...rest }) => rest
    );
    return NextResponse.json(commentsWithoutPassword, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(error) },
      { status: 500 }
    );
  }
}
