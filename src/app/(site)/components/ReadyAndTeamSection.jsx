import Image from "next/image";
import Link from "next/link";

export default function ReadyAndTeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* READY CTA */}
        <div className="bg-[#f7f9fb] rounded-3xl text-center p-10 md:p-16 relative">
          <Image
            src="/images/yellow-down-arrow.png"
            alt=""
            width={40}
            height={40}
            className="mx-auto mb-6"
          />

          <h5 className="text-2xl md:text-4xl font-bold text-[#0b2148]">
            Ready to Leverage the Power of Intelligent Insights?
          </h5>

          <p className="mt-6 text-[#333] max-w-3xl mx-auto">
            Let a highly qualified team of Techginia examine your business
            requirements and tailor a specialized data solution to position you
            for unprecedented growth.
          </p>

          <div className="mt-10">
            <Link href="#schedule-call">
              <button className="bg-[#0b2148] hover:bg-[#091b3a] text-white font-bold px-8 py-4 rounded-full transition">
                YES, I AM READY. PLEASE SCHEDULE MY CALL.
              </button>
            </Link>
          </div>
        </div>

        {/* INTRO */}
        <div className="text-center mt-24">
          <div className="inline-block bg-[#e6f0f3] px-6 py-2 rounded-full font-semibold text-sm tracking-wide">
            AT EVERY STEP, YOU’LL BE ASSISTED BY TEAM TECHGINIA – WHO ARE...
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#0b2148] mt-8">
            The Sharpest Data Evangelists
          </h2>

          <p className="mt-8 max-w-4xl mx-auto text-[#333]">
            Techginia is a rapidly growing data management and analytics consulting
            firm providing enterprise-level solutions across India, the US, Europe,
            and Asia.
            <br /><br />
            Led by a team that has helped hundreds of global companies transform
            their business using data-driven insights.
          </p>
        </div>

        {/* AMIT GUPTA */}
        <div id="amit-gupta" className="mt-24 border-t pt-20">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#0b2148] text-white px-6 py-2 rounded-full font-semibold">
              THE CORE TEAM
            </div>
            <Image
              src="/images/white-arrow.png"
              alt=""
              width={40}
              height={40}
              className="mx-auto mt-4"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="text-2xl font-bold text-[#0b2148]">Amit Gupta</h6>
              <p className="uppercase text-sm font-semibold mt-1">
                Founder of Techginia & Creator of SABi Framework
              </p>

              <Image
                src="/images/meet-amit-mb.jpg"
                alt="Amit Gupta"
                width={600}
                height={400}
                className="w-full rounded-xl my-6 md:hidden"
              />

              <p className="text-[#333] mt-6 leading-relaxed">
                Popularly known as the “Number Cruncher”, Amit has helped his
                clients <span className="font-bold underline">earn and save millions</span> year on year.
                <br /><br />
                With Smart Data Dashboard built on SABi Framework, Amit and his
                team enable faster, smarter decision-making.
                <br /><br />
                He is also the author of the <span className="font-bold underline">bestselling book</span> –
                “Reclaim Your Market Share with Modern Data Analytics”.
              </p>

              <a
                href="https://amitgupta.one/"
                target="_blank"
                className="inline-flex items-center mt-8 font-bold text-[#0b2148] uppercase"
              >
                Discover more about Amit
                <Image
                  src="/images/circle-blue-arrow.jpg"
                  alt=""
                  width={20}
                  height={20}
                  className="ml-3"
                />
              </a>
            </div>

            <div className="hidden md:block">
              <Image
                src="/images/amit-gupta.png"
                alt="Amit Gupta"
                width={500}
                height={600}
                className="w-full rounded-2xl"
              />
            </div>
          </div>

          {/* TEAM MEMBERS */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Yogesh */}
            <div className="bg-[#f7f9fb] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#0b2148]">Yogesh Gupta</h3>
              <p className="uppercase text-sm font-semibold">COO</p>

              <Image
                src="/images/yogesh-gupta-mb.png"
                alt=""
                width={400}
                height={400}
                className="w-full rounded-xl my-6 md:hidden"
              />

              <p className="text-[#333] mt-4">
                Technology enthusiast with a proven track record of delivering
                complex projects overnight using a human-centered approach.
              </p>

              <a
                href="https://www.linkedin.com/in/yogeshgupta97/"
                target="_blank"
                className="inline-block mt-6"
              >
                <Image src="/images/linked-icon-team.png" alt="" width={28} height={28} />
              </a>
            </div>

            {/* Amarjeet */}
            <div className="bg-[#f7f9fb] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#0b2148]">Amarjeet Sharma</h3>

              <Image
                src="/images/amarjeet-sharma-techginia.png"
                alt=""
                width={400}
                height={400}
                className="w-full rounded-xl my-6 md:hidden"
              />

              <p className="text-[#333] mt-4">
                Data engineer & Excel enthusiast who solves end-to-end data
                problems and delivers fundamental insights with a result-driven
                mindset.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
