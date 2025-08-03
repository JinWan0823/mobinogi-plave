import { useEffect, useState } from "react";

export default function useYoutube() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchVideos = async () => {
    try {
      const res = await fetch("/api/youtube");
      if (!res.ok) throw new Error("서버 응답 실패");
      const data = await res.json();
      setVideos(data);
      setLoading(true);
    } catch (err) {
      console.error("서버 에러", err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return {
    videos,
    loading,
  };
}
