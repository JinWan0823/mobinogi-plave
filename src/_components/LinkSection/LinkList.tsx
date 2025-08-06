import Image from "next/image";
import Link from "next/link";

interface LinkListProps {
  title: string;
  icon: string;
  href: string;
}

interface ItemPropsd {
  item: LinkListProps;
}

export default function LinkList({ item }: ItemPropsd) {
  return (
    <li className="w-full">
      <Link
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center w-full h-[60px] rounded-[20px]
        px-4 md:px-5 bg-[#ffffffab] hover:bg-white transition-colors"
      >
        <Image src={item.icon} alt="" width={33} height={33} />
        <p className="ml-2 font-bold text-sm md:text-base">{item.title}</p>
      </Link>
    </li>
  );
}
