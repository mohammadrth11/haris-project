import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const icons = [
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaXTwitter />, href: "#" },
  { icon: <FaTiktok />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaFacebookF />, href: "#" },
];

export default function FooterSocialIcons() {
  return (
    <div className="social flex justify-center gap-2 mt-10">
      {icons.map(({ icon, href }, index) => (
        <a
          key={index}
          href={href}
          className="bg-white p-2 rounded-full text-black hover:bg-[var(--main-color)] transition"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
