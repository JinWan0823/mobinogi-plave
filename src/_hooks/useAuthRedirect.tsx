"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useAlert } from "@/_context/AlertProvider";

export default function useAuthRedirect() {
  const { showAlert } = useAlert();
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      showAlert("로그인이 필요합니다.");
      router.replace("/adm");
    }
    console.log(session);
  }, [status, showAlert, router]);

  return status;
}
