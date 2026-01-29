"use client";

import { useState } from "react";
import Image from "next/image";

export default function ServiceCapabilities({ data }) {
    const [activeTab, setActiveTab] = useState(data.tabs[0]);
    const content = data.content?.[activeTab];
    if (!content) return null;

    return (
        <section className="w-full py-24 bg-[#f7f9fc]">
            <div className="max-w-6xl mx-auto md:px-6 px-4">
                <div className="flex flex-wrap gap-4 justify-center mb-14">
                    {data.tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all shadow-md
                ${activeTab === tab
                                    ? "bg-[#0b1a3a] text-white shadow-lg"
                                    : "bg-white border border-gray-300 text-[#0b1a3a] hover:shadow-lg"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 bg-white md:p-8 p-6 md:p-10 rounded-3xl shadow-xl border border-gray-200">
                    <div>
                        <h2 className="md:text-3xl text-2xl font-bold text-[#0b1a3a] mb-4">
                            {content.title}
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            {content.desc}
                        </p>

                        <ul className="space-y-3">
                            {content.points?.map((point, index) => (
                                <li
                                    key={`${activeTab}-${index}`}
                                    className="flex items-start gap-3 text-gray-700"
                                >
                                    <span className="text-[#faa61a] text-2xl">•</span>
                                    <span className="font-semibold text-lg text-[#0b1a3a]">
                                        {typeof point === "string" ? point : point?.label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src={content.image || "/images/placeholder.webp"}
                            alt={content.title}
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
