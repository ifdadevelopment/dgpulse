"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/services";



export default function RecentWork() {
  return (
    <section className="relative py-24 bg-[#f7f9fc] overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#0b1a3a]/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-20 right-0 w-72 h-72 bg-[#0b1a3a]/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#faa61a]">
            Recent Work
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            A showcase of our finest digital craftsmanship.
          </p>
          <div className="w-60 mx-auto mt-6 h-[4px] bg-[#0b1a3a] rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((item) => (
            <div
              key={item.title}
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40
                hover:shadow-[#0b1a3a]/40 transition-all group p-5 flex flex-col"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={600}
                  className="w-full rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-6 text-center flex flex-col flex-1">
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700 border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0b1a3a] transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>

                <Link
                  href={item.url}
                  target="_blank"
                  className="mt-5 inline-block px-6 py-2 bg-[#0b1a3a]
                    text-white text-sm font-semibold rounded-full shadow-md
                    hover:shadow-lg transition hover:bg-[#faa61a]"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/project"
          className="block mx-auto w-[240px] mt-16 px-8 py-3 bg-[#0b1a3a]
            text-white text-base font-semibold hover:bg-[#faa61a] rounded-full shadow-lg
            hover:shadow-xl transition text-center"
        >
          Explore All Projects →
        </Link>
      </div>
    </section>
  );
}
