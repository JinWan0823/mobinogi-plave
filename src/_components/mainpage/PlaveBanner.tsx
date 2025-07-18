import Image from "next/image";

export default function PlaveBanner() {
  return (
    <section
      className="bg-cover bg-center relative py-28"
      style={{ backgroundImage: "url(/main/plave_banner2.png)" }}
    >
      <div
        className="w-full h-full
        absolute inset-0 bg-[#000000de]"
      />

      <div className="inner relative z-999">
        <div className="text-center flex flex-col justify-center items-center">
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
        <div className="flex mt-8 gap-4">
          <li className="w-[464px] h-[260px] bg-[#aaaaaa] rounded-[20px]"></li>
          <li className="w-[464px] h-[260px] bg-[#aaaaaa] rounded-[20px]"></li>
          <li className="w-[464px] h-[260px] bg-[#aaaaaa] rounded-[20px]"></li>
        </div>
      </div>
    </section>
  );
}
