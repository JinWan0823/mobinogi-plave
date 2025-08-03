import { useAlert } from "@/_context/AlertProvider";
import { convertToKstTime } from "@/_lib/convertToKstTime";
import { User } from "next-auth";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import { BiSolidMegaphone } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

interface ListProps {
  item: {
    _id: string;
    title: string;
    category: string;
    name: string;
    createdAt: string;
    commentCount?: number;
    noticeChk?: boolean;
    noticeLink?: string;
  };
  user?: User;
  setUpdateData?: React.Dispatch<SetStateAction<boolean>>;
}

export default function BoardList({ item, user, setUpdateData }: ListProps) {
  const [open, setOpen] = useState(false);
  const { showAlert } = useAlert();

  const handleNoticeBtn = async () => {
    try {
      const res = await fetch("/api/notice", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: item._id,
          notice: !item.noticeChk,
        }),
      });
      if (!res.ok) throw new Error("서버 응답 실패");

      setUpdateData?.((prev) => !prev);
      showAlert("공지를 수정하였습니다.");
    } catch (error) {
      console.error("공지 등록/해제 수정 실패", error);
    }
  };

  const handleDeleteBtn = async () => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      const res = await fetch("/api/notice", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: item._id,
        }),
      });
      if (!res.ok) throw new Error("서버 응답 실패");

      setUpdateData?.((prev) => !prev);
      showAlert("공지를 삭제하였습니다.");
    } catch (error) {
      console.error("공지 삭제 실패", error);
    }
  };

  const handleButton = () => {
    setOpen((prev) => !prev);
  };

  if (item.noticeLink)
    return (
      <li>
        <Link
          href={item.noticeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center p-4 border-b border-[#dfdfdf]"
        >
          <div className="w-[140px] flex justify-center">
            {item.noticeChk ? (
              <span
                className="p-1 px-4 bg-red-400 text-white rounded-full
                flex items-center justify-center gap-1"
              >
                <BiSolidMegaphone /> 중요공지
              </span>
            ) : (
              <span className="p-1 px-4 text-[#aaaaaa] border-1 border-1-[#aaaaaa] rounded-full">
                {item.category}
              </span>
            )}
          </div>
          <div className="flex-1 w-full overflow-hidden">
            <h3 className="text-lg font-semibold px-2 ">{item.title} </h3>
          </div>

          <div className="flex items-center gap-2 text-center">
            <span className="text-sm text-gray-600 w-[100px] ">
              {item.name}
            </span>
            <span className="text-sm text-gray-600 w-[100px]">
              {convertToKstTime(item.createdAt)}
            </span>

            {user && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleButton();
                }}
                className="w-[36px] h-[36px] rounded-full bg-[#dfdfdf]
                flex items-center justify-center
                relative"
              >
                <RiMenu3Fill className="text-xl text-point" />
                {open && (
                  <ul
                    className="bg-[#fff] w-[120px] rounded
                  absolute top-[105%] right-0 text-sm
                  border-1 border-[#dfdfdf] z-999"
                  >
                    <li
                      onClick={handleNoticeBtn}
                      className="w-full py-2 flex items-center justify-center gap-1"
                    >
                      <BiSolidMegaphone />{" "}
                      {item.noticeChk ? "공지 해제" : "공지 등록"}
                    </li>
                    <li
                      onClick={handleDeleteBtn}
                      className="w-full py-2 flex items-center justify-center gap-1 border-t-1 border-[#dfdfdf]"
                    >
                      <MdDeleteOutline /> 삭제
                    </li>
                  </ul>
                )}
              </button>
            )}
          </div>
        </Link>
      </li>
    );

  return (
    <li>
      <Link
        href={`/board/view/${item._id}`}
        className="flex justify-between items-center p-4 border-b border-[#dfdfdf]"
      >
        <div className="w-[140px] flex justify-center">
          <span className="p-1 px-4 text-[#aaaaaa] border-1 border-1-[#aaaaaa] rounded-full">
            {item.category}
          </span>
        </div>
        <div className="flex-1 w-full overflow-hidden">
          <h3 className="text-lg font-semibold px-2 ">
            {item.title}{" "}
            <span className="text-sm ml-1 font-medium text-[#aaa]">
              댓글({item.commentCount})
            </span>
          </h3>
        </div>

        <div className="flex items-center gap-2 text-center">
          <span className="text-sm text-gray-600 w-[100px] ">{item.name}</span>
          <span className="text-sm text-gray-600 w-[100px]">
            {convertToKstTime(item.createdAt)}
          </span>
        </div>
      </Link>
    </li>
  );
}
