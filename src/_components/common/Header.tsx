import Link from "next/link";
import AdminBtn from "./AdminBtn";

export default function Header() {
  return (
    <header
      className="w-full bg-main px-2 py-2
      flex items-center justify-between
      fixed top-0 left-0
      z-9999
      sm:px-2 sm:py-2
      md:px-4 md:py-4
      "
    >
      <Link href={"/"}>
        <h1
          draggable="false"
          className="text-white text-xl sm:text-2xl md:text-3xl"
        >
          MOBINOGI - PLAVE
        </h1>
      </Link>
      <AdminBtn />
    </header>
  );
}
