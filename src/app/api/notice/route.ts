export const runtime = "nodejs";

import * as cheerio from "cheerio";
import { NextResponse } from "next/server";

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
