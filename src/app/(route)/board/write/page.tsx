import TabMenu from "@/_components/board/TabMenu";
import WriteForm from "@/_components/board/WriteForm";

export default function BoardWritePage() {
  return (
    <>
      <div className="banner w-full h-[380px] bg-[#333]"></div>
      <div
        className="menu-tab w-full
            bg-[#fff] shadow-xl"
      >
        <TabMenu />
      </div>
      <section className="py-12">
        <div
          className="p-4 w-[1140px] mx-auto bg-[#efefef] shadow-xl"
          style={{ backgroundImage: `url(/main/paper2.jpg)` }}
        >
          <h1>자유 게시판 - 글 작성</h1>
          <WriteForm />
        </div>
      </section>
    </>
  );
}
