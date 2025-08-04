"use client";

import LoadingSpinner from "../common/LoadingSpinner";
import { convertToKstTime } from "@/_lib/convertToKstTime";
import DeleteBtn from "./DeleteBtn";
import PostNavigator from "./PostNavigator";
import CommentWrap from "./CommentWrap";

interface BoardPost {
  _id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  name: string;
}

export default function ViewWrap({ post }: { post: BoardPost }) {
  return (
    <>
      {post && <DeleteBtn name={post.name} id={post._id} />}
      <div className="w-full">
        {post ? (
          <>
            <h1 className="font-bold text-4xl">{post.title}</h1>
            <div
              className="overview mt-2 pb-4
              flex items-center justify-between"
            >
              <div className="lf-box text-lg flex items-center">
                <span className="w-[80px] h-[3px] bg-[#000] mr-2" />
                <p>
                  <span className="font-bold mr-2">CATEGORY</span>
                  {post.category}
                </p>
              </div>
              <div className="rf-box flex itesm-center gap-1 text-sm text-[#aaaaaa]">
                <span>작성일</span>|
                <span>{convertToKstTime(post.createdAt)}</span>|
                <span>{post.name}</span>
              </div>
            </div>

            <div
              className="content-box pt-[90px] pb-[120px]
              border-t-1 border-[#333]
              text-center"
            >
              <p>{post.content}</p>
            </div>
            <CommentWrap />
            <PostNavigator />
          </>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
}
