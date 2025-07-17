import Link from "next/link";
import NoticeList from "./NoticeLi";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

export default function List() {
  return (
    <>
      <div className="w-[48%]">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold pb-2">공지사항 & 이벤트</p>
          <Link href={"/"} className="text-[#aaaaaa] flex items-center">
            전체보기 <TbArrowBigRightLinesFilled className="text-lg ml-1" />
          </Link>
        </div>
        <ul className="border-t-4 border-[#000]">
          <NoticeList />
          <NoticeList />
          <NoticeList />
          <NoticeList />
        </ul>
      </div>
    </>
  );
}
