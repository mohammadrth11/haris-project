import { Download } from "lucide-react";
import MainButton from "../atoms/MainButton";
const handleDownloadClick = () => {
  alert("test");
};

export default function HeroSection() {
  return (
    <section className=" py-20 min-h-screen flex flex-col items-center justify-center gap-y-10 text-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        معك <span className="text-[var(--main-color)]">في كل نقرة</span> ...
        لنحميك من كل خدعة!
      </h1>
      <p className="mb-4 md:text-lg ">
        نحميك من الاحتيال قبل أن يحدث. حارس يرصد ويحلل ويحذّر باستخدام الذكاء
        الاصطناعي والتنبيهات المجتمعية.
      </p>
      <MainButton onClick={handleDownloadClick} icon={Download}>
        حمّله الآن
      </MainButton>
      <img
        src="../../../public/assets/sections/haris-hero-section.svg"
        alt="haris-hero-section-image"
        className="mt-5"
      />
    </section>
  );
}
