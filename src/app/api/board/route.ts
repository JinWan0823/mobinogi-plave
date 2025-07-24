import { connectDB } from "@/_lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";

export async function GET() {
  const client = await connectDB;
  const db = client.db("mobinogi");
  try {
    const board = await db
      .collection("board")
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    if (board.length === 0) {
      return NextResponse.json(
        { message: "존재하는 게시글이 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(board, { status: 200 });
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
    const { title, category, name, password, content } = data;

    if (!title || !name || !password) {
      return NextResponse.json(
        { message: "필수 입력란을 확인해주세요." },
        { status: 400 }
      );
    }

    const client = await connectDB;
    const db = client.db("mobinogi");

    const hashedPassword = await bcrypt.hash(password, 10);

    const newBoard = {
      title,
      cateogry: category ?? "자유게시글",
      name,
      password: hashedPassword,
      content: content,
      createdAt: new Date(),
    };
    const result = await db.collection("board").insertOne(newBoard);

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

export async function DELETE(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      _id,
      name,
      password,
    }: { _id: string; name: string; password: string } = data;

    if (!name || !password) {
      return NextResponse.json(
        { message: "필수 입력란을 확인해주세요." },
        { status: 400 }
      );
    }

    const client = await connectDB;
    const db = client.db("mobinogi");

    const post = await db
      .collection("board")
      .findOne({ _id: new ObjectId(_id) });

    if (!post) {
      return NextResponse.json(
        { message: "게시글을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    const isMatch = await bcrypt.compare(password, post.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "비밀번호가 일치하지 않습니다." },
        { status: 401 }
      );
    }

    await db.collection("board").deleteOne({ _id: new ObjectId(_id) });

    return NextResponse.json({ message: "삭제 완료" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(error) },
      { status: 500 }
    );
  }
}
