import { SetStateAction } from "react";

interface InputProps {
  type: string;
  value: string;
  onChange: React.Dispatch<SetStateAction<string>>;
}

export default function Input({ type, value, onChange }: InputProps) {
  return (
    <div>
      <label className="block">
        {type === "text" ? "닉네임" : "비밀번호"}{" "}
        <span className="text-red-400">*</span>
      </label>
      <input
        type={type}
        className="w-[240px] p-1 px-2 border-[#dfdfdf] border-1 rounded-lg"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        // placeholder={type === "text" ? "닉네임" : "비밀번호"}
      />
    </div>
  );
}
