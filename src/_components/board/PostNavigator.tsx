"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface PostData {
  post: {
    _id: string;
    title: string;
  };
  prev?: {
    _id: string;
    title: string;
  };
  next?: {
    _id: string;
    title: string;
  };
}

export default function PostNavigator() {
  const { id } = useParams();
  const [postData, setPostData] = useState<PostData | null>(null);

  useEffect(() => {
    if (id) fetchData();
  }, [id]);

  const fetchData = async () => {
    const res = await fetch(`/api/board/${id}/post`);
    const data = await res.json();
    setPostData(data);
  };

  if (!postData) return null;

  return (
    <div className="w-full border-t-1 border-b-1 border-[#aaaaaa]">
      {postData.next && (
        <div className="py-5 px-4">
          <Link href={`/board/view/${postData.next?._id}`} className="flex">
            <span className="flex items-center shrink-0 text-point">
              이전글 <FaCaretUp className="ml-2" />
            </span>
            <p className="w-full pl-4">{postData.next?.title}</p>
          </Link>
        </div>
      )}
      {postData.prev && (
        <div className="py-5 px-4 border-t-1 border-[#dfdfdf]">
          <Link href={`/board/view/${postData.prev?._id}`} className="flex">
            <span className="flex items-center shrink-0 text-point">
              다음글 <FaCaretDown className="ml-2" />
            </span>
            <p className="w-full pl-4">{postData.prev?.title}</p>
          </Link>
        </div>
      )}
    </div>
  );
}
