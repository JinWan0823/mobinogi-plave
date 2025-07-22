import YoutubeForm from "@/_components/manager/YoutubeForm";

export default function GuideWritePage() {
  return (
    <section className="w-[1240px] mx-auto p-6 pt-[100px]">
      <p className="text-3xl font-bold">유튜브 동영상 등록</p>
      <YoutubeForm />
    </section>
  );
}
