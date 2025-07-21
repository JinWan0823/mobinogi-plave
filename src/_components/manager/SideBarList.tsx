"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidRightArrow } from "react-icons/bi";

export default function SideBarList({
  link,
  title,
}: {
  link: string;
  title: string;
}) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href="/guide/list"
        className={`flex items-center ${link === pathname ? "text-point" : ""}`}
      >
        <BiSolidRightArrow className="text-sm mr-1" />
        {title}
      </Link>
    </li>
  );
}
