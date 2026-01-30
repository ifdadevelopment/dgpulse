import Image from "next/image";
import Link from "next/link";
import StatsSection from "./StatsSection";

export default function HeroSection() {
    return (
        <>
            <section
                className="hero-section show relative w-full  bg-[#f7f9fc] py-24 px-6"
                role="region"
                aria-label="Hero Section – AI Driven Performance Marketing"
            >
                <div
                    className="decorative-shape shape-1 "
                    aria-hidden="true"
                />
                <div
                    className="decorative-shape shape-2 "
                    aria-hidden="true"
                />
                <div className="feature-badge badge-1 absolute top-24 left-10 hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-md">
                    <div className="feature-icon text-[#061A40]" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5">
                            <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" />
                        </svg>
                    </div>
                    <span className="text-sm font-semibold text-[#061A40]">10x Growth</span>
                </div>
                <div className="feature-badge badge-2 ">
                    <div className="feature-icon text-[#061A40]" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                        </svg>
                    </div>
                    <span className="text-sm font-semibold text-[#061A40]">AI-Powered Results</span>
                </div>
                <div className="container-fluid hero-container ">
                    <div className="content-grid grid grid-cols-1 lg:grid-cols-3 gap-14 items-center">
                        <div className="left-image hidden lg:flex justify-center">
                            <Image
                                src="/images/left-h.png"
                                alt="AI Marketing Analytics Visualization"
                                width={400}
                                height={365}
                                className="object-contain"
                            />
                        </div>
                        <div className="center-content text-center lg:text-left">
                            <span className="badge inline-block mb-4 px-4 py-1 rounded-full bg-[#061A40]/10 text-[#061A40] text-sm font-semibold">
                                Performance Marketing
                            </span>

                            <h2 className="main-heading text-3xl md:text-5xl font-extrabold leading-tight text-[#061A40]">
                                <span className="highlight-text block">AI-Driven</span>
                            </h2>

                            <h2 className="subtitle text-3xl md:text-5xl font-extrabold text-[#061A40]">
                                Performance Marketing Agency
                            </h2>

                            <p className="tagline mt-4 text-lg text-gray-600">
                                Powering Growth with Precision and AI
                            </p>
                            <div className="cta-wrapper">
                                <Link
                                    href="#banner_form"
                                    className="theme-btn"
                                >
                                    <div className="arrow-circle " aria-hidden="true">
                                        →
                                    </div>
                                    <span className="btn-text">Claim Your Free Strategy</span>
                                </Link>
                            </div>
                            <div className="reviews-section">
                                <span className="reviews-text text-sm text-gray-600">
                                    Rated 5 Stars Based on 600+ Client Reviews
                                </span>

                                <div className="stars-wrapper " aria-hidden="true">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg
                                            key={i}
                                            className="star-icon w-5 h-5 text-yellow-400"
                                            viewBox="0 0 576 512"
                                            fill="currentColor"
                                        >
                                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="right-image hidden lg:flex justify-center">
                            <Image
                                src="/images/right-h.png"
                                alt="AI Powered Marketing Automation Illustration"
                                width={400}
                                height={222}
                                className="object-contain zoom-in-up"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <StatsSection />
        </>
    );
}
