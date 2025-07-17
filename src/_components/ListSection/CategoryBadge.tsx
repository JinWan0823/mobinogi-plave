export default function CategoryBadge({ category }: { category: string }) {
  return (
    <span
      className="p-1 px-4 text-[#aaaaaa] 
      border-1 border-1-[#aaaaaa] rounded-full"
    >
      {category}
    </span>
  );
}
