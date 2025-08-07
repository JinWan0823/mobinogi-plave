import SubBanner from "@/_components/board/SubBanner";
import TabMenu from "@/_components/board/TabMenu";
import ViewWrap from "@/_components/board/ViewWrap";
import { getBoardPostById } from "@/_lib/api";
import { Metadata } from "next";
import Link from "next/link";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getBoardPostById(id);

  return {
    title: post?.title ?? "게시글",
    description: post?.content?.slice(0, 100) ?? "자유게시판 글입니다.",
    openGraph: {
      title: post?.title ?? "게시글",
      description: post?.content?.slice(0, 100) ?? "자유게시판 글입니다.",
      images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og/home.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title ?? "게시글",
      description: post?.content?.slice(0, 100) ?? "자유게시판 글입니다.",
      images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og/home.png`],
    },
  };
}

export default async function BoardViewPage() {
  return (
    <>
      <SubBanner />

      <TabMenu />

      <section className="py-12">
        <div className="max-w-[1140px] w-[95%] mx-auto">
          <ViewWrap />

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
