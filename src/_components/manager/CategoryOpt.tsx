"use client";

import { mobinogiClasses } from "@/_hooks/useGuide";
import { SetStateAction, useEffect, useState } from "react";
import { FaSortDown } from "react-icons/fa";

interface CategoryProps {
  selectedClasses: string;
  setSelectedClasses: React.Dispatch<SetStateAction<string>>;
}

export default function CategoryOpt({
  selectedClasses,
  setSelectedClasses,
}: CategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (cls: string) => {
    setSelectedClasses(cls);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[full]">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2
        border border-[#dfdfdf] rounded-lg
        cursor-pointer relative"
      >
        {selectedClasses}
        <FaSortDown className="text-point absolute right-[4px] top-1/2 translate-y-[-75%]" />
      </div>
      {isOpen && (
        <ul
          className="absolute top-full left-0
          w-full max-h-[200px] mt-2 bg-white
          border border-[#dfdfdf] rounded-lg
          overflow-y-scroll z-10 "
        >
          {mobinogiClasses.map((cls) => (
            <li
              key={cls}
              className="px-[10px] py-2
              hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(cls)}
            >
              {cls}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
