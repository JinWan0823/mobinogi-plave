"use client";

import { useRouter } from "next/navigation";

export default function WriteBtn({ type }: { type: string }) {
  const router = useRouter();
  const handleButton = () => {
    router.push(`/${type}/write`);
  };

  return (
    <button
      type="button"
      className="px-6 py-2 rounded bg-point text-white font-bold"
      onClick={handleButton}
    >
      작성하기
    </button>
  );
}
