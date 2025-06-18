import { Mail, MapPin, PhoneCall } from "lucide-react";

const contactLinks = [
  {
    icon: <PhoneCall />,
    label: "+966 52425555",
    href: "tel:+96652425555",
  },
  {
    icon: <Mail />,
    label: "Haris@email.com",
    href: "mailto:Haris@email.com",
  },
  {
    icon: <MapPin />,
    label: "جدة, المملكة العربية السعودية",
    href: "#",
  },
];

export default function FooterContactInfo() {
  return (
    <>
      <ul className="flex flex-col gap-3 items-end">
        <li className="relative font-bold text-[18px] mb-4">
          تواصل معنا{" "}
          <span className="w-20 h-0.5 bg-[var(--text-color)] absolute -bottom-2 right-0 "></span>
        </li>

        {contactLinks.map((link) => (
          <li className="flex gap-3">
            <a
              href={link.href}
              className="hover:text-[var(--main-color)] transition"
            >
              {link.label}
            </a>
            {link.icon}
          </li>
        ))}
      </ul>
    </>
  );
}
