import Image from "next/image";
import LinkList from "../LinkSection/LinkList";
import { links } from "@/_data/links";

export default function LinkSection() {
  return (
    <section
      className="w-full relative bg-cover bg-fixed"
      style={{ backgroundImage: "url(/main/mobinogi_banner.png)" }}
    >
      <div className="absolute inset-0 bg-point opacity-65" />
      <div
        className="w-[1240px] mx-auto py-[120px] relative
        flex flex-col items-center justify-center
        z-999"
      >
        <Image
          src={"/main/collaboration.png"}
          alt="마비노기 모바일, 플레이브 로고"
          width={242}
          height={70}
        />
        <ul
          className="w-full mt-16
        flex flex-wrap items-center justify-between gap-y-10"
        >
          {links.map((item, idx) => (
            <LinkList key={idx} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
