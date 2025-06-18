import { screenshotsApp } from "@/data/screenshots";

export default function ScreenshotsSection() {
  return (
    <section className="relative py-24 text-center text-white overflow-hidden">
      <img
        src="../../../public/assets/sections/haris-screenshots-section/screen-features.svg"
        alt="screen background"
        className="absolute z-0 top-60 w-full h-auto  "
      />

      <div className=" relative z-2">
        <h2 className="text-2xl md:text-4xl font-bold mb-5">
          <span className="text-[var(--secondary-color)]">حــــارس</span>{" "}
          بلاغات، ذكاء، حماية بلا توقف!
        </h2>
        <p className="mb-20 md:mb-50 max-w-2xl mx-auto md:text-lg">
          مرحبًا بك في عالم حارس، في عالم رقمي يتزايد فيه خطر الاحتيال يومًا بعد
          يوم، يأتي حارس ليمنحك الطمأنينة التي تستحقها. حارس سيكون في الصف الأول
          لحمايتك في كل اللحظات.
        </p>

        <div className="flex justify-center md:justify-between items-center gap-y-15 gap-x-5 flex-wrap relative z-2">
          {screenshotsApp.map((screenshot) => (
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              className={screenshot.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
