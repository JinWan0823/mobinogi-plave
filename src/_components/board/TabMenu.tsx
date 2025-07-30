"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaHome } from "react-icons/fa";
import { TiChevronRightOutline } from "react-icons/ti";

export default function TabMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  const toggleTabMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const isListPage = pathName === "/board/list";

  return (
    <ul className="mx-auto w-[1140px] flex items-center font-bold">
      <li className="w-[160px] p-4 border-[#dfdfdf] border-l-1 border-r-1">
        <Link href={"/"} className="w-full flex items-center gap-2 text-point">
          <FaHome /> HOME
        </Link>
      </li>
      <li className="w-[160px] p-4">자유게시판</li>
      <li
        className="relative w-[160px] p-4
        border-l-1 border-r-1 border-[#dfdfdf]
        flex items-center justify-between
        cursor-pointer"
        onClick={toggleTabMenu}
      >
        {isListPage ? (
          <>
            글 목록 <FaChevronDown className="text-point" />
          </>
        ) : (
          <>
            글 작성 <FaChevronDown className="text-point" />
          </>
        )}
        {isOpen && (
          <ul
            className="absolute bottom-[-4px] left-0 translate-y-full
          w-full bg-[#fff] shadow-xl border-1 border-[#dfdfdf] z-999"
          >
            <li className="w-full p-4">
              <Link
                href={"/board/list"}
                className="flex items-center justify-between"
              >
                글 목록 <TiChevronRightOutline />
              </Link>
            </li>
            <li className="w-full p-4 border-t-1 border-[#dfdfdf]">
              <Link
                href={"/board/write"}
                className="flex items-center justify-between"
              >
                글 작성 <TiChevronRightOutline />
              </Link>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}
