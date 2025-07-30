import SubBanner from "@/_components/board/SubBanner";
import TabMenu from "@/_components/board/TabMenu";
import ViewWrap from "@/_components/board/ViewWrap";
import Link from "next/link";
export default function BoardViewPage() {
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
