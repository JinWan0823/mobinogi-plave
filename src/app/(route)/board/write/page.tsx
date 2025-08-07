import SubBanner from "@/_components/board/SubBanner";
import TabMenu from "@/_components/board/TabMenu";
import WriteForm from "@/_components/board/WriteForm";
import { getMetaData } from "@/_lib/metadata";

export const metadata = getMetaData({ page: "board" });

export default function BoardWritePage() {
  return (
    <>
      <SubBanner />

      <TabMenu />

      <section className="py-12">
        <div
          className="p-2 md:p-4 max-w-[1140px] w-[95%] mx-auto bg-[#efefef] shadow-xl"
          style={{ backgroundImage: `url(/main/paper2.jpg)` }}
        >
          <h1>자유 게시판 - 글 작성</h1>
          <WriteForm />
        </div>
      </section>
    </>
  );
}
