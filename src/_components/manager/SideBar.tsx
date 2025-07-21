import SideBarList from "./SideBarList";

const managerMenu = [
  { title: "유튜브 동영상 목록", link: "/guide/list" },
  { title: "유튜브 동영상 등록", link: "/guide/write" },
  { title: "공지사항&이벤트", link: "/notice" },
  { title: "자유게시판", link: "/help" },
];

export default function SideBar() {
  return (
    <aside
      className="sidebar w-[260px] h-full
      px-5 pt-[100px]
      fixed top-0 left-0
      bg-[#fff]
      shadow-xl
      border-r-1 border-[#eee]"
    >
      <p className="text-xl font-bold">MANAGER MENU</p>
      <ul className="mt-4 text-[#aaaaaa] font-bold">
        {managerMenu.map((item, idx) => (
          <SideBarList key={idx} title={item.title} link={item.link} />
        ))}
      </ul>
    </aside>
  );
}
