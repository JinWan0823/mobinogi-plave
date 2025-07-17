import Link from "next/link";
import CategoryBadge from "./CategoryBadge";

export default function NoticeList() {
  return (
    <li className="border-b-1 border-[#aaaaaa]">
      <Link href={""} className="block w-full h-full py-6 px-2 ">
        <div className="flex items-center justify-between">
          <CategoryBadge category="플레이브 소식" />
          <span className="text-[#aaaaaa]">2025.07.16</span>
        </div>
        <p className="font-bold text-xl mt-3">
          플레이브 스밍 관련 모든 정보가 있는 음총팀 바로가기!
        </p>
      </Link>
    </li>
  );
}
