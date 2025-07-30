import { connectDB } from "@/_lib/mongodb";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { postId, name, password, content } = data;

    if (!content || !name || !password) {
      return NextResponse.json(
        { message: "필수 입력란을 확인해주세요." },
        { status: 400 }
      );
    }

    const client = await connectDB;
    const db = client.db("mobinogi");

    const hashedPassword = await bcrypt.hash(password, 10);

    if (typeof postId !== "string" || !ObjectId.isValid(postId)) {
      throw new Error("postId는 유효한 문자열이어야 합니다.");
    }

    const newBoard = {
      postId: new ObjectId(postId),
      name,
      password: hashedPassword,
      content: content,
      createdAt: new Date(),
    };
    const result = await db.collection("comment").insertOne(newBoard);

    await db
      .collection("board")
      .updateOne({ _id: new ObjectId(postId) }, { $inc: { commentCount: 1 } });
    return NextResponse.json(
      { message: "자유게시판 등록 성공", result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(error) },
      { status: 500 }
    );
  }
}
