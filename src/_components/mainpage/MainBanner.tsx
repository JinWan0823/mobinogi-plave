import Image from "next/image";

export default function MainBanner() {
  return (
    <div className="w-full min-h-[100vh] bg-main relative overflow-hidden">
      <div className="inner text-center pt-70">
        <h1 className="text-8xl text-white">
          모비노기 데이안 서버 <br />
          플레이브 길드
        </h1>
        <h2 className="text-2xl my-4 text-white">
          한눈에 보는 모비노기와 플레이브 소식!
          <br />
          개인 정보가 필요없는 공유 홈페이지!
        </h2>

        <button
          className={`title bg-white text-point
          text-2xl py-3 px-16
          rounded-full border-2 border-point`}
        >
          Main Btn
        </button>
      </div>

      <Image
        draggable="false"
        src={"/main/plave_banner.png"}
        width={1640}
        height={575}
        alt="플레이브 로고 이미지"
        className="absolute bottom-[-120px] left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
