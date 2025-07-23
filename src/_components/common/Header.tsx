import Link from "next/link";
import Btn from "./Btn";

export default function Header() {
  return (
    <header
      className="w-full bg-main px-5 py-4
      flex items-center justify-between
      fixed top-0 left-0
      z-9999
      "
    >
      <Link href={"/"}>
        <h1 draggable="false" className="text-white text-3xl">
          MOBINOGI - PLAVE
        </h1>
      </Link>
      <Btn title="Login" size="xl" />
    </header>
  );
}
