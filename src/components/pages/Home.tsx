import AlwaysWithYouSection from "../organisms/AlwaysWithYouSection";
import DownloadAppSection from "../organisms/DownloadAppSection";
import FeaturesSection from "../organisms/FeaturesSection";
import HeroSection from "../organisms/HeroSection";
import ScreenshotsSection from "../organisms/ScreenshotsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScreenshotsSection />
      <FeaturesSection />
      <AlwaysWithYouSection />
      <DownloadAppSection />
    </>
  );
}
