import { harisWithYouImages } from "@/data/harisWithYou";

export default function AlwaysWithYouSection() {
  return (
    <section className=" py-5 text-center text-white overflow-hidden">
      <div className=" relative z-2">
        <h2 className="text-2xl md:text-4xl font-bold mb-5">
          <span className="text-[var(--secondary-color)]">حــــارس</span>
          معك دائمًا… واطمئنانك أولويتنا
        </h2>
        <p className="mb-20 md:mb-20 max-w-2xl mx-auto md:text-lg">
          سواء كنت في مجلسك أو في طريقك، تطبيق حــارس يحميك من الروابط والأرقام
          المشبوهة بذكاء وبدون تعقيد واجهة بسيطة، تقنيات متقدمة، وتجربة تُشعرك
          بالأمان في كل لحظة.
        </p>

        <div className="flex justify-center md:justify-between items-center gap-y-15 gap-x-5 flex-wrap relative z-2">
          {harisWithYouImages.map((ele) => (
            <img src={ele.src} alt={ele.alt} className={ele.className} />
          ))}
        </div>
      </div>
    </section>
  );
}
