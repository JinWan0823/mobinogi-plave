import SubBanner from "@/_components/board/SubBanner";
import TabMenu from "@/_components/board/TabMenu";
import NoticeWriteForm from "@/_components/notice/NoticeWriteForm";
import { getMetaData } from "@/_lib/metadata";

export const metadata = getMetaData({ page: "manager" });

export default function NoticeWritePage() {
  return (
    <>
      <SubBanner />
      <TabMenu />
      <section className="py-12">
        <div
          className="p-2 md:p-4 max-w-[460px] w-[95%] mx-auto bg-[#efefef] shadow-xl"
          style={{ backgroundImage: `url(/main/paper2.jpg)` }}
        >
          <h1>공지사항 - 글 작성</h1>
          <NoticeWriteForm />
        </div>
      </section>
    </>
  );
}
