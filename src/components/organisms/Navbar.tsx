import { navbarLinks } from "@/data/navbarLinks";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between  text-[var(--text-color)] py-[68.98px] h-[58.04px]">
      <div className="language">
        <a
          href="#"
          className="text-xs hover:text-[var(--main-color)] transition"
        >
          عربي / EN
        </a>
      </div>

      <ul className="flex items-center justify-between gap-20">
        {navbarLinks.map((link) => (
          <li>
            <Link
              to={link.path}
              className={`relative hover:text-[var(--main-color)] transition ${
                location.pathname === link.path
                  ? "text-[var(--main-color)] font-bold"
                  : ""
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="w-20 h-0.5 bg-[var(--main-color)] absolute -bottom-2 left-1/2 transform -translate-x-1/2 "></span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navbar-logo">
        <img
          src="../../../public/assets/logos/dark-logo.svg"
          alt="Haris-Logo"
        />
      </div>
    </nav>
  );
}
