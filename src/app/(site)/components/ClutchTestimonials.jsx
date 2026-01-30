'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sanjiv Nanda',
    role: 'Director, Smarthead Consulting',
    image: '/images/1534831207Sanjiv-Nanda.jpg',
    text:
      'I, Sanjiv Nanda, Director of Smarthead Consulting wish to record my appreciation and acknowledgment, for Mrs. Mansi Rana, Director of EZ Rankings IT Services. Her company has given excellent services to our clients in the sphere of making websites for our Real Estate Clients and Defence Sector Clients in record time and at very reasonable costs.',
  },
  {
    name: 'Ray Adams',
    role: 'MD, Alliant Web',
    image: '/images/1534831325RAY.jpg',
    text:
      'Thank you for a great experience in working on this project to a successful completion. Your pricing matched the value we received. The site is beautiful and functional and has already received response from those looking for our services.',
  },
  {
    name: 'Kristin & Jared',
    role: 'Clients, Digital Marketing',
    image: '/images/1534830787jarred-and-kris.png',
    text:
      'Our experience with EZ Rankings has been incredible - they have surpassed expectations with great quality, whether that is design work, SEO work and development work.',
  },
];

export default function ClutchTestimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);

  const next = () =>
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);

  return (
    <section
      className="clutch-testimonial-section show"
      role="region"
      aria-label="Client Testimonials"
    >
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="section-header text-center mb-12">
          <h2 className="section-title">
            What Our Clients Have To Say
          </h2>
          <p className="section-subtitle">
            We’ve partnered with more than 16K clients, and we truly value every
            relationship. Here’s what they share about our performance marketing experience.
          </p>
        </div>

        <div className="clutch-testimonials-container">
          <div className="clutch-card ">
            <div className="clutch-logo">
              Join us and become our next success story
            </div>

            <div className="stars">
              {'★★★★★'.split('').map((s, i) => (
                <span key={i} className="star">{s}</span>
              ))}
            </div>

            <a
              href="https://www.ezrankings.com/testimonial.html"
              className="clutch-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Verified Reviews <i className="fas fa-arrow-right"></i>
            </a>

            <div className="clutch-reviews">
              <div className="clutch-icon">C</div>
              <span>600+ reviews</span>
            </div>
          </div>
          <div className="slider-wrapper">
            <div className="arrow-testi">
              <i
                className="fas fa-chevron-left arrow prev-arrow"
                onClick={prev}
              ></i>
              <i
                className="fas fa-chevron-right arrow next-arrow"
                onClick={next}
              ></i>
            </div>
            <div className="clutch-testimonials-slider" id="clutch-testimonialsSlider">
              <article className="clutch-testimonial-card">
                <div className="client-header">
                  <div className="client-avatar">
                    <Image
                      src={testimonials[index].image}
                      alt={testimonials[index].name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>

                  <div className="client-info">
                    <h3 className="client-name">
                      {testimonials[index].name}
                    </h3>
                    <p className="client-position">
                      {testimonials[index].role}
                    </p>
                    <div className="client-stars">
                      {'★★★★★'.split('').map((s, i) => (
                        <span key={i} className="star">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="divider"></div>

                <p className="clutch-testimonial-text">
                  {testimonials[index].text}
                </p>
              </article>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
