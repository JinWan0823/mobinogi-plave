import SubBanner from "@/_components/board/SubBanner";
import TabMenu from "@/_components/board/TabMenu";
import ViewWrap from "@/_components/board/ViewWrap";
import { getBoardPostById } from "@/_lib/api";
import Link from "next/link";

interface BoardViewPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: BoardViewPageProps) {
  const post = await getBoardPostById(params.id);

  return {
    title: post?.title ?? "자유게시판",
    description: post?.content?.slice(0, 100) ?? "자유게시판 글입니다.",
    openGraph: {
      title: post?.title ?? "자유게시판",
      description: post?.content?.slice(0, 100) ?? "자유게시판 글입니다.",
      images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og/home.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title ?? "자유게시판",
      description: post?.content?.slice(0, 100) ?? "자유게시판 글입니다.",
      images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og/home.png`],
    },
  };
}

export default function BoardViewPage({ params }: BoardViewPageProps) {
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
          <ViewWrap id={params.id} />

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
