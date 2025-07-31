export const runtime = "nodejs";

import { connectDB } from "@/_lib/mongodb";
import * as cheerio from "cheerio";
import { NextRequest, NextResponse } from "next/server";

const TARGET_URL = "https://mabinogimobile.nexon.com/News/Notice";

export async function GET() {
  try {
    const res = await fetch(TARGET_URL, {
      headers: { "User-Agent": "Mozilla/5.0" },
      cache: "no-store",
    });

    const html = await res.text();
    const $ = cheerio.load(html);

    const noticeList = $(".list .item")
      .slice(0, 5)
      .map((_, el) => {
        const category = $(el).find(".type span").text().trim();
        const title = $(el).find(".title span").text().trim();
        const date = $(el).find(".date span").text().trim();
        const threadId = $(el).attr("data-threadid");
        const link = `https://mabinogimobile.nexon.com/News/Notice/${threadId}`;

        return { category, title, date, link };
      })
      .get();

    return NextResponse.json(noticeList);
  } catch (error) {
    console.error("공지사항 크롤링 실패:", error);
    return NextResponse.json({ error: "크롤링 실패" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
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

    const newNotice = {
      title,
      noticeLink,
      category,
      noticeChk,
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
