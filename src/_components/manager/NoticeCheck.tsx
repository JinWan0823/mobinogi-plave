import { SetStateAction } from "react";

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
        className="relative w-5 h-5 mr-2 inline-block rounded border-2 border-[#dfdfdf] cursor-pointer transition-all duration-150
            peer-checked:border-blue-500"
      ></label>
      <span className="text-sm select-none">{title}</span>
    </div>
  );
}
