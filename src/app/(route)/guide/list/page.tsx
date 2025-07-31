"use client";
import CategoryOpt from "@/_components/manager/CategoryOpt";
import YoutubeList from "@/_components/manager/YoutubeList";
import useAuthRedirect from "@/_hooks/useAuthRedirect";
import useYoutubeManager from "@/_hooks/useYoutubeManager";
import { GrPowerReset } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

export default function GuideListPage() {
  const {
    allVideos,
    selectedClasses,
    setSelectedClasses,
    checkedAll,
    handleCheckAll,
    checkedItems,
    handleCheckItem,
    handleDeleteList,
  } = useYoutubeManager();

  const status = useAuthRedirect(); // 로그인 상태 감시 및 리디렉션

  if (status === "loading") return null;

  return (
    <section className="w-[1240px] mx-auto p-6 pt-[100px]">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold">유튜브 동영상 목록</p>
        <div className="flex gap-2 items-center">
          <div className="w-[200px]">
            <CategoryOpt
              selectedClasses={selectedClasses}
              setSelectedClasses={setSelectedClasses}
            />
          </div>
          <button
            type="button"
            className="p-2 text-sm
            flex items-center gap-2
            bg-[#eee] rounded-lg"
            onClick={() => setSelectedClasses("꿀팁")}
          >
            초기화 <GrPowerReset />
          </button>
          <button
            type="button"
            className="p-2 text-sm text-white
            flex items-center gap-2
            bg-red-400 rounded-lg"
            onClick={handleDeleteList}
          >
            삭제 <MdDelete />
          </button>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl shadow-xl border-1 border-[#dfdfdf] mt-4">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 border-b-1 border-gray-300">
            <tr>
              <th className="px-4 py-3 w-10">
                <input
                  type="checkbox"
                  checked={checkedAll}
                  onChange={handleCheckAll}
                />
              </th>
              <th className="px-4 py-3">썸네일</th>
              <th className="px-4 py-3">제목</th>
              <th className="px-4 py-3">카테고리</th>
              <th className="px-4 py-3">등록일</th>
              <th className="px-4 py-3">상태</th>
            </tr>
          </thead>
          <tbody>
            {allVideos.map((item, idx) => (
              <YoutubeList
                key={idx}
                item={item}
                idx={idx}
                checked={checkedItems[idx]}
                handleCheckItem={handleCheckItem}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
