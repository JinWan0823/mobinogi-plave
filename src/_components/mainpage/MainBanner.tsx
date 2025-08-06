import Image from "next/image";
import Link from "next/link";

export default function MainBanner() {
  return (
    <div
      className="w-full min-h-[100vh] bg-main relative overflow-hidden
      flex items-center justify-center
    "
    >
      <div className="relative inner text-center z-999">
        <h1
          className="text-4xl text-white
          sm:text-4xl md:text-5xl lg:text-8xl"
        >
          모비노기 데이안 서버 <br />
          플레이브 길드
        </h1>
        <h2 className="text-white md:text-xl md:my-1 lg:text-2xl">
          한눈에 보는 모비노기와 플레이브 소식!
          <br />
          개인 정보가 필요없는 공유 홈페이지!
        </h2>

        <Link
          href={"/board/write"}
          className={`title bg-white text-point inline-block
          py-1 px-10
          rounded-full border-2 border-point
          md:text-2xl md:py-3 md:px-16
          `}
        >
          도움 요청!
        </Link>
      </div>

      {/* 이미지 출처:  https://cafe.daum.net/plave/aaH8/6856?svc=TOPRANK (플레이브 팬카페) */}
      <div className="w-[95%] max-w-[1650px] absolute left-1/2 -translate-x-1/2 z-[0] lg:bottom-[-120px]">
        <Image
          draggable="false"
          src={"/main/plave_banner.png"}
          width={1640}
          height={575}
          alt="플레이브 로고 이미지"
          className="w-full"
        />
      </div>
    </div>
  );
}
