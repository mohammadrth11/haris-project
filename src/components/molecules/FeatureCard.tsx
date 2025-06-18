import { type LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  number: number;
};
export default function FeatureCard({
  title,
  description,
  icon: Icon,
  number,
}: FeatureCardProps) {
  return (
    <div className="relative p-6 text-end flex flex-col items-end gap-4 max-w-sm">
      <span className="absolute text-[20rem] text-white/10 font-black  -top-30 -left-30">
        {number}
      </span>
      <div className="bg-[var(--main-color)] text-white p-3 rounded-full ">
        <Icon size={28} />
      </div>
      <h3 className="text-white text-lg font-bold ">{title}</h3>
      <p className="text-white text-sm">{description}</p>
    </div>
  );
}
