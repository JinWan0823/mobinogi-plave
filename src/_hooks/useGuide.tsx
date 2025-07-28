import { useEffect, useState } from "react";

export const mobinogiClasses = [
  "꿀팁",
  "전사",
  "대검전사",
  "검술사",
  "궁수",
  "석궁사수",
  "장궁병",
  "마법사",
  "빙결술사",
  "화염술사",
  "전격술사",
  "힐러",
  "사제",
  "수도사",
  "음유시인",
  "댄서",
  "악사",
  "도적",
  "격투가",
  "듀얼블레이드",
];

interface VideoItem {
  title: string;
  category: string;
  youtubeLink: string;
  _id: string;
  createdAt: string;
  noticeChk: boolean;
}

export default function useGuide() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);

  const category = encodeURIComponent(mobinogiClasses[activeIdx]);

  const fetchVideos = async () => {
    try {
      const res = await fetch(`/api/guide/${category}`);
      if (!res.ok) throw new Error("서버 응답 실패");
      const data: VideoItem[] = await res.json();
      const sorted = data.sort((a, b) => {
        if (a.noticeChk !== b.noticeChk) {
          return Number(b.noticeChk) - Number(a.noticeChk);
        }
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });

      const limited = sorted.slice(0, 6);

      setVideos(limited);
      setLoading(false);
    } catch (err) {
      console.error("서버 에러", err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [activeIdx]);

  return { videos, setActiveIdx, activeIdx, loading };
}
