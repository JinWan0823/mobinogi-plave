import { useEffect, useState } from "react";

export default function useYoutubeManager() {
  const [allVideos, setAllVideos] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/guide");
      if (!res.ok) throw new Error("서버 응답 실패");
      const data = await res.json();
      setAllVideos(data);
    } catch (error) {
      console.error("유튜브 리스트 로딩 실패", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { allVideos };
}
