"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { SERVICES } from "../data/services";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** ACTIVE CHECK */
  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  const navClass = (href) => `
  nav-link transition-all duration-300
  ${isSticky ? "text-[13px] py-1" : "text-[15px] py-2"}
  ${pathname === href || pathname.startsWith(href + "/")
      ? "!text-[#faa61a] font-semibold"
      : "text-white hover:!text-white"}
`;

  return (
    <header
      className={`
        transition-all duration-500 ease-in-out header header_style_01 show-header
        ${isSticky ? "fixed-menu" : "relative"}
      `}
    >
      <nav className="navbar header-nav navbar-expand-lg ">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
          <button onClick={() => router.push("/")} className="pt-1">
            <Image
              src="/images/dgpulse-logo.png"
              alt="DigitalPulse Logo"
              width={210}
              height={50}
              priority
              className={`transition-all duration-500 ${isSticky ? "h-[52px]" : "h-[54px]"
                }`}
            />
          </button>
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex navbar-nav items-center gap-6">

              <li>
                <button onClick={() => router.push("/")} className={navClass("/")}>
                  Home
                </button>
              </li>

              <li>
                <button onClick={() => router.push("/aboutus")} className={navClass("/aboutus")}>
                  About
                </button>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={`${navClass("/services")} flex items-center gap-1`}>
                  Services ▾
                </button>

                <div
                  className={`absolute left-1/2 top-full mt-4 w-[520px]
                  -translate-x-1/2 bg-white shadow-xl rounded-2xl p-6
                  grid grid-cols-2 gap-4 border transition-all duration-300
                  ${servicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"}`}
                >
                  {SERVICES.map(([label, href]) => (
                    <button
                      key={href}
                      onClick={() => router.push(href)}
                      className={`text-left text-sm font-medium transition
                        ${isActive(href)
                          ? "text-[#faa61a]"
                          : "text-gray-700 hover:text-[#faa61a]"}
                      `}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </li>

              <li>
                <button onClick={() => router.push("/project")} className={navClass("/project")}>
                  Projects
                </button>
              </li>

              <li>
                <button onClick={() => router.push("/contact")} className={navClass("/contact")}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => router.push("/contact")}
              className="bg-[#faa61a] text-[#0b2148] px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Get Started
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="block w-6 h-[2px] bg-white mb-1" />
            <span className="block w-6 h-[2px] bg-white mb-1" />
            <span className="block w-6 h-[2px] bg-white" />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden bg-[#051533] z-10 transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-[600px]" : "max-h-0"
            }`}
        >
          <ul className="px-4 py-4 space-y-3 navbar-nav">

            <li>
              <button onClick={() => router.push("/")} className={navClass("/")}>
                Home
              </button>
            </li>

            <li>
              <button onClick={() => router.push("/aboutus")} className={navClass("/aboutus")}>
                About
              </button>
            </li>

            {/* MOBILE SERVICES */}
            <li>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`${navClass("/services")} w-full flex justify-between`}
              >
                Services <span>{servicesOpen ? "−" : "+"}</span>
              </button>

              {servicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {SERVICES.map(([label, href]) => (
                    <button
                      key={href}
                      onClick={() => {
                        router.push(href);
                        setMenuOpen(false);
                        setServicesOpen(false);
                      }}
                      className={`block text-sm transition
                        ${isActive(href)
                          ? "text-[#faa61a] font-semibold"
                          : "text-gray-300 hover:text-[#faa61a]"}
                      `}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </li>

            <li>
              <button onClick={() => router.push("/project")} className={navClass("/project")}>
                Projects
              </button>
            </li>

            <li>
              <button onClick={() => router.push("/contact")} className={navClass("/contact")}>
                Contact
              </button>
            </li>

            <li className="pt-3">
              <button
                onClick={() => router.push("/contact")}
                className="w-full bg-[#faa61a] text-[#0b2148] py-3 rounded-lg font-semibold"
              >
                Get Started
              </button>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}
