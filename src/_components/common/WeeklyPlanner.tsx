"use client";

import { useEffect, useState } from "react";
import WeeklyList from "./WeeklyList";
import WeeklyDate from "./WeeklyDate";

const weeklyPlan = [
  "어비스 3종 클리어",
  "글라그기브넨 매우어려움 클리어",
  "화이트 서큐버스 클리어",
  "마물 퇴치 증표 교환",
  "필드보스 3종 토벌",
  "주말 레이드/어비스 이벤트 참여",
];

export default function WeeklyPlanner() {
  const [notes, setNotes] = useState("");
  const [checkedList, setCheckedList] = useState<boolean[]>([]);

  useEffect(() => {
    const memo = localStorage.getItem("notes");
    const checks = localStorage.getItem("checkedList");

    if (memo) {
      setNotes(memo);
    }

    if (checks) {
      setCheckedList(JSON.parse(checks));
    } else {
      setCheckedList(Array(weeklyPlan.length).fill(false));
    }
  }, []);

  const handleNotes = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
    localStorage.setItem("notes", e.target.value);
  };

  const toggleChecked = (idx: number) => {
    const newList = [...checkedList];
    newList[idx] = !newList[idx];
    setCheckedList(newList);
    localStorage.setItem("checkedList", JSON.stringify(newList));
  };

  return (
    <div
      className="
      p-4 w-[400px]
      fixed top-1/2 left-[40px] -translate-y-1/2
      bg-center bg-cover
      z-9999 shadow-xl
      "
      style={{ backgroundImage: `url(/main/paper2.jpg)` }}
    >
      <div
        className="w-full p-4
        border-1"
      >
        <h2 className="weekly-planner text-xl text-center">WEEKLY PLANNER</h2>
        <WeeklyDate />
        <ul>
          {weeklyPlan.map((item, idx) => (
            <WeeklyList
              title={item}
              key={idx}
              idx={idx}
              checked={checkedList[idx] || false}
              toggleChecked={toggleChecked}
            />
          ))}
        </ul>
        <textarea
          placeholder="NOTES"
          className="w-full h-[90px] mt-4 p-1 px-2 
          border-1 border-[#333] rounded
          outline-[#333]"
          value={notes}
          onChange={handleNotes}
        />
      </div>
    </div>
  );
}
