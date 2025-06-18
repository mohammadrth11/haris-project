const quickLinks = [
  { label: "الدعم الفني", href: "#" },
  { label: "استفسارات عامة", href: "#" },
  { label: "خدمة العملاء", href: "#" },
];

export default function FooterQuickLinks() {
  return (
    <>
      <ul className="flex flex-col gap-3 items-end">
        <li className="relative font-bold text-[18px] mb-4">
          روابط سريعة{" "}
          <span className="w-20 h-0.5 bg-[var(--text-color)] absolute -bottom-2 right-0 "></span>
        </li>

        {quickLinks.map((link) => (
          <li className="flex gap-3">
            <a
              href={link.href}
              className="hover:text-[var(--main-color)] transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
