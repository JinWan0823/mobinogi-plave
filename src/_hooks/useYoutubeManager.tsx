import { useEffect, useState } from "react";

export default function useYoutubeManager() {
  const [allVideos, setAllVideos] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState("전체");

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/guide?category=${selectedClasses}`);
      if (!res.ok) throw new Error("서버 응답 실패");
      const data = await res.json();
      setAllVideos(data);
    } catch (error) {
      console.error("유튜브 리스트 로딩 실패", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedClasses]);
  return { allVideos, selectedClasses, setSelectedClasses };
}
