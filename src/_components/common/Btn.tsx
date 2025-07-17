interface BtnProps {
  title: string;
  size: string;
}

export default function Btn({ title, size }: BtnProps) {
  return (
    <button
      className={`title bg-white
      text-${size} p-1 px-6 
      rounded-full border-2 border-point`}
    >
      {title}
    </button>
  );
}
