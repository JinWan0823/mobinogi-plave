"use client";
import { mobinogiClasses } from "@/_data/mobinogiClasses";
import ClassBtn from "../Youtube/ClassBtn";
import { useState } from "react";

export default function YoutubeSection() {
  const [activeIdx, setActiveIdx] = useState(0);

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
          <li className="w-[464px] h-[260px] bg-[#aaaaaa] rounded-[20px]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/f6KUzIry8oM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-[20px]"
            />
          </li>
          <li className="w-[464px] h-[260px] bg-[#aaaaaa] rounded-[20px]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/6pW7OS1FAxI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-[20px]"
            />
          </li>
          <li className="w-[464px] h-[260px] bg-[#aaaaaa] rounded-[20px]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1kQT1fdncVM&t=1820s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-[20px]"
            />
          </li>
          <li className="w-[464px] h-[260px] bg-[#aaaaaa] rounded-[20px]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7lvi7-1uyyc&t=154s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-[20px]"
            />
          </li>
          <li className="w-[464px] h-[260px] bg-[#aaaaaa] rounded-[20px]"></li>
          <li className="w-[464px] h-[260px] bg-[#aaaaaa] rounded-[20px]"></li>
        </ul>
      </div>
    </section>
  );
}
