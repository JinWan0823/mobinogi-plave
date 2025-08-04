import SubBanner from "@/_components/board/SubBanner";
import TabMenu from "@/_components/board/TabMenu";
import ViewWrap from "@/_components/board/ViewWrap";
import { getBoardPostById } from "@/_lib/api";
import { Metadata } from "next";
import Link from "next/link";

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  return {
    title: `게시글 - ${params.id}`,
    description: "자유게시판 글입니다.",
    openGraph: {
      title: `게시글 - ${params.id}`,
      description: "자유게시판 글입니다.",
      images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og/home.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: `게시글 - ${params.id}`,
      description: "자유게시판 글입니다.",
      images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og/home.png`],
    },
  };
}

export default async function BoardViewPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getBoardPostById(params.id);
  return (
    <>
      <SubBanner />
      <div
        className="menu-tab w-full
        bg-[#fff] shadow-xl"
      >
        <TabMenu />
      </div>
      <section className="py-12">
        <div className="w-[1140px] mx-auto">
          {post ? (
            <ViewWrap post={post} />
          ) : (
            <p className="text-center text-red-500">
              게시글을 찾을 수 없습니다.
            </p>
          )}
          <div className="flex justify-center mt-8">
            <Link
              href="/board/list"
              className="w-[160px] h-[44px]
              flex items-center justify-center
              bg-point text-white font-bold text-lg
              rounded-xl shadow-xl"
            >
              목록으로
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
