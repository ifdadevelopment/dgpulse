'use client';

import { useState } from 'react';

const services = [
  {
    title: 'Omnichannel Digital Visibility',
    content: (
      <>
        <p>
          At EZ Rankings, the best digital marketing company in India, we make sure your brand
          is easy to find across all major online platforms. We help you stay visible on Google
          Search, Google Maps, social media channels, PPC ads, Amazon, AI-powered platforms,
          LLM-based search and through content and reputation-building channels.
        </p>
        <p>
          By aligning all these channels, we help your business connect with more people and
          maintain a strong online presence. With our omnichannel visibility solutions, your
          brand appears in all the right places.
        </p>
      </>
    ),
  },
  {
    title: 'High-Intent MQLs (Marketing Qualified Leads)',
    content: (
      <>
        <p>
          Traffic alone does not help a business grow. EZ Rankings focuses on generating
          high-intent MQLs, helping you connect with leads who are more likely to convert.
        </p>
        <p>
          Using AI-powered targeting, SEO, PPC and content funnels, we deliver leads that are
          relevant, engaged and ready to take action.
        </p>
      </>
    ),
  },
  {
    title: 'Performance-Driven Results',
    content: (
      <>
        <p>
          We focus on results that matter. Our strategies are guided by data, AI-driven
          insights and real user behaviour.
        </p>
        <p>
          Continuous optimisation ensures higher ROI, better engagement and measurable growth.
        </p>
      </>
    ),
  },
  {
    title: 'Guaranteed ROAS (Based on Industry and Budget)*',
    content: (
      <>
        <p>
          We set clear benchmarks and work toward delivering guaranteed ROAS aligned with your
          industry and budget.
        </p>
        <p>
          Real-time optimisation keeps performance predictable and efficient.
        </p>
      </>
    ),
  },
  {
    title: 'LLM-Optimized Search and Brand Visibility',
    content: (
      <>
        <p>
          As search shifts toward AI platforms like ChatGPT, Gemini and Copilot, we ensure your
          brand stays discoverable beyond traditional search engines.
        </p>
        <p>
          We optimise content and brand signals so LLMs understand and surface your business
          at the right time.
        </p>
      </>
    ),
  },
];

export default function ResultsSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      className="results-section show"
      role="region"
      aria-label="Performance Marketing Results"
    >
      <div className="container mx-auto px-4">
        <div className="row flex flex-col lg:flex-row gap-12">
          <div className="col-lg-5 w-full lg:w-5/12">
            <h2 className="section-title ani-heading">
              The Results You Need <br />
              <span className="highlight">
                From the Best Performance Marketing Agency
              </span>
            </h2>

            <p className="intro-text mt-6">
              At EZ Rankings, we provide digital marketing services that help you achieve
              your business goals quickly and efficiently. Using AI insights, LLM-based
              optimization, and proven strategies, we give your brand the support it needs
              to grow.
              <br /><br />
              Our proven case studies and client reviews show why we are a trusted digital
              marketing company in India.
            </p>
          </div>

          <div className="col-lg-7 w-full lg:w-7/12">
            <div className="services-list flex flex-col gap-4">

              {services.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`service-item ${isOpen ? 'active' : ''}`}
                  >
                    <button
                      type="button"
                      className="service-header w-full flex items-center justify-between text-left"
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <div className="service-title">{item.title}</div>
                      <div className="toggle-icon">
                        {isOpen ? '−' : '+'}
                      </div>
                    </button>

                    <div
                      className={`service-content transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[1000px] mt-4' : 'max-h-0'
                      }`}
                    >
                      {item.content}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
