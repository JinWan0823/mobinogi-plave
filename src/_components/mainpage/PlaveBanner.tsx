"use client";

import { useHorizontalScroll } from "@/_hooks/useHorizontalScroll";
import Image from "next/image";

export default function PlaveBanner() {
  const listWrapperRef = useHorizontalScroll();
  return (
    <section
      className="bg-cover bg-center relative py-28"
      //이미지 출처 - https://namu.wiki/w/%E3%81%8B%E3%81%8F%E3%82%8C%E3%82%93%E3%81%BC(PLAVE)
      style={{ backgroundImage: "url(/main/plave_banner2.png)" }}
    >
      <div
        className="w-full h-full
        absolute inset-0 bg-[#000000de]"
      />

      <div className=" relative z-999">
        <div className="text-center flex flex-col justify-center items-center">
          {/* 이미지 출처 - https://namu.wiki/w/%E3%81%8B%E3%81%8F%E3%82%8C%E3%82%93%E3%81%BC(PLAVE) */}
          <Image
            src={"/main/plave_logo.png"}
            width={240}
            height={90}
            alt="플레이브 로고"
          />
          <p className="title text-xl text-white mt-2">
            플레이브의 최신 유튜브 동영상입니다
          </p>
        </div>

        <ul
          className="scrollbar-none overflow-x-auto gap-4 flex mt-6 px-10"
          ref={listWrapperRef}
        >
          {[1, 2, 3, 4, 5].map((_, i) => (
            <li
              key={i}
              className="w-[464px] h-[260px] bg-[#aaaaaa] rounded-[20px] flex-shrink-0 snap-start"
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
