"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [active, setActive] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 60);

      if (pathname !== "/") return;

      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push(`/#${id}`);
      setMenuOpen(false);
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      80;

    window.scrollTo({ top: y, behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  const navClass = (id, sticky) =>
    `nav-link transition-all duration-300 ${
      sticky ? "text-[13px] py-1" : "text-[15px] py-2"
    } ${active === id ? "!text-[#faa61a] font-semibold" : ""}`;

  return (
    <header
      className={`header header_style_01 show-header ${
        isSticky ? "fixed-menu" : ""
      }`}
    >
      <nav className="navbar header-nav navbar-expand-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-2 lg:px-4">
          <button
            onClick={(e) => handleNavClick(e, "home")}
            className="navbar-brand pt-1 cursor-pointer bg-transparent border-none"
          >
            <Image
              src="/images/techginia-logo_2024_white.png"
              alt="Techginia Logo"
              width={210}
              height={50}
              priority
              className={`w-auto transition-all duration-500 ${
                isSticky
                  ? "h-[26px] sm:h-[32px] lg:h-[38px]"
                  : "h-[30px] sm:h-[40px] lg:h-[50px]"
              }`}
            />
          </button>
          <button
            className="navbar-toggler lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="h-[1px] bg-white w-[22px] block mt-1" />
            <span className="h-[1px] bg-white w-[22px] block mt-1" />
            <span className="h-[1px] bg-white w-[22px] block mt-1" />
          </button>
          <div className="hidden lg:block">
            <ul className={`navbar-nav flex items-center ${isSticky ? "gap-3" : "gap-4"}`}>
              {["Home", "Services", "Portfolio", "About", "Contact"].map((id) => (
                <li key={id}>
                  <a
                    href={`/#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className={navClass(id, isSticky)}
                  >
                    {id.replace("-", " ")}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="/#schedule-call"
                  onClick={(e) => handleNavClick(e, "schedule-call")}
                  className={`nav-link flex items-center transition-all duration-300 ${
                    active === "schedule-call" ? "!text-[#faa61a] font-semibold" : ""
                  } ${isSticky ? "text-[13px] py-1 px-3" : "text-[15px] py-2 px-4"}`}
                >
                  <Image src="/images/call.png" alt="Call" width={14} height={14} />
                  <span className="ml-2">schedule a free discovery call</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`lg:hidden bg-[#0b2148] overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-[360px]" : "max-h-0"
          }`}
        >
          <ul className="navbar-nav flex flex-col px-2 pb-4 pt-3">
            {["Home", "Services", "Portfolio", "About", "Contact"].map((id) => (
              <li key={id}>
                <a
                  href={`/#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`nav-link py-3 ${
                    active === id ? "!text-[#faa61a] font-semibold" : ""
                  }`}
                >
                  {id.replace("-", " ")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
