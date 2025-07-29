import ListWrap from "@/_components/board/ListWrap";
import SubBanner from "@/_components/board/SubBanner";
import TabMenu from "@/_components/board/TabMenu";

export default function BoardListPage() {
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
          <ListWrap />
        </div>
      </section>
    </div>
  );
}
