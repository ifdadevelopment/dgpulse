'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function StickyServicesSection() {
  return (
    <div className="sticky-sections-wrapper">
      <section
        className="marketing-services-section one show"
        role="region"
        aria-label="Marketing Solutions by EZ Rankings"
      >
        <div className="content-wrapper">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-4">
                <div className="image-box animate fade-up duration-1000" aria-hidden="true">
                  <div className="decorative-circles">
                    <div className="circle circle-1" />
                    <div className="circle circle-2" />
                    <div className="circle circle-3" />
                  </div>

                  <div className="image-icon">
                    <Image
                      src="/images/Marketing-Solutions.jpg"
                      alt="Marketing-Solutions"
                      width={420}
                      height={420}
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="section-badge animate fade-up duration-1000">
                  <span>Marketing</span>
                </div>

                <h2 className="section-title animate fade-up duration-1000">
                  Marketing <span className="highlight">Solutions</span>
                </h2>

                <p className="section-description animate fade-up duration-1000">
                  We help brands build stronger search visibility, attract high-intent traffic,
                  and generate predictable leads with smart, data-powered digital strategies.
                </p>
                <div className="service-card animate fade-up duration-1000">
                  <div className="category-header">
                    <h3 className="category-title">Core Services</h3>
                  </div>

                  <div className="services-list">
                    {[
                      ['SEO Services', '/seo-services.html'],
                      ['Local SEO', '/local-seo-services.html'],
                      ['Ecommerce SEO', '/ecommerce-seo-services.html'],
                      ['Amazon SEO', '/amazon-seo-services.html'],
                      ['Google Map Marketing', '/google-map-marketing.html'],
                      ['Social Media Marketing', '/social-media-marketing-services.html'],
                      ['PPC Advertising', '/ppc-services-india.html'],
                      ['Bing Ads Management', '/bing-ads-agency.html'],
                      ['Meta Ads', '/meta-ads-agency.html'],
                    ].map(([label, link]) => (
                      <div className="service-item" key={label}>
                        <Link href={link}>{label}</Link>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/contact-us.html" className="theme-btn animate fade-up duration-1000">
                  <span className="btn-text">Start Marketing Growth</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="marketing-services-section two show"
        role="region"
        aria-label="Branding Solutions by EZ Rankings"
      >
        <div className="content-wrapper">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-8">
                <div className="section-badge animate fade-up duration-1000">
                  <span>Branding</span>
                </div>

                <h2 className="section-title animate fade-up duration-1000">
                  Branding <span className="highlight">Solutions</span>
                </h2>

                <p className="section-description animate fade-up duration-1000">
                  We help businesses communicate their value, create a strong visual identity,
                  and build trust through consistent branding.
                </p>

                <div className="service-card animate fade-up duration-1000">
                  <div className="category-header">
                    <h3 className="category-title">Core Services</h3>
                  </div>

                  <div className="services-list">
                    {[
                      'Online Reputation Management',
                      'Content Marketing',
                      'Review Management',
                      'Rebranding',
                      'Logo Designing',
                      'Creative Graphic Design',
                      'Crisis Management',
                    ].map(item => (
                      <div className="service-item" key={item}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/contact-us.html" className="theme-btn animate fade-up duration-1000">
                  <span className="btn-text">Build Brand Authority</span>
                </Link>
              </div>
              <div className="md:col-span-4">
                <div className="image-box animate fade-up duration-1000">
                  <Image
                    src="/images/brand-solution.jpg"
                    alt="brand-solution"
                    width={420}
                    height={420}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="marketing-services-section three show"
        role="region"
        aria-label="Website and App Development by EZ Rankings"
      >
        <div className="content-wrapper">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-4">
                <div className="image-box animate fade-up duration-1000">
                  <Image
                    src="/images/website-app-development.jpg"
                    alt="website-app-development"
                    width={420}
                    height={420}
                  />
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="section-badge animate fade-up duration-1000">
                  <span>Website / Apps</span>
                </div>

                <h2 className="section-title animate fade-up duration-1000">
                  Website &amp; App <span className="highlight">Development</span>
                </h2>

                <p className="section-description animate fade-up duration-1000">
                  Create fast, modern, and user-friendly websites or apps.
                </p>

                <div className="service-card animate fade-up duration-1000">
                  <div className="category-header">
                    <h3 className="category-title">Core Services</h3>
                  </div>

                  <div className="services-list">
                    {[
                      'Website Design',
                      'Website Development',
                      'App Store Marketing',
                      'UI/UX Design',
                      'Custom Web Applications',
                      'Mobile App Development',
                      'Shopify Development',
                    ].map(item => (
                      <div className="service-item" key={item}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/contact-us.html" className="theme-btn animate fade-up duration-1000">
                  <span className="btn-text">Explore Website &amp; App Solutions</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
