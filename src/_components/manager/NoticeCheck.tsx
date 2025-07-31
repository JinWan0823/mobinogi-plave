import { SetStateAction } from "react";
import { FaCheck } from "react-icons/fa";

interface NoticeCheckProps {
  setNoticeChk: React.Dispatch<SetStateAction<boolean>>;
  title: string;
}

export default function NoticeCheck({ title, setNoticeChk }: NoticeCheckProps) {
  return (
    <div className="flex items-center mt-4">
      <input
        type="checkbox"
        id="notice-chk"
        className="peer hidden"
        onChange={() => setNoticeChk((prev) => !prev)}
      />
      <label
        htmlFor="notice-chk"
        className="px-4 py-2 bg-gray-300
        flex items-center gap-1
        border-2 border-[#dfdfdf] rounded 
        transition-all duration-150
        cursor-pointer
        peer-checked:bg-[#ff69b4]
        peer-checked:text-white"
      >
        <FaCheck /> {title}
      </label>
    </div>
  );
}
