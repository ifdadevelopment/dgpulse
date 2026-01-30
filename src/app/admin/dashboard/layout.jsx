"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  FaEnvelopeOpenText,
  FaSignOutAlt,
  FaBlog,
  FaPlus,
  FaListUl,
  FaComments,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const menu = [
    {
      section: "CONTENT",
      items: [
        {
          name: "Add Blog",
          href: "/admin/dashboard/blogs/add",
          icon: FaPlus,
        },
        {
          name: "Blog List",
          href: "/admin/dashboard/blogs/list",
          icon: FaListUl,
        },
      ],
    },
    {
      section: "ENGAGEMENT",
      items: [
        {
          name: "Blog Comments",
          href: "/admin/dashboard/comments",
          icon: FaComments,
        },
        {
          name: "Contact Enquiries",
          href: "/admin/dashboard/contacts",
          icon: FaEnvelopeOpenText,
        },
        {
          name: "Blog Enquiries",
          href: "/admin/dashboard/blog-enquiries",
          icon: FaBlog,
        },
      ],
    },
  ];

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/admin/login");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* SIDEBAR */}
      <aside className="flex flex-col w-16 sm:w-20 md:w-64 bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] text-gray-200 shadow-xl shrink-0">
        {/* LOGO */}
        <Link
          href="/admin/dashboard"
          className="flex items-center justify-center md:justify-start gap-3 px-4 py-5 border-b border-gray-800 hover:bg-white/5 transition"
        >
          <Image src="/logo.png" alt="Admin Logo" width={36} height={36} />
          <div className="hidden md:block">
            <h2 className="text-lg font-semibold text-white">
              Admin Panel
            </h2>
            <p className="text-xs text-gray-400">
              Management Console
            </p>
          </div>
        </Link>

        {/* NAV */}
        <nav className="flex-1 px-2 md:px-4 py-6 space-y-4 overflow-y-auto">
          {menu.map((group) => (
            <div key={group.section}>
              <p className="hidden md:block px-3 mb-2 text-xs font-semibold text-gray-400 uppercase">
                {group.section}
              </p>

              {group.items.map((item) => {
                const active = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      flex items-center gap-3
                      px-3 py-2 rounded-md text-sm font-medium transition
                      ${
                        active
                          ? "bg-white text-black shadow"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }
                    `}
                  >
                    <Icon className="text-lg shrink-0" />
                    <span className="hidden md:inline">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* LOGOUT */}
        <div className="px-2 md:px-6 py-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm text-red-400 hover:text-red-300 hover:bg-gray-800 transition"
          >
            <FaSignOutAlt className="text-lg" />
            <span className="hidden md:inline">Logout</span>
          </button>

          <p className="hidden md:block mt-3 text-xs text-white">
            © {year} Admin System
          </p>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 md:p-8">
        {children}
      </main>
    </div>
  );
}
