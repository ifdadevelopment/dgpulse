'use client';

import { useState } from 'react';

const faqs = [
  {
    id: 'faq1',
    question: 'How do I get started with digital marketing at EZ Rankings?',
    answer:
      'Getting started with the best digital marketing agency, EZ Rankings, is simple. Book a free consultation with our experts to discuss your business goals, target audience, and challenges.',
  },
  {
    id: 'faq2',
    question: 'How is your performance-driven strategy different from other agencies?',
    answer:
      'We build strategies based on data, past learnings, and realistic business goals — not vanity metrics.',
  },
  {
    id: 'faq3',
    question: 'How do I know which digital marketing channels are right for my business?',
    answer:
      'We evaluate goals, customer behaviour, competition, and budget before recommending channels.',
  },
  {
    id: 'faq4',
    question: 'How do AI and LLMs improve digital marketing performance?',
    answer:
      'AI and LLMs improve targeting, reach, high-intent traffic and content visibility.',
  },
  {
    id: 'faq5',
    question: 'What KPIs do you track in performance marketing campaigns?',
    answer:
      'We track ROI, ROAS, efficiency, conversion quality and long-term growth impact.',
  },
  {
    id: 'faq6',
    question: 'Can performance marketing work with a limited budget?',
    answer:
      'Performance marketing works best with sufficient data for optimisation.',
  },
  {
    id: 'faq7',
    question: 'Do you support LLM-based search visibility like ChatGPT and Gemini?',
    answer:
      'Yes. We integrate LLM visibility into your digital strategy.',
  },
  {
    id: 'faq8',
    question: 'How much does digital marketing cost?',
    answer:
      'Our services typically start at $2,000/month depending on scope and competition.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const leftColumn = faqs.slice(0, 4);
  const rightColumn = faqs.slice(4, 8);

  return (
    <section className="faq-section show" role="region" aria-label="Frequently Asked Questions">
      <div className="container mx-auto px-4">

        <h2 className="section-title ani-heading text-center">
          FAQs (Frequently Asked Questions)
        </h2>
        <p className="section-subtitle text-center mb-12">
          Clear answers to help you understand our digital marketing solutions better.
        </p>

        {/* ✅ TWO COLUMN LAYOUT */}
        <div className="faq-list row grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT COLUMN */}
          <div className="col-md-6 space-y-6">
            {leftColumn.map((faq) => (
              <article key={faq.id} className="faq-item">
                <div
                  className="faq-header flex justify-between items-center cursor-pointer"
                  aria-expanded={openId === faq.id}
                  aria-controls={faq.id}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="faq-question">{faq.question}</h3>
                  <div className="toggle-icon">{openId === faq.id ? '−' : '+'}</div>
                </div>

                <div
                  id={faq.id}
                  className={`faq-answer transition-all duration-300 ${
                    openId === faq.id ? 'block' : 'hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-6 space-y-6">
            {rightColumn.map((faq) => (
              <article key={faq.id} className="faq-item">
                <div
                  className="faq-header flex justify-between items-center cursor-pointer"
                  aria-expanded={openId === faq.id}
                  aria-controls={faq.id}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="faq-question">{faq.question}</h3>
                  <div className="toggle-icon">{openId === faq.id ? '−' : '+'}</div>
                </div>

                <div
                  id={faq.id}
                  className={`faq-answer transition-all duration-300 ${
                    openId === faq.id ? 'block' : 'hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
