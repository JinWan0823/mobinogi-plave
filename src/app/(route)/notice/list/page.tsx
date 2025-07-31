import SubBanner from "@/_components/board/SubBanner";
import TabMenu from "@/_components/board/TabMenu";
import NoticeWrap from "@/_components/notice/NoticeWrap";

export default function NoticeListPage() {
  return (
    <div>
      <SubBanner />
      <div
        className="menu-tab w-full
        bg-[#fff] shadow-xl"
      >
        <TabMenu />
      </div>
      <section className="py-12">
        <div className="w-[1140px] mx-auto mt-4">
          <NoticeWrap />
        </div>
      </section>
    </div>
  );
}
