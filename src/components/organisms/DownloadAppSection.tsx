import MainButton from "../atoms/MainButton";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
export default function DownloadAppSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-20">
      <div className="flex flex-col gap-5 items-end text-end">
        <h2 className="text-2xl md:text-4xl font-bold">
          حمل <span className="text-[var(--secondary-color)]">حـــارس</span>{" "}
          الآن وتمتع بالأمان!
        </h2>
        <p className="md:text-lg">
          خلك مطمئن مع حارس – تطبيق ذكي يحمي أعمالك وينبهك أول بأول!
          <br />
          حمله الآن وخلّيك في الأمان.
        </p>
        <div className="download-buttons flex flex-wrap gap-4 justify-end">
          <MainButton icon={FaGooglePlay}>Google Play</MainButton>
          <MainButton icon={FaApple}>App Store</MainButton>
        </div>
      </div>

      <img
        src="../../../public/assets/sections/haras-download-section.svg"
        alt="haras download section"
      />
    </section>
  );
}
