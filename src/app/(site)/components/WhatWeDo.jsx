"use client";

import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="relative bg-sky overflow-hidden">
      <div className="pt-20 md:pt-24 pb-16 md:pb-20 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#faa61a] font-semibold uppercase tracking-widest text-md">
              What We Do
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0b1a3a] mt-3 leading-snug">
              Helping Brands Grow With<br className="md:block hidden"/> Creativity, Clarity &amp; Real Results.
            </h2>

            <div className="w-24 h-1 bg-[#faa61a] rounded mt-4 mb-6"></div>

            <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] mb-6">
              We create meaningful digital experiences — websites, SEO systems,
              CRM, branding, social media and marketing ecosystems.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm md:text-[15px]">
              We work with full dedication and bring strategy + design that
              actually performs.
            </p>
          </div>
          <div className="relative group flex justify-center">
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#0b1a3a]/20 blur-2xl rounded-full"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#0b1a3a]/20 blur-3xl rounded-full"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white border border-[#0b1a3a]/20">
              <Image
                src="/images/why-choose-us.webp"
                alt="Why Choose Us"
                width={600}
                height={500}
                className="transition-transform duration-700 group-hover:scale-[1.04]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
