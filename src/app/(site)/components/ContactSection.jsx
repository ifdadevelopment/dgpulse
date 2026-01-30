'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section
      className="contact-section show"
      role="region"
      aria-label="Contact EZ Rankings"
    >
      <div className="container mx-auto px-4">
        <div className="section-header text-center">
          <h2
            className="section-title aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Let's talk about you
          </h2>

          <p
            className="section-subtitle aos-init"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our team looks forward to hearing from you and these details will help us to get back
          </p>
        </div>
        <div className="contact-wrapper flex flex-col lg:flex-row gap-10">
          <div
            className="expert-card aos-init w-full lg:w-5/12"
            role="complementary"
            aria-label="Talk to our Experts"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="expert-avatars flex gap-3">
              <div className="avatar">
                <Image
                  src="/images/gray-male-head-placeholder-vector-23804676.avif"
                  alt="Expert 1"
                  width={60}
                  height={60}
                  loading="lazy"
                />
              </div>
              <div className="avatar">
                <Image
                  src="/images/gray-male-head-placeholder-vector-23804676.avif"
                  alt="Expert 2"
                  width={60}
                  height={60}
                  loading="lazy"
                />
              </div>
            </div>

            <h3
              className="expert-title aos-init"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Talk to our experts
            </h3>

            <p
              className="expert-description aos-init"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Get expert guidance to build the right strategy for your online business growth.
            </p>

            <div
              className="action-buttons aos-init"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Link
                href="https://www.ezrankings.com/book-a-call.html"
                className="schedule-btn"
                role="button"
                aria-label="Schedule a Call"
              >
                Schedule a call
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>

              <div
                className="contact-icons aos-init"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <a
                  href="https://wa.me/919560133711"
                  className="icon-btn whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  aria-label="Contact on WhatsApp"
                >
                  <i className="fab fa-whatsapp" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div
              className="call-us-section aos-init"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="call-label">
                <i className="fas fa-phone-alt" aria-hidden="true"></i>
                <span>Call us at:</span>
              </div>

              <div className="phone-numbers">
                <div className="phone-item">
                  <span>🇮🇳</span>
                  <span>
                    <a href="tel:+91-9560133711">+91-9560133711</a>
                  </span>
                </div>

                <div className="phone-item">
                  <span>🇺🇸</span>
                  <span>
                    <a href="tel:+1-855-763-0320">+1-855-763-0320</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-wrapper w-full lg:w-7/12" role="form" aria-label="Contact Form">
            <form id="our_reseller_partner">

              <div className="form-row aos-init grid grid-cols-1 md:grid-cols-2 gap-4"
                   data-aos="fade-up"
                   data-aos-duration="1000">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Full Name*"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Email ID*"
                    required
                  />
                </div>
              </div>

              <div className="form-row aos-init grid grid-cols-1 md:grid-cols-2 gap-4"
                   data-aos="fade-up"
                   data-aos-duration="1000">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="Phone No*"
                    required
                    pattern=".{9,14}"
                    maxLength={15}
                  />
                </div>

                <div className="form-group">
                  <select name="service" className="form-select" required>
                    <option value="">Budget (select a range)</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000+">$25,000+</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width aos-init"
                   data-aos="fade-up"
                   data-aos-duration="1000">
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Description"
                  rows={4}
                ></textarea>
              </div>

              <div className="submit-row aos-init"
                   data-aos="fade-up"
                   data-aos-duration="1000">
                <input type="hidden" name="form_title" value="Become Our Reseller Partner" />
                <input type="hidden" name="current_page_url" value="https://www.ezrankings.com/" />
                <input type="hidden" name="ez_key" value="vwizwyMJh0Hh2KGyBgZscPnoobaeic6" />

                <input type="submit" className="submit-btn" value="Submit" />

                <div className="email-info aos-init"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                  Or directly email us at<br />
                  <a
                    href="mailto:contactus@ezrankings.com"
                    className="email-link"
                  >
                    contactus@ezrankings.com
                  </a>
                </div>
              </div>

              <div className="job-info aos-init"
                   data-aos="fade-up"
                   data-aos-duration="1000">
                <i
                  className="fas fa-circle"
                  style={{ fontSize: '6px', verticalAlign: 'middle' }}
                  aria-hidden="true"
                ></i>
                {' '}
                For Job Opportunities:{' '}
                <a href="mailto:jobs@ezrankings.com" className="job-link">
                  jobs@ezrankings.com
                </a>
                , or visit our{' '}
                <Link href="https://www.ezrankings.com/career.html" className="job-link">
                  careers page
                </Link>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
