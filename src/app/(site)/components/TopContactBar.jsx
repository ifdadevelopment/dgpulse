'use client';

import Link from 'next/link';

export default function TopContactBar() {
  return (
    <div
      className="top-contact-bar"
      role="region"
      aria-label="Contact Information"
    >
      <div className="container mx-auto px-4">
        <div className="contact-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="contact-card"
            role="region"
            aria-label="Head Office"
          >
            <div className="card-header">
              <div className="card-icon">
                <i className="fas fa-building" aria-hidden="true"></i>
              </div>
              <div className="card-title">Head Office</div>
            </div>

            <div className="card-content">
              <p>
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <span>
                  A-74, 2nd Floor, Sector-2<br />
                  Noida-U.P 201301, India
                </span>
              </p>

              <p>
                <a href="tel:+91-9560133711">
                  <i className="fas fa-phone-alt" aria-hidden="true"></i>
                  <span>+91-9560133711</span>
                </a>
              </p>
            </div>
          </div>
          <div
            className="contact-card"
            role="region"
            aria-label="Satellite Office"
          >
            <div className="card-header">
              <div className="card-icon">
                <i className="fas fa-globe" aria-hidden="true"></i>
              </div>
              <div className="card-title">Satellite Office</div>
            </div>

            <div className="card-content">
              <p>
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <span>
                  7201 Frankford Ave #974<br />
                  Philadelphia PA 19135-1010
                </span>
              </p>

              <p>
                <a href="tel:+1-855-763-0320">
                  <i className="fas fa-phone-alt" aria-hidden="true"></i>
                  <span>+1-855-763-0320</span>
                </a>
              </p>
            </div>
          </div>
          <div
            className="contact-card"
            role="region"
            aria-label="Quick Contact"
          >
            <div className="card-header">
              <div className="card-icon">
                <i className="fas fa-headset" aria-hidden="true"></i>
              </div>
              <div className="card-title">Quick Contact</div>
            </div>

            <div className="card-content">
              <p style={{ marginBottom: '20px' }}>
                <span>
                  Get in touch with us instantly through WhatsApp or Email
                </span>
              </p>

              <div className="quick-actions flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919560133711"
                  className="action-btn"
                  role="link"
                  aria-label="Contact via WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp" aria-hidden="true"></i>
                  <span> WhatsApp</span>
                </a>

                <a
                  href="mailto:Contactus@ezrankings.com"
                  className="action-btn"
                  role="link"
                  aria-label="Contact via Email"
                >
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <span> Email</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
