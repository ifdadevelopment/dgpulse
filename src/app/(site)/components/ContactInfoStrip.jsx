function InfoBlock({ title, children }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <h4 className="text-lg font-semibold text-[#0b1a3a]">{title}</h4>
      <p className="text-sm text-gray-700 leading-relaxed text-center">
        {children}
      </p>
    </div>
  );
}

export default function ContactInfoStrip() {
  return (
    <section className="bg-sky text-white py-14 font-publicSans relative">
      <div className="absolute inset-0">
        <div className="w-72 h-72 bg-white/10 blur-3xl rounded-full absolute top-10 left-10" />
        <div className="w-80 h-80 bg-white/10 blur-3xl rounded-full absolute bottom-10 right-16" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-2xl py-12 px-6 shadow-[0_10px_30px_rgba(11,26,58,0.25)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            <InfoBlock title="Visit Us">
              H-18/B, 2nd Floor,<br />
              Kalkaji Main Road,<br />
              New Delhi-110019
            </InfoBlock>

            <InfoBlock title="Call Us">
              <a href="tel:+919650638829" className="hover:text-[#0b1a3a] font-medium">
                +91 9650638829
              </a>
            </InfoBlock>

            <InfoBlock title="Email Us">
              <a
                href="mailto:info@dgpulse360.com"
                className="hover:text-[#0b1a3a] font-medium break-words"
              >
                info@dgpulse360.com
              </a>
            </InfoBlock>

            <InfoBlock title="Hours">
              Monday–Sunday:<br />
              10:00 AM – 7:00 PM
            </InfoBlock>

          </div>
        </div>
      </div>
    </section>
  );
}
