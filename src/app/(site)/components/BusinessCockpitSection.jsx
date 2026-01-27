import Image from "next/image";

export default function BusinessCockpitSection() {
  return (
    <section className="bg-[#051533]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex justify-center">
          <div className="w-full lg:w-9/12 text-center">

            {/* Heading */}
            <h6 className="text-[26px] md:text-[30px] font-semibold text-sky-400">
              It’s like having...
            </h6>
            <h3 className="text-sky-400 text-[26px] md:text-[32px] pt-2">
              A Cockpit View of Your Business
            </h3>

            {/* Description */}
            <p className="pt-10 text-left text-white font-normal md:pl-14 leading-relaxed">
              Smart Data Dashboard 2.0 works like a cockpit of your business
              where all vital information is available on-screen and on-demand.
              It is like seeing &amp; running your business from 33,000 feet height.
              <br /><br />
              Smart Data Dashboard 2.0 is...
            </p>

            {/* Feature List */}
            <div className="pt-12 md:pl-14">
              <div className="grid md:grid-cols-2 gap-10 text-left">

                {/* Left column */}
                <div className="space-y-6">
                  <Feature text="Incredibly easy yet astonishingly powerful" />
                  <Feature text="Trusted by industry champions" />
                </div>

                {/* Right column */}
                <div className="space-y-6">
                  <Feature text="100% safe & secure" />
                  <Feature text="Easy to implement" />
                </div>

              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/20 mt-14" />

            {/* Dashboard Section */}
            <div id="dashboard" className="pt-10">
              <h3 className="text-sky-400 text-[26px] md:text-[32px]">
                Dashboard for Every Business
              </h3>

              <p className="text-white text-[18px] md:text-[23px] pt-4 pb-6">
                We provide <span className="text-orange-400">10+ Dashboards</span>{" "}
                to help you get
                <br className="hidden sm:block" />
                unimaginable insights of your business on-demand.
              </p>

              <div className="flex justify-center">
                <Image
                  src="/images/white-down-arrow.png"
                  alt="Scroll Down"
                  width={30}
                  height={30}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Feature Item */
function Feature({ text }) {
  return (
    <div className="flex items-start gap-4">
      <Image
        src="/images/yello-right-arrow.png"
        alt="Arrow"
        width={18}
        height={18}
        className="mt-1"
      />
      <p className="text-white">{text}</p>
    </div>
  );
}
