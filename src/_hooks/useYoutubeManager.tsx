import { ListProps } from "@/_components/manager/YoutubeList";
import { useEffect, useState } from "react";

export default function useYoutubeManager() {
  const [allVideos, setAllVideos] = useState<ListProps[]>([]);
  const [selectedClasses, setSelectedClasses] = useState("꿀팁");
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState(
    new Array(allVideos.length).fill(false)
  );
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleCheckAll = () => {
    setCheckedAll((prev) => !prev);
    setCheckedItems(new Array(allVideos.length).fill(!checkedAll));

    if (!checkedAll) {
      setSelectedIds(allVideos.map((item) => item._id)); // 모두 선택
    } else {
      setSelectedIds([]); // 모두 해제
    }
  };

  const handleCheckItem = (idx: number, id: string) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[idx] = !updatedCheckedItems[idx];
    setCheckedItems(updatedCheckedItems);

    if (updatedCheckedItems[idx]) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((itemId) => itemId !== id));
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/guide?category=${selectedClasses}`);
      if (!res.ok) throw new Error("서버 응답 실패");
      const data = await res.json();
      setAllVideos(data);
      setSelectedIds([]); // 모두 해제
      setCheckedAll(false);
      setCheckedItems(new Array(data.length).fill(false));
    } catch (error) {
      console.error("유튜브 리스트 로딩 실패", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedClasses]);

  return {
    allVideos,
    selectedClasses,
    setSelectedClasses,
    selectedIds,
    checkedAll,
    handleCheckAll,
    checkedItems,
    handleCheckItem,
  };
}
