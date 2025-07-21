import { useRouter } from "next/navigation";
import { IoIosSettings } from "react-icons/io";

export default function ManagerBtn({ link }: { link: string }) {
  const router = useRouter();

  const handleManagerBtn = () => {
    router.push(link);
  };

  return (
    <button
      type="button"
      onClick={handleManagerBtn}
      className="flex items-center text-[#aaaaaa]"
    >
      <IoIosSettings className="text-xl" /> 수정
    </button>
  );
}
