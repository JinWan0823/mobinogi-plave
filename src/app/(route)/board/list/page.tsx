import ListWrap from "@/_components/board/ListWrap";
import SubBanner from "@/_components/board/SubBanner";
import TabMenu from "@/_components/board/TabMenu";
import { getMetaData } from "@/_lib/metadata";

export const metadata = getMetaData({ page: "board" });

export default function BoardListPage() {
  return (
    <div>
      <SubBanner />

      <TabMenu />

      <section className="py-6 md:py-12">
        <div className="max-w-[1140px] w-[95%] mx-auto mt-4">
          <ListWrap />
        </div>
      </section>
    </div>
  );
}
