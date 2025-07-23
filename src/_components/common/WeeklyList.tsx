export default function WeeklyList({
  title,
  idx,
  checked,
  toggleChecked,
}: {
  title: string;
  idx: number;
  checked: boolean;
  toggleChecked: (idx: number) => void;
}) {
  return (
    <li
      className="flex items-center gap-2 py-2 px-1
            border-b-1 border-[#333]"
    >
      <input
        type="checkbox"
        id={`chk-box-${idx}`}
        className="accent-[#000]"
        checked={checked}
        onChange={() => toggleChecked(idx)}
      />
      <label htmlFor={`chk-box-${idx}`} className="cursor-pointer">
        {title}
      </label>
    </li>
  );
}
