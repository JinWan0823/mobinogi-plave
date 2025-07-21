import SideBar from "@/_components/manager/SideBar";

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SideBar />
      <main className="p-6 ml-[260px] min-h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
