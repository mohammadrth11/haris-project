import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

export default function FooterForm() {
  return (
    <div className="content">
      <p className="w-[100%]  lg:w-140 mb-5">
        يتميز "حارس" بتقنية الذكاء الاصطناعي التنبؤية، حيث يتم تحليل سلوك
        الروابط والرسائل الواردة والتعرف التلقائي على الأنماط الاحتيالية، مما
        يساهم في التحذير قبل وقوع الضرر.
      </p>
      <div className="relative w-[70%] ms-auto">
        <Input
          type="email"
          placeholder="name@address.com"
          className="rounded-full h-13 pe-12 text-end"
        />
        <button
          type="submit"
          className="absolute start-2 top-1/2 -translate-y-1/2 text-[var(--text-color)] hover:text-[var(--main-color)] cursor-pointer"
        >
          <ArrowLeft />
        </button>
      </div>
    </div>
  );
}
