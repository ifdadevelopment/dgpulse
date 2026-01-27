"use client";

import Image from "next/image";

export default function HelpSection() {
  return (
    <section id="help" className="bg-[#f7f9fb] py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center max-w-4xl mx-auto">
          <h4 className="text-2xl md:text-3xl font-bold text-[#0b2148]">
            Tell Us, How Can We Help You?
          </h4>

          <p className="mt-6 text-[#333] text-base md:text-lg leading-relaxed">
            Leading businesses of India and across the globe recognize Techginia&apos;s
            leadership in Smart Data Dashboards & Intelligent Insights. Share your
            pressing business challenges with us, and let us present the best way forward.
          </p>
        </div>

        <div id="schedule-call" className="mt-16 max-w-5xl mx-auto">

          <div className="flex flex-col items-center">
            <div className="bg-[#0b2148] text-white font-bold px-8 py-3 rounded-full tracking-wide">
              YES, I AM READY
            </div>

            <Image
              src="/images/white-arrow.png"
              alt="Arrow"
              width={40}
              height={40}
              className="mt-4"
            />
          </div>
          <div className="mt-10 bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h5 className="text-xl md:text-2xl font-extrabold text-[#0b2148] mb-10 text-center">
              Please Schedule My 45-Min Discovery Call
            </h5>

            <form
              action="https://forms.zohopublic.in/techginia1/form/Lead/formperma/R3XAcpQrLIb0m0wmyYLOxWwPPwQsKxYCr90nIUS0oQA/htmlRecords/submit"
              method="POST"
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <input
                    type="text"
                    name="SingleLine"
                    placeholder="Company Name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#0b2148]"
                  />

                  <input
                    type="text"
                    name="PhoneNumber_countrycode"
                    placeholder="Mobile"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#0b2148]"
                  />
                </div>

                <div className="space-y-6">
                  <input
                    type="text"
                    name="SingleLine1"
                    placeholder="Name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#0b2148]"
                  />

                  <input
                    type="email"
                    name="Email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#0b2148]"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#0b2148] hover:bg-[#091b3a] text-white font-bold px-10 py-4 rounded-full transition"
                >
                  SUBMIT YOUR REQUEST FOR ONE-ON-ONE CALL
                </button>

                <p className="mt-4 text-sm text-[#333]">
                  You will receive a Calendly link to check available slots to book on your email.
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
