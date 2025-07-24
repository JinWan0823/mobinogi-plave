export default function SubBanner() {
  return (
    <div
      className="relative banner w-full h-[380px] bg-[#333] bg-cover"
      style={{ backgroundImage: `url(/main/sub_banner.png)` }}
    >
      <div className="absolute inset-0 bg-[#000] opacity-40"></div>
    </div>
  );
}
