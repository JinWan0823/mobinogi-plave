import ListPage from "@/_components/Youtube/ListPage";
import { getMetaData } from "@/_lib/metadata";

export const metadata = getMetaData({ page: "guide" });

export default function GuideListPage() {
  return (
    <section className="w-[1240px] mx-auto p-6 pt-[100px]">
      <ListPage />
    </section>
  );
}
