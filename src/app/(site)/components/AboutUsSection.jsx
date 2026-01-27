"use client";

import Image from "next/image";
import Link from "next/link";
import { StatCounter } from "./StatCounter";

export default function AboutUsSection() {
    return (
        <section className="pt-20 md:pt-24 pb-16 md:pb-20 px-6 md:px-12 relative z-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                <div className="relative group flex justify-center">
                    <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#0b1a3a]/25 blur-2xl rounded-full"></div>
                    <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#0b1a3a]/20 blur-3xl rounded-full"></div>

                    <div className="rounded-3xl overflow-hidden shadow-xl bg-white border border-[#0b1a3a]/20">
                        <Image
                            src="/images/about-us.webp"
                            alt="About Us"
                            width={600}
                            height={500}
                            className="transition-transform duration-700 group-hover:scale-[1.04]"
                            priority
                        />
                    </div>
                </div>
                <div>
                    <p className="text-[#faa61a] font-semibold uppercase tracking-widest text-sm">
                        About Us
                    </p>

                    <h1 className="text-2xl md:text-3xl font-bold text-[#0b1a3a] mt-3 leading-snug">
                        Hi, We’re{" "}
                        <span className="font-extrabold">
                            DigitalPulse Solution
                        </span>{" "}
                        <span className="text-[#faa61a]">—</span> We Truly Care About Helping Businesses Grow.
                    </h1>

                    <div className="w-24 h-1 bg-[#faa61a] rounded mt-4 mb-6"></div>

                    <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-[15px]">
                        DigitalPulse wasn’t created because digital marketing became a trend
                        — it was created because we love building things that matter.
                    </p>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-[15px]">
                        Based in Delhi, we strongly believe that great work speaks for itself.
                    </p>
                    <div className="flex flex-wrap gap-6 mt-10">
                        <div className="p-6 bg-white shadow-lg rounded-2xl border border-[#0b1a3a]/20 hover:shadow-xl hover:scale-105 transition-all">
                            <h2 className="text-4xl font-extrabold text-[#0b1a3a]">
                                <StatCounter end={250} />+
                            </h2>
                            <p className="text-gray-600 font-semibold mt-1 text-sm">
                                Projects Executed
                            </p>
                        </div>

                        <div className="p-6 bg-white shadow-lg rounded-2xl border border-[#0b1a3a]/20 hover:shadow-xl hover:scale-105 transition-all">
                            <h2 className="text-4xl font-extrabold text-[#0b1a3a]">
                                <StatCounter end={100} />+
                            </h2>
                            <p className="text-gray-600 font-semibold mt-1 text-sm">
                                Happy Clients
                            </p>
                        </div>

                        <div className="p-6 bg-white shadow-lg rounded-2xl border border-[#0b1a3a]/20 hover:shadow-xl hover:scale-105 transition-all">
                            <h2 className="text-4xl font-extrabold text-[#0b1a3a]">
                                <StatCounter end={35} />+
                            </h2>
                            <p className="text-gray-600 font-semibold mt-1 text-sm">
                                Industry Experts
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-block mt-10 px-7 py-3
              bg-[#0b1a3a] text-white
              rounded-xl shadow-lg
              hover:shadow-xl hover:bg-[#faa61a] hover:scale-[1.04]
              transition-all font-semibold text-lg"
                    >
                        Let’s Connect
                    </Link>
                </div>
            </div>
        </section>
    );
}
