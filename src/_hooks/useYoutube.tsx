import { useEffect, useState } from "react";

export default function useYoutube() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const res = await fetch("/api/youtube");
      if (!res.ok) throw new Error("서버 응답 실패");
      const data = await res.json();
      console.log(data);
      setVideos(data);
    } catch (err) {
      console.error("서버 에러", err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return {
    videos,
  };
}
