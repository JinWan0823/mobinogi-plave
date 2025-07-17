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
    <li className="">
      <Link
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-5
              w-[220px] h-[60px] rounded-[20px]
              bg-[#ffffffab]"
      >
        <Image src={item.icon} alt="" width={33} height={33} />
        <p className="ml-2 font-bold">{item.title}</p>
      </Link>
    </li>
  );
}
