'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function AboutSection() {
    const [open, setOpen] = useState(false);

    return (
        <section
            className="about-section show py-16"
            role="region"
            aria-label="About EZ Rankings – Best Digital Marketing Agency in India"
        >
            <div className="container mx-auto px-4">
                <div className="row flex flex-col lg:flex-row items-center mb-12 gap-10">
                    <div className="col-lg-7 col-md-12 w-full lg:w-7/12">
                        <span className="section-badge ani-heading block mb-4">
                            About Us
                        </span>

                        <h1 className="main-heading ani-heading mb-6">
                            <span className="highlight ani-heading">
                                Best Digital Marketing Agency in India
                            </span>{' '}
                            - Driving Results and Growth
                        </h1>

                        <p className="description mb-6">
                            EZ Rankings, known as the best digital marketing agency in India,
                            delivers measurable outcomes through data-driven strategies.
                            With full-funnel digital marketing audits, we help you find
                            growth gaps and key opportunities to maximise conversions
                            across all touchpoints.
                        </p>

                        <h3 className="features-title text-ani mb-4">
                            Our Strategic Approach Includes:
                        </h3>

                        <ul className="features-list space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>AI-Driven, Performance-Focused Marketing</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>Full-Funnel Digital Solutions for Higher ROI</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon />
                                <span>Personalized, Multi-Platform Growth Strategies</span>
                            </li>
                        </ul>

                        <p className="conclusion mt-6">
                            Together, these approaches create a powerful framework for long-term success. Our digital marketing services use deep insights and proven methodologies to guide your brand toward the right audience, better visibility, and stronger business performance.
                        </p>
                    </div>

                    <div className="col-lg-5 col-md-12 w-full lg:w-5/12 flex justify-center">
                        <figure className="image-wrapper">
                            <Image
                                src="/images/best-digital-marketing-agency.webp"
                                alt="Best Digital Marketing Agency For Driving Growth"
                                width={534}
                                height={534}
                                loading="lazy"
                                className='aos-init aos-animate zoom-in-up'
                            />
                        </figure>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="button-wrapper">
                            <button
                                className="explore-button"
                                aria-expanded={open}
                                onClick={() => setOpen(prev => !prev)}
                            >
                                {open ? 'Show Less' : 'Explore How We Drive Growth'}
                                <ArrowIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row mt-10">
                    <div className="col-12">
                        <div className={`expanded-content ${open ? 'active' : ''}`}>
                            <article className="expanded-inner">
                                <h3 className="expanded-heading mb-4">
                                    How We Drive Growth for Your Business
                                </h3>

                                <p className="expanded-text mb-4">
                                    At EZ Rankings, growth happens when real customer challenges are understood and solved with the right digital strategy. Our approach blends AI insights, performance tracking, and proven digital frameworks to help businesses overcome visibility issues, low conversions, and rising competition.
                                </p>

                                <p className="expanded-text mb-4">
                                    Many brands struggle to turn website traffic into qualified leads. Companies that use data-driven strategies are 40% more likely to achieve consistent growth.{' '}
                                    <span className="stats-highlight">
                                        40% more likely to achieve consistent growth
                                    </span>.
                                    We identify gaps across your digital ecosystem and fix them with targeted solutions delivering measurable results.{' '}
                                </p>
                                <p className="expanded-text">
                                    As a leading performance marketing agency, we know how difficult it is for businesses to achieve real growth in today’s fast evolving digital environment. Many brands struggle with no clear digital strategy, inefficient ad spend that results in poor ROAS, limited visibility across search engines and LLM powered platforms, and a steady flow of unqualified or low intent leads. These problems waste time and money.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
function CheckIcon() { return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true" className="w-6 h-6 flex-shrink-0" > <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /> </svg>); }
function ArrowIcon() { return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" className="w-4 h-4" aria-hidden="true" > <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /> </svg>); }