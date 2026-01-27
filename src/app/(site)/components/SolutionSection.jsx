import Image from "next/image";

export default function SolutionSection() {
  return (
    <section id="solution" className="bg-light">
      <div className="max-w-6xl mx-auto md:px-6 px-3 md:pt-20 pt-4 pb-10 md:pb-24">
        <div className="text-center">
          <p className="text-[22px] md:text-[26px] font-semibold text-[#03122e]">
            If your answer is “Yes”, then it’s high-time you must...
          </p>

          <h4 className="text-[34px] md:text-[42px] font-bold text-[#03122e] mt-3 mb-10">
            Switch from Chaos to Intelligent Insights
          </h4>
          <div className="relative w-full h-[350px] sm:hidden rounded-xl overflow-hidden mb-10">
            <Image
              src="/images/plugging-dashboard.png"
              alt="Business Intelligence Dashboard"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-800 text-[17px] md:text-[22px] leading-relaxed text-left">
            <p>
              <b>Make no mistake...</b>
              <br />
              The secret of your business growth demands smarter, sharper, and swift
              business decisions backed by intelligent <b>‘data’ insights</b>.
            </p>

            <p className="mt-4">
              To achieve this, you must come out of all the noise of Excel sheets,
              ill-prepared reports, and half-baked assumptions – because none of these
              will give you clarity, certainty, and confidence to take action.
            </p>

            <p className="mt-4">
              What you really need is <b>“intelligent insights”</b> gathered from your
              business data to <b>fix leakages, boost cash-flow, skyrocket ROI</b>, and
              move your business into the next orbit of success.
            </p>
          </div>
          <div className="relative hidden sm:block w-full h-[360px] rounded-xl overflow-hidden">
            <Image
              src="/images/plugging-dashboard.png"
              alt="Business Intelligence Dashboard"
              fill
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
