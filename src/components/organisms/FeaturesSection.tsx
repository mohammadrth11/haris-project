import {
  SearchCheck,
  BrainCircuit,
  AlertCircle,
  Megaphone,
  Download,
} from "lucide-react";
import FeatureCard from "../molecules/FeatureCard";
import MainButton from "../atoms/MainButton";

const handleDownloadClick = () => {
  alert("test");
};

const features = [
  {
    number: 1,
    title:
      "فحص فوري للروابط والأرقام المشبوهةفحص فوري بالروابط والأرقام المشبوهة",
    description:
      "تحقق من أي رابط أو رقم تتلقاه عبر الرسائل أو التطبيقات قبل أن تضغط عليه. حارس يكشف لك ما إذا كان آمنًا أو تم الإبلاغ عنه مسبقًا.",
    icon: SearchCheck,
  },
  {
    number: 2,
    title: "ذكاء اصطناعي يتنبأ بالاحتيال",
    description:
      "نستخدم خوارزميات تحليل متقدمة لتعلم من ملايين البيانات والأنماط المشبوهة لتكتشف محاولات الاحتيال قبل أن تتم وتنبيهك مباشرة.",
    icon: BrainCircuit,
  },
  {
    number: 3,
    title: "تنبيهات لحظية وقت الخطر",
    description:
      "حارس ينبهك فورًا عند رصد أي محتوى مشبوه سواء كان رابط، رسالة، أو حتى مكالمة.",
    icon: AlertCircle,
  },
  {
    number: 4,
    title: "نظام تبليغ مجتمعي قوي",
    description:
      "كل مستخدم يساهم في الحماية. أبلغ عن أي محاولة احتيال بنقرة واحدة، واجعل النظام يعمل لأجلك ولأجل غيرك.",
    icon: Megaphone,
  },
];

export default function FeaturesSection() {
  return (
    <>
      <section className="py-5 text-center text-white">
        <h2 className="text-3xl font-bold mb-16">
          <span className="text-[var(--secondary-color)]">حارس</span> مميزات
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center mb-30">
          {features.map((featuer) => (
            <FeatureCard {...featuer} />
          ))}
        </div>
        <div className="flex justify-center">
          <MainButton onClick={handleDownloadClick} icon={Download}>
            حمّله الآن
          </MainButton>
        </div>
      </section>
    </>
  );
}
