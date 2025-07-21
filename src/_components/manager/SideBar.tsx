import SideBarList from "./SideBarList";

export default function SideBar() {
  return (
    <aside
      className="w-[260px] h-full
      px-5 pt-[100px]
      fixed top-0 left-0
      bg-[#dfdfdf]
      border-r-1 border-[#eee]"
    >
      <p className="text-xl font-bold">MANAGER MENU</p>
      <ul className="mt-4 text-[#aaaaaa] font-bold">
        <SideBarList link="/guide/list" title="유튜브 동영상 목록" />
        <SideBarList link="/guide/write" title="유튜브 동영상 등록" />
        <SideBarList link="/update" title="공지사항&이벤트" />
        <SideBarList link="/pp" title="자유게시판" />
      </ul>
    </aside>
  );
}
