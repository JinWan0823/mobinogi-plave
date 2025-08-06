import ArrowAnimation from "../common/ArrowAnimation";
import List from "../ListSection/List";
import MainBoardList from "../ListSection/MainBoardList";

export default function ListSection() {
  return (
    <section className="py-16 md:py-28 lg:py-40 relative">
      <ArrowAnimation />

      <div
        className="inner flex flex-col items-start justify-between gap-2
        md:flex-row"
      >
        <List />
        <MainBoardList />
      </div>
    </section>
  );
}
