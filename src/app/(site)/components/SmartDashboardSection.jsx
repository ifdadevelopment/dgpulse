import Image from "next/image";

export default function SmartDashboardSection() {
  return (
    <section className="bg-sky">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="inline-block font19-smart font19-smartxs bg-slay text-[15px] md:text-[19px] font-medium px-4 py-2 rounded-lg">
            THE ONE REVOLUTIONARY SYSTEM THAT MAKES IT POSSIBLE IS...
          </div>

          <h2 className="text-2xl md:text-[76px] font-bold text-[#0b2148] md:mt-4 mt-2">
            Smart Data Dashboard 2.0
          </h2>
        </div>
        <div className="max-w-4xl colorb mx-auto md:mt-10 mt-6 text-left  text-[18px] md:text-lg leading-relaxed">
          <p>
            Built on our proprietary SABi Framework, Smart Data Dashboard 2.0 is a
            path-breaking system that helps you access all your business data in a
            single unified place and get intelligent insights that are easy to spot.
            <br /><br />
            It unlocks the potential in all data — internal, external, structured &
            unstructured. It also helps you gain a holistic view, fix the
            money-leaking gaps, optimize the operations and take swift business
            decisions based on solid facts.
          </p>
        </div>
        <div className="mt-12">
          <Image
            src="/images/dashboard.png"
            alt="Smart Data Dashboard"
            width={1200}
            height={650}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="text-center mt-20">
          <h5 className="text-2xl md:text-5xl font-semibold text-[#0b2148]">
            Valuable Insights, Available On-the-Go
          </h5>

          <p className="mt-6 colorb text-[18px] md:text-xl leading-relaxed max-w-5xl mx-auto">
            From internal documents to spreadsheets to accounting software and
            <br className="hidden sm:block" />
            beyond, we extract, clean & refine data from various sources and present
            it on
            <br className="hidden sm:block" />
            custom dashboards to help you make informed decisions fast.
            <br /><br />
            Leading companies from following segments trust our data dashboard to
            <br className="hidden sm:block" />
            gain a holistic view of their businesses and get a competitive edge.
          </p>
        </div>
        <div className="mt-16">
          <div className="hidden md:block">
            <Image
              src="/images/Insights-dashboard-big.jpg"
              alt="Insights Dashboard Desktop"
              width={1200}
              height={650}
              className="w-full h-auto"
            />
          </div>

          <div className="block sm:hidden">
            <Image
              src="/images/Insights-dashboard-mb.jpg"
              alt="Insights Dashboard Mobile"
              width={800}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
