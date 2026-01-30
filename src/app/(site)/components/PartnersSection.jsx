'use client';

import Image from 'next/image';
import { row1Logos, row2Logos } from '../data/services';

export default function PartnersSection() {
  return (
    <section
      className="partners-section show py-24 bg-white overflow-hidden"
      role="region"
      aria-label="EZ Rankings Trusted Partners – Global Brands"
    >
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="section-title ani-heading text-3xl md:text-4xl font-bold text-[#061A40] mb-4">
          Trusted by Global Brands
        </h2>
        <p className="section-subtitle text-gray-600 max-w-3xl mx-auto">
          As a leading digital marketing company in India, EZ Rankings works with global brands to deliver consistent, growth-focused digital results.
        </p>
      </div>

      {/* Row 1 – RTL */}
      <div className="logos-scroller rtl mb-8">
        <div className="logos-track">
          {[...row1Logos, ...row1Logos].map((logo, i) => (
            <div className="partner-item" key={`rtl-${i}`} aria-hidden={i >= row1Logos.length}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="partners-logo"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 – LTR */}
      <div className="logos-scroller ltr">
        <div className="logos-track">
          {[...row2Logos, ...row2Logos].map((logo, i) => (
            <div className="partner-item" key={`ltr-${i}`} aria-hidden={i >= row2Logos.length}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="partners-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
