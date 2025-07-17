import ArrowAnimation from "../common/ArrowAnimation";
import List from "../ListSection/List";

export default function ListSection() {
  return (
    <section className="py-40 relative">
      <ArrowAnimation />

      <div className="inner flex items-start justify-between gap-2">
        <List />
        <List />
      </div>
    </section>
  );
}
