'use client';

export default function IndustrySection() {
  const industries = [
    { icon: '🛒', label: 'Ecommerce' },
    { icon: '🏠', label: 'Real Estate' },
    { icon: '🏥', label: 'Healthcare' },
    { icon: '👗', label: 'Fashion & Apparel' },
    { icon: '💎', label: 'Jewelry & Luxury Brands' },
    { icon: '🚗', label: 'Automotive' },
    { icon: '🏭', label: 'B2B Brand' },
    { icon: '🔧', label: 'Home Services' },
    { icon: '📦', label: 'Consumer Goods' },
    { icon: '🎓', label: 'Education & EdTech' },
    { icon: '⚙️', label: 'Manufacturing' },
    { icon: '🛍️', label: 'D2C Brands' },
    { icon: '💻', label: 'SaaS & Technology' },
    { icon: '🍽️', label: 'Food & Beverage' },
    { icon: '💰', label: 'Finance' },
  ];

  return (
    <section
      className="industry-section show py-16"
      role="region"
      aria-label="Industry-Focused Digital Expertise"
    >
      <div className="container mx-auto px-4">
        <h2
          className="section-heading text-center ani-heading mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Industry-Focused Digital Expertise
        </h2>

        <p
          className="section-subtitle text-center max-w-3xl mx-auto mb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          We understand the unique challenges businesses face across industries.
          Using data, market insights, and user behavior, we build campaigns that
          increase visibility, attract high-quality leads, and accelerate digital
          growth.
        </p>
        <div
          className="
            industry-tags
          "
          role="list"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {industries.map((item, index) => (
            <div
              key={index}
              className="
                industry-tag
              "
              role="listitem"
            >
              <span className="tag-icon text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
