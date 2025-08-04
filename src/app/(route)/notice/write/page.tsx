import SubBanner from "@/_components/board/SubBanner";
import TabMenu from "@/_components/board/TabMenu";
import NoticeWriteForm from "@/_components/notice/NoticeWriteForm";
import { getMetaData } from "@/_lib/metadata";

export const metadata = getMetaData({ page: "notice" });

export default function NoticeWritePage() {
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
        <div
          className="p-4 w-[460px] mx-auto bg-[#efefef] shadow-xl"
          style={{ backgroundImage: `url(/main/paper2.jpg)` }}
        >
          <h1>공지사항 - 글 작성</h1>
          <NoticeWriteForm />
        </div>
      </section>
    </>
  );
}
