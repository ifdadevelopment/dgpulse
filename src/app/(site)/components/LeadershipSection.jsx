import Image from "next/image";

export default function LeadershipSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-60 h-60 bg-[#0b1a3a]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#0b1a3a]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 pt-24 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#0b1a3a]/15 blur-2xl rounded-full" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#0b1a3a]/10 blur-3xl rounded-full" />

              <div className="rounded-3xl overflow-hidden shadow-xl bg-white border border-[#0b1a3a]/10">
                <Image
                  src="/images/owner.webp"
                  alt="Leadership"
                  width={600}
                  height={500}
                  className="transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#faa61a] font-semibold uppercase tracking-widest text-sm">
              Leadership
            </p>

            <h2 className="text-3xl md:text-3xl font-bold text-[#0b1a3a] mt-3">
              Under The Visionary Leadership
            </h2>

            <div className="w-24 h-1 bg-[#faa61a] rounded mt-4 mb-6" />

            <p className="text-gray-600 leading-relaxed mb-4 text-[15px] font-medium">
              Mr. Jeetendra Kumar Singh brings 15+ years of experience in digital
              strategy, branding, leadership & innovation.
            </p>

            <p className="text-gray-600 leading-relaxed text-[15px] font-medium">
              His values shape the heart of DigitalPulse — creativity, clarity,
              and client-first execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
