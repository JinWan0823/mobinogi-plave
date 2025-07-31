import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useAlert } from "@/_context/AlertProvider";
import { useRouter } from "next/navigation";

export default function useAdm() {
  const [viewPwd, setViewPwd] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberId, setRememberId] = useState(false);

  const { showAlert } = useAlert();
  const router = useRouter();

  useEffect(() => {
    const savedId = localStorage.getItem("savedId");

    if (savedId) {
      setUsername(savedId);
      setRememberId(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      showAlert("아이디 또는 비밀번호를 확인하세요.");
    } else if (res?.ok) {
      if (rememberId) {
        localStorage.setItem("savedId", username);
      } else {
        localStorage.removeItem("savedId");
      }
      router.push("/");
    }
  };

  return {
    viewPwd,
    setViewPwd,
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
    rememberId,
    setRememberId,
  };
}
