"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaHome } from "react-icons/fa";
import { TiChevronRightOutline } from "react-icons/ti";

export default function TabMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const pathName = usePathname();
  const { data: session } = useSession();

  const toggleTabMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleCategory = () => {
    setOpenCategory((prev) => !prev);
  };

  const isBoardList = pathName === "/board/list";
  const isBoardWrite = pathName === "/board/write";
  const isNoticeList = pathName === "/notice/list";
  const isNoticeWrite = pathName === "/notice/write";
  const isBoardView = pathName.startsWith("/board/view");

  const isBoardPage = isBoardList || isBoardWrite || isBoardView;
  const isNoticePage = isNoticeList || isNoticeWrite;

  const renderTabText = () => {
    if (isBoardList) return "글 목록";
    if (isBoardWrite) return "글 작성";
    if (isBoardView) return "게시글";
    if (isNoticeList) return "공지 목록";
    if (isNoticeWrite) return "공지 작성";
    return "";
  };

  const renderTabCategory = () => {
    if (isBoardPage) return "자유게시판";
    if (isNoticePage) return "공지사항";
    return "";
  };

  const renderTabCatogoryLinks = () => {
    if (isBoardPage) {
      return (
        <>
          <li className="w-full p-4">
            <Link
              href="/board/list"
              className="flex items-center justify-between"
            >
              자유게시판 <TiChevronRightOutline />
            </Link>
          </li>
          <li className="w-full p-4 border-t-1 border-[#dfdfdf]">
            <Link
              href="/notice/list"
              className="flex items-center justify-between"
            >
              공지사항 <TiChevronRightOutline />
            </Link>
          </li>
        </>
      );
    }

    if (isNoticePage) {
      return (
        <>
          <li className="w-full p-4">
            <Link
              href="/notice/list"
              className="flex items-center justify-between"
            >
              공지사항 <TiChevronRightOutline />
            </Link>
          </li>

          <li className="w-full p-4 border-t-1 border-[#dfdfdf]">
            <Link
              href="/board/list"
              className="flex items-center justify-between"
            >
              자유게시판 <TiChevronRightOutline />
            </Link>
          </li>
        </>
      );
    }

    return null;
  };

  const renderTabLinks = () => {
    if (isBoardPage) {
      return (
        <>
          <li className="w-full p-4">
            <Link
              href="/board/list"
              className="flex items-center justify-between"
            >
              글 목록 <TiChevronRightOutline />
            </Link>
          </li>
          <li className="w-full p-4 border-t-1 border-[#dfdfdf]">
            <Link
              href="/board/write"
              className="flex items-center justify-between"
            >
              글 작성 <TiChevronRightOutline />
            </Link>
          </li>
        </>
      );
    }

    if (isNoticePage) {
      return (
        <>
          <li className="w-full p-4">
            <Link
              href="/notice/list"
              className="flex items-center justify-between"
            >
              공지 목록 <TiChevronRightOutline />
            </Link>
          </li>

          {session?.user && (
            <li className="w-full p-4 border-t-1 border-[#dfdfdf]">
              <Link
                href="/notice/write"
                className="flex items-center justify-between"
              >
                공지 작성 <TiChevronRightOutline />
              </Link>
            </li>
          )}
        </>
      );
    }

    return null;
  };
  return (
    <div
      className="menu-tab w-full
        bg-[#fff] shadow-xl text-sm md:text-base"
    >
      <ul className="mx-auto max-w-[1140px] w-full flex items-center font-bold">
        <li className="w-[160px] p-4 border-[#dfdfdf] border-l-1 border-r-1">
          <Link href="/" className="w-full flex items-center gap-2 text-point">
            <FaHome /> HOME
          </Link>
        </li>

        <li
          className="w-[160px] p-4 relative
        flex items-center justify-between
        cursor-pointer"
          onClick={toggleCategory}
        >
          {renderTabCategory()} <FaChevronDown className="text-point" />
          {openCategory && (
            <ul
              className="absolute bottom-[-4px] left-0 translate-y-full
              w-full bg-[#fff] shadow-xl border-1 border-[#dfdfdf] z-999"
            >
              {renderTabCatogoryLinks()}
            </ul>
          )}
        </li>

        {(isBoardPage || isNoticePage) && (
          <li
            className="relative w-[160px] p-4
          border-l-1 border-r-1 border-[#dfdfdf]
          flex items-center justify-between
          cursor-pointer"
            onClick={toggleTabMenu}
          >
            <>
              {renderTabText()} <FaChevronDown className="text-point" />
            </>
            {isOpen && (
              <ul
                className="absolute bottom-[-4px] left-0 translate-y-full
              w-full bg-[#fff] shadow-xl border-1 border-[#dfdfdf] z-999"
              >
                {renderTabLinks()}
              </ul>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
