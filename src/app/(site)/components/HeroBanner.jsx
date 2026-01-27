"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { StatCounter } from "./StatCounter";

const ROTATING_TEXT = [
    "Digital Marketing",
    "Web Designing",
    "Web Development",
];

export default function HeroBanner() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ROTATING_TEXT.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="
        relative w-full min-h-[90vh]
        flex flex-col items-center justify-center text-center md:px-6 px-4
        bg-[url('/images/bg-banner.24de7d30.webp')]
        bg-cover bg-center bg-no-repeat
      "
        >
            <div className="absolute inset-0 bg-white/10" />
            <div className="relative z-10">
                <Image
                    src="/images/awarded.webp"
                    alt="Awarded"
                    width={150}
                    height={150}
                    className="
    mx-auto my-4 rounded-2xl
    w-[100px] h-[100px]
    sm:w-[120px] sm:h-[120px]
    md:w-[150px] md:h-[150px]
  "
                    priority
                />

                <div className="mb-6">
                    <span className="px-5 py-2 bg-white shadow font-bold rounded-full text-sm text-gray-600 inline-flex items-center gap-2">
                        ✨ 2025 Award Winning Agency
                    </span>
                </div>

                <h1 className="text-2xl md:text-6xl font-extrabold text-[#0b1a3a] leading-tight">
                    India&apos;s Best Agency In <br />
                    <span className="inline-block min-w-[280px] md:min-w-[360px] text-[#faa61a]">
                        {ROTATING_TEXT[index]}
                    </span>
                </h1>

                <p className="mt-6 max-w-2xl md:text-lg text-md text-gray-600 mx-auto">
                    We craft bespoke digital experiences that merge aesthetic beauty with
                    technical precision. From custom platforms to e-commerce giants, we
                    build for growth.
                </p>

                <div className="mt-16 mb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
                    {[
                        { value: 500, label: "Projects Delivered", suffix: "+" },
                        { value: 98, label: "Client Retention", suffix: "%" },
                        { value: 5, label: "Years Experience", suffix: "+" },
                        { value: 50, label: "Active Clients", suffix: "+" },
                        { value: 20, label: "Team Members", suffix: "+" },
                        { value: 49, label: "Average Rating", suffix: "/50" },
                    ].map((item, i) => (
                        <div key={i}>
                            <h2 className="md:text-4xl text-2xl font-bold text-[#0b1a3a]">
                                <StatCounter end={item.value} />
                                {item.suffix}
                            </h2>
                            <p className="md:text-sm text-[10px] font-semibold text-gray-600 mt-1 uppercase">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
