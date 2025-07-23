import WeeklyPlanner from "@/_components/common/WeeklyPlanner";
import LinkSection from "@/_components/mainpage/LinkSection";
import ListSection from "@/_components/mainpage/ListSection";
import MainBanner from "@/_components/mainpage/MainBanner";
import PlaveBanner from "@/_components/mainpage/PlaveBanner";
import YoutubeSection from "@/_components/mainpage/YouTubeSection";

export default function Home() {
  return (
    <>
      <MainBanner />
      <ListSection />
      <LinkSection />
      <YoutubeSection />
      <PlaveBanner />
      <WeeklyPlanner />
    </>
  );
}
