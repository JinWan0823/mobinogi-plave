"use client";
import ClassBtn from "../Youtube/ClassBtn";
import { useState } from "react";
import Youtube from "../Youtube/Youtube";
import useGuide, { mobinogiClasses } from "@/_hooks/useGuide";

export default function YoutubeSection() {
  const { videos, activeIdx, setActiveIdx } = useGuide();

  return (
    <section className="w-full py-40">
      <div className="inner">
        <p
          className="text-3xl font-bold
          pb-2 border-b-4 border-[#000]"
        >
          클래스별 유튜브 가이드
        </p>
        <ul className="flex flex-wrap items-center mt-4 gap-2">
          {mobinogiClasses.map((item, idx) => (
            <ClassBtn
              key={idx}
              item={item}
              isActive={activeIdx === idx}
              onClick={() => setActiveIdx(idx)}
            />
          ))}
        </ul>
        <ul className="grid grid-cols-3 gap-4 mt-8">
          {videos.map((item, idx) => (
            <Youtube key={idx} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
