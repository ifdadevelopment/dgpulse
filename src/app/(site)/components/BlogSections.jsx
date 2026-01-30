'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BlogSections() {
  return (
    <section
      className="blog-section show"
      role="region"
      aria-label="Read Next Blog Articles"
    >
      <div className="container mx-auto px-4">
        <h2
          className="section-title ani-heading aos-init"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          What to Read Next
        </h2>

        {/* ROW */}
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-content-center">

          {/* BLOG CARD 1 */}
          <div className="col-lg-4 col-md-6">
            <article
              className="blog-card aos-init"
              itemScope
              itemType="https://schema.org/BlogPosting"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="blog-image">
                <Image
                  src="/images/Digital-Marketing-Strategy-For-2025.png"
                  alt="Digital Marketing Strategy for 2026"
                  width={600}
                  height={400}
                  loading="lazy"
                />
                <div className="blog-overlay"></div>
              </div>

              <div className="card-body">
                <h3 className="blog-title" itemProp="headline">
                  Digital Marketing Strategy for 2026
                </h3>

                <p className="blog-meta">
                  <time
                    dateTime="2025-10-31"
                    itemProp="datePublished"
                  >
                    Published on December 17th, 2025
                  </time>
                </p>

                <Link
                  href="https://www.ezrankings.com/blog/digital-marketing-strategy-website/"
                  className="theme-btn"
                  itemProp="url"
                >
                  <div className="arrow-circle">
                    <div className="arrow">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                  <span className="btn-text">Read More</span>
                </Link>
              </div>
            </article>
          </div>

          {/* BLOG CARD 2 */}
          <div className="col-lg-4 col-md-6">
            <article
              className="blog-card aos-init"
              itemScope
              itemType="https://schema.org/BlogPosting"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="blog-image">
                <Image
                  src="/images/Digital-Marketing-Company-1.jpg"
                  alt="Top Digital Marketing Companies in India 2026"
                  width={600}
                  height={400}
                  loading="lazy"
                />
                <div className="blog-overlay"></div>
              </div>

              <div className="card-body">
                <h3 className="blog-title" itemProp="headline">
                  Top Digital Marketing Companies in India 2026
                </h3>

                <p className="blog-meta">
                  <time
                    dateTime="2025-01-23"
                    itemProp="datePublished"
                  >
                    December 22nd, 2025
                  </time>
                </p>

                <Link
                  href="https://www.ezrankings.com/blog/top-lists-of-digital-marketing-companies-agencies/"
                  className="theme-btn"
                  itemProp="url"
                >
                  <div className="arrow-circle">
                    <div className="arrow">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                  <span className="btn-text">Read More</span>
                </Link>
              </div>
            </article>
          </div>

          {/* BLOG CARD 3 */}
          <div className="col-lg-4 col-md-6">
            <article
              className="blog-card aos-init"
              itemScope
              itemType="https://schema.org/BlogPosting"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="blog-image">
                <Image
                  src="/images/Digital-Marketing-for-Higher-Education.png"
                  alt="Digital Marketing for Higher Education"
                  width={600}
                  height={400}
                  loading="lazy"
                />
                <div className="blog-overlay"></div>
              </div>

              <div className="card-body">
                <h3 className="blog-title" itemProp="headline">
                  Digital Marketing for Higher Education
                </h3>

                <p className="blog-meta">
                  <time
                    dateTime="2024-01-15"
                    itemProp="datePublished"
                  >
                    Published on November 5th, 2024
                  </time>
                </p>

                <Link
                  href="https://www.ezrankings.com/blog/digital-marketing-for-higher-education/"
                  className="theme-btn"
                  itemProp="url"
                >
                  <div className="arrow-circle">
                    <div className="arrow">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                  <span className="btn-text">Read More</span>
                </Link>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}
