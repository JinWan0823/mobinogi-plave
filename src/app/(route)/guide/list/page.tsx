"use client";
import YoutubeList from "@/_components/manager/YoutubeList";
import useYoutubeManager from "@/_hooks/useYoutubeManager";

export default function GuideListPage() {
  const change = () => {};

  const { allVideos } = useYoutubeManager();

  return (
    <section className="w-[1240px] mx-auto p-6 pt-[100px]">
      <p className="text-3xl font-bold">유튜브 동영상 목록</p>
      <div className="overflow-hidden rounded-xl shadow-xl border-1 border-[#dfdfdf] mt-4">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 border-b-1 border-gray-300">
            <tr>
              <th className="px-4 py-3 w-10">
                <input type="checkbox" onChange={change} />
                {/* 전체 선택은 나중에 */}
              </th>
              <th className="px-4 py-3">썸네일</th>
              <th className="px-4 py-3">제목</th>
              <th className="px-4 py-3">카테고리</th>
              <th className="px-4 py-3">등록일</th>
              <th className="px-4 py-3 text-right">상태</th>
            </tr>
          </thead>
          <tbody>
            {allVideos.map((item, idx) => (
              <YoutubeList key={idx} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
