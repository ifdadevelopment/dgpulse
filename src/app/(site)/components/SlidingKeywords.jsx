"use client";

const words = [
    "PLANNING",
    "ANALYSIS",
    "STRATEGY",
    "MARKETING",
    "BRANDING",
];

export default function SlidingKeywords() {
    return (
        <section className="w-full overflow-hidden bg-light">
            <div className="relative flex items-center justify-center ">
                <div className="flex whitespace-nowrap">
                    <div className="flex animate-slideRight">
                        {words.map((word, index) => (
                            <span
                                key={`a-${index}`}
                                className="
                  mx-16
                  text-[48px]
                  sm:text-[70px]
                  md:text-[90px]
                  lg:text-[110px]
                  font-extrabold
                  uppercase
                  tracking-wider
                  text-[#0b1a3a]
                  drop-shadow-[0_10px_20px_rgba(11,26,58,0.35)]
                "
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                    <div className="flex animate-slideRight">
                        {words.map((word, index) => (
                            <span
                                key={`b-${index}`}
                                className="
                  mx-16
                  text-[48px]
                  sm:text-[70px]
                  md:text-[90px]
                  lg:text-[110px]
                  font-extrabold
                  uppercase
                  tracking-wider
                  text-[#0b1a3a]
                  drop-shadow-[0_10px_20px_rgba(11,26,58,0.35)]
                "
                            >
                                {word}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
