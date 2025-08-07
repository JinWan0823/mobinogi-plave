import SubBanner from "@/_components/board/SubBanner";
import TabMenu from "@/_components/board/TabMenu";
import NoticeWrap from "@/_components/notice/NoticeWrap";
import { getMetaData } from "@/_lib/metadata";

export const metadata = getMetaData({ page: "notice" });

export default function NoticeListPage() {
  return (
    <div>
      <SubBanner />

      <TabMenu />

      <section className="py-6 md:py-12">
        <div className="max-w-[1140px] w-[95%] mx-auto mt-4">
          <NoticeWrap />
        </div>
      </section>
    </div>
  );
}
