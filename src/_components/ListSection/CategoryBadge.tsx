export default function CategoryBadge({ category }: { category: string }) {
  return (
    <span
      className="text-sm p-1 px-4 text-[#aaaaaa] 
      border-1 border-1-[#aaaaaa] rounded-full
      md:text-base"
    >
      {category}
    </span>
  );
}
