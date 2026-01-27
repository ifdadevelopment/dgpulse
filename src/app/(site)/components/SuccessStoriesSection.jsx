import Image from "next/image";

export default function SuccessStoriesSection() {
  return (
    <section id="success-stories" className="bg-[#0b2148] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Success Stories
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            98.3% of our clients started getting amazing results within a month of
            plugging Smart Data Dashboard 2.0 in their business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div className="bg-white rounded-xl p-8 relative">
            <h3 className="text-[56px] font-extrabold text-orange-500">12%</h3>

            <h4 className="text-2xl font-extrabold text-[#0b2148] mt-2 relative z-10">
              Growth in Sales in Just 3 Months.
            </h4>

            {/* <Image
              src="/images/red-circle.png"
              alt=""
              width={120}
              height={120}
              className="absolute top-10 right-8"
            /> */}

            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              I was shell-shocked when Techginia’s data analytics dashboard brought
              forth factors that were causing us lakhs of losses, every day! This
              system proved life-saver for us.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <Image
                src="/images/ravikant-chopra.jpg"
                alt="Ravikant Chopra"
                width={56}
                height={56}
                className="rounded-full"
              />
              <div className="text-sm">
                <p className="font-bold uppercase text-[#0b2148]">
                  Ravikant Chopra
                </p>
                <p className="text-gray-600">Co-Founder, Incremint</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-[56px] font-extrabold text-orange-500">7%</h3>

            <h4 className="text-2xl font-extrabold text-[#0b2148] mt-2">
              Jump in Revenue in Just 2 Months.
            </h4>

            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              Techginia’s dashboards worked incredibly well for us. Not just that,
              Amit also helped us plug the money-draining gaps and find ways to
              generate more revenue without escalating cost.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <Image
                src="/images/vipin-aggarwal.png"
                alt="Vipin Aggarwal"
                width={56}
                height={56}
                className="rounded-full"
              />
              <div className="text-sm">
                <p className="font-bold uppercase text-[#0b2148]">
                  Vipin Aggarwal
                </p>
                <p className="text-gray-600">Co-Founder, Candes Technology</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 relative">
            <h3 className="text-[56px] font-extrabold text-orange-500">9%</h3>

            {/* <Image
              src="/images/red-down-arrow.png"
              alt=""
              width={80}
              height={80}
              className="absolute top-10 right-6"
            /> */}

            <h4 className="text-2xl font-extrabold text-[#0b2148] mt-2">
              More Conversion than Before.
            </h4>

            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              Amit was quick to understand our unique challenges and could present
              viable & practical solution quickly. Team Techginia supported us all
              along the journey.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <Image
                src="/images/tarun-kumar.jpg"
                alt="Tarun Kumar"
                width={56}
                height={56}
                className="rounded-full"
              />
              <div className="text-sm">
                <p className="font-bold uppercase text-[#0b2148]">
                  Tarun Kumar
                </p>
                <p className="text-gray-600">CEO, DataGardener.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-10 text-center mt-20 text-white">

          <div>
            <p className="font29-box ">Infinite data points</p>
            <p className="mt-3 tracking-wide font16-box">
              our smart dashboard system<br className="hidden sm:block" />
              can track every minute data point
            </p>
          </div>

          <div className="hidden sm:block">
            <div className="flex items-center justify-center gap-4">
              <Image src="/images/left-leaf.png" alt="" width={40} height={40} />
              <div>
                <p className="font29-box1">2cr+ per month</p>
                <p className="mt-2 font16-box">
                  average revenue saved per clients during last financial year
                </p>
              </div>
              <Image src="/images/right-leaf.png" alt="" width={40} height={40} />
            </div>
          </div>

          <div className="block sm:hidden">
            <p className=" font29-box">2cr+ per month</p>
            <p className="mt-3 font16-box ">
              average revenue saved per clients
            </p>
          </div>

          <div>
            <p className="font29-box ">4.9 Star rating</p>
            <p className="mt-3 font16-box">
              our dashboards have received<br className="hidden sm:block" />
              from our 100+ clients
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
