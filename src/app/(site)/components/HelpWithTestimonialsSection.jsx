"use client";

import Image from "next/image";

export default function HelpWithTestimonialsSection() {
  return (
    <section className="bg-light md:py-14 py-5" id="schedule-call">
      <div className="max-w-6xl mx-auto px-4">

        <div id="help" className="mt-14 max-w-5xl mx-auto text-center">
          <h4 className="text-2xl md:text-6xl font-bold text-[#0b2148]">
            Tell Us, How Can We Help You?
          </h4>

          <p className="mt-6 text-[#0b2148] text-base max-w-4xl w-full mx-auto md:text-[23px] px-2 leading-relaxed">
            Leading businesses of India and across the globe recognize
            Techginia&apos;s leadership in Smart Data Dashboards & Intelligent
            Insights. Share your pressing business challenges with us, and let
            us present the best way forward.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto mt-24">
          <div className="absolute -top-10 left-10 -translate-x-1/2 flex flex-col items-center z-10">
            <div className="bg-[#0b2148] text-white font-bold px-8 py-3 rounded-full tracking-wide ready-btn shadow-lg">
              YES, I AM READY
            </div>

            <Image
              src="/images/white-arrow.png"
              alt="Arrow"
              width={40}
              height={40}
              className="mt-2 white-down-arrow2"
            />
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-8 md:pt-22 pt-12" >
            <h5 className="text-3xl md:text-4xl font-extrabold text-[#0b2148] mb-10 text-center">
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
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#0b2148] outline-none"
                  />
                  <input
                    type="text"
                    name="PhoneNumber_countrycode"
                    placeholder="Mobile"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#0b2148] outline-none"
                  />
                </div>

                <div className="space-y-6">
                  <input
                    type="text"
                    name="SingleLine1"
                    placeholder="Name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#0b2148] outline-none"
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#0b2148] outline-none"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="form-btn text-white font-bold rounded-full transition"
                >
                  SUBMIT YOUR REQUEST FOR ONE-ON-ONE CALL
                </button>

                <p className="mt-4 text-sm text-[#333]">
                  You will receive a Calendly link to check available slots to
                  book on your email.
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="relative max-w-5xl mx-auto mt-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <div>
              <Image src="/images/star.png" alt="Rating" width={80} height={20} />
              <h4 className="mt-6 text-lg md:text-xl font-bold text-[#0b2148]">
                That one call with Amit was{" "}
                <span className="underline">worth a million</span> for me.
              </h4>
              <p className="mt-4 text-[#333]">
                He & his team solved my PPM challenge on phone only and later
                built a system that saved lakhs per month.
              </p>
              <div className="mt-6 border-l-4 border-red-500 pl-4 font-bold text-[#0b2148] uppercase">
                Ravikant Chopra
                <div className="font-normal normal-case text-sm">
                  (Co-Founder, Incremint)
                </div>
              </div>
            </div>

            <div>
              <Image src="/images/star.png" alt="Rating" width={80} height={20} />
              <h4 className="mt-6 text-lg md:text-xl font-bold text-[#0b2148]">
                10 min into the call I could sense Techginia can{" "}
                <span className="underline">solve my challenges</span>.
              </h4>
              <p className="mt-4 text-[#333]">
                They make things so simple, present practical solutions and
                actually have ideas I have never thought before.
              </p>
              <div className="mt-6 border-l-4 border-red-500 pl-4 font-bold text-[#0b2148] uppercase">
                Gaurav Bhasin
                <div className="font-normal normal-case text-sm">
                  (Co-Founder, Incremint)
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-300" />
        </div>

      </div>
    </section>
  );
}
