"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminBadge() {
  const { data: session } = useSession();

  const router = useRouter();

  const handleLogout = async () => {
    const logout = confirm("로그아웃 하시겠습니까?");

    // if (logout) {
    //   signOut({ callbackUrl: "/" });
    // }
    if (!logout) return;

    await signOut({ redirect: false });
    router.push("/");
  };

  const handleLogin = () => {
    router.push("/adm");
  };

  if (session?.user) {
    return (
      <button
        onClick={handleLogout}
        className="title bg-white
        p-1 px-2  text-sm
        rounded-full border-2 border-point
        sm:text-lg sm:px-4
        md:px-6"
      >
        관리자 로그아웃
      </button>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="title bg-white
        p-1 px-2  text-sm
        rounded-full border-2 border-point
        sm:text-lg sm:px-4
        md:px-6"
    >
      Login
    </button>
  );
}
