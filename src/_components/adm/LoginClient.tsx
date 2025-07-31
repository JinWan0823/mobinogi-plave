"use client";

import useAdm from "@/_hooks/useAdm";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function LoginClient() {
  const {
    viewPwd,
    setViewPwd,
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
    rememberId,
    setRememberId,
  } = useAdm();
  return (
    <section
      className="w-full h-full min-h-[100vh] flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: "url(/main/mobinogi_banner.png)" }}
    >
      <div className="p-4 py-8 w-[98%] max-w-[450px] rounded-[12px] bg-[#fff] shadow-xl border-1 border-[#dfdfdf]">
        <Link href={"/"}>
          <h1 draggable="false" className="text-2xl text-point text-center">
            MOBINOGI - PLAVE
          </h1>
        </Link>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="border-1 border-gray-300 w-full mt-2 p-2 outline-[#f37812]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative mt-2">
            <input
              type={`${viewPwd ? "text" : "password"}`}
              className="border-1 border-gray-300 w-full p-2 outline-[#f37812]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="none absolute top-1/2 right-2 -translate-y-1/2 text-lg text-point"
              onClick={() => setViewPwd((prev) => !prev)}
            >
              {viewPwd ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex items-center mt-1">
            <input
              type="checkbox"
              id="save-id"
              onChange={() => setRememberId((prev) => !prev)}
              checked={rememberId}
            />
            <label htmlFor="save-id" className="text-sm ml-1 text-gray-400">
              아이디 저장
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded bg-point py-2 text-white font-bold  mt-8"
          >
            로그인
          </button>
        </form>
      </div>
    </section>
  );
}
