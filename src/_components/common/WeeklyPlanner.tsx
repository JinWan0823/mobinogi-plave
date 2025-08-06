"use client";

import { useEffect, useState } from "react";
import WeeklyList from "./WeeklyList";
import WeeklyDate from "./WeeklyDate";
import { IoMdClose } from "react-icons/io";

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
  const [noneWeekly, setNoneWeekly] = useState(true);

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

  useEffect(() => {
    const stored = localStorage.getItem("limitTime");

    if (!stored) {
      setNoneWeekly(true);
      return;
    }
    const limitTime = new Date(stored);
    if (isNaN(limitTime.getTime())) {
      setNoneWeekly(true);
      return;
    }

    const isExpired = new Date() > limitTime;

    if (isExpired) {
      setNoneWeekly(true);
      localStorage.removeItem("limitTime");
    } else {
      setNoneWeekly(false);
    }
  }, []);

  const handleClosePlanner = () => {
    const now = new Date();
    const after24h = new Date(now.getTime() + 1000 * 60 * 60 * 24);

    localStorage.setItem("limitTime", after24h.toISOString());
    setNoneWeekly(false);
  };

  return !noneWeekly ? null : (
    <div className="fixed top-1/2 left-[10px] -translate-y-1/2 z-9999 md:left-[40px]">
      <button
        type="button"
        onClick={handleClosePlanner}
        className="px-1 mb-1 text-sm flex items-center border-b-1 bg-[#dfdfdf] rounded"
      >
        <IoMdClose /> 24시간동안 보지않기
      </button>
      <div
        className="
        p-4 w-[95%] max-w-[400px]
        bg-center bg-cover
        shadow-xl
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
    </div>
  );
}
