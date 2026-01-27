import Image from "next/image";
import { steps } from "../data/services";

export default function HowItWorksSection() {
  return (
    <section className="work-bg md:py-28 py-12 relative">
      <div className="max-w-6xl mx-auto px-8 md:px-6">

        <div className="text-center max-w-5xl mx-auto">
          <h3 className="text-4xl md:text-6xl font-bold text-[#0b2148]">
            How it Works?
          </h3>
          <p className="mt-6 text-[#0b2148] max-w-3xl w-full  mx-auto text-[17px] md:text-[22px]">
            From identifying the core objectives to helping you gain total control
            of your business, the entire process involves five core steps.
          </p>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {steps.slice(0, 3).map((step, i) => (
            <div key={i} className="relative">

              <div className="absolute -top-6 md:-left-9 -left-5 md:w-16 md:h-16 w-12 h-12">
                <Image src={step.no} alt="" fill className="object-contain" />
              </div>

              <div className="bg-white rounded-xl shadow-lg px-6 py-10 work-box h-full flex flex-col items-start">
                <Image src={step.icon} alt="" width={64} height={64} className="mb-4" />
                <h4 className="text-xl font-bold text-[#0b2148]">{step.title}</h4>
                <p className="mt-4 text-[#333]">{step.desc}</p>
              </div>

              {i < 2 && (
                <img
                  src="/images/blue-arrow.png"
                  className="hidden md:block absolute right-[-26px] top-1/2 -translate-y-1/2"
                />
              )}

              {i === 2 && (
                <img
                  src="/images/blue-down-arrow.png"
                  className="hidden md:block absolute left-1/2 -bottom-[26px] -translate-x-1/2"
                />
              )}
            </div>
          ))}
        </div>
        <div className="md:mt-28 mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-start relative">
          <div className="hidden md:block" />

          {[steps[3], steps[4]].map((step, i) => (
            <div
              key={i}
              className={`relative ${i === 0 ? "md:order-2" : "md:order-1"}`}
            >
              <div className="absolute -top-6 md:-left-9 -left-5 md:w-16 md:h-16 w-12 h-12">
                <Image src={step.no} alt="" fill className="object-contain" />
              </div>

              <div className="bg-white rounded-xl shadow-lg px-6 md:py-10 py-4 work-box h-full flex flex-col items-start">
                <Image src={step.icon} alt="" width={64} height={64} className="mb-4" />
                <h4 className="text-xl font-bold text-[#0b2148]">{step.title}</h4>
                <p className="mt-4 text-[#333]">{step.desc}</p>
              </div>

              {i === 0 && (
                <img
                  src="/images/blue-right-arrow.png"
                  className="hidden md:block absolute left-[-26px] top-1/2 -translate-y-1/2"
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
