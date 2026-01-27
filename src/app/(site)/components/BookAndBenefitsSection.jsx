import Image from "next/image";

export default function BookAndBenefitsSection() {
  return (
    <section id="book" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center max-w-4xl w-full px-2 md:px-4 mx-auto">
          <div className="inline-block bg-slay font19-smart">
            Want to Know how this system can help you reclaim your market share?
          </div>
        </div>

        <div className="mt-16 book-box book-bg ">
          <div className="grid md:grid-cols-3 gap-4 items-center">

            <div className="hidden md:block">
              <Image
                src="/images/book-bg-big.jpg"
                alt="Book Background"
                width={500}
                height={600}
                className="w-full h-full object-cover book"
              />
            </div>

            <div className="md:col-span-2 px-6 md:px-10 py-10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0b2148]">
                Read Amit Gupta’s Popular New Book
              </h3>

              <div className="block md:hidden mt-6">
                <Image
                  src="/images/amit-book.jpg"
                  alt="Amit Gupta Book"
                  width={300}
                  height={400}
                  className="mx-auto"
                />
              </div>

              <p className="mt-6 text-[#333] text-base md:text-lg">
                In this book, Amit Gupta (Founder of Techginia) shares how to drive
                unprecedented growth with the power of intelligent data insights.
              </p>

              <p className="mt-8 font-semibold text-lg">
                Tell us where should we deliver your <span className="underline">FREE copy</span>?
              </p>

              <form className="mt-6 grid md:grid-cols-3 gap-4">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="border px-4 py-3 rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="NAME"
                  className="border px-4 py-3 rounded-md w-full"
                />
                <button
                  type="submit"
                  className="bg-[#faa61a] text-white font-semibold rounded-md px-6 py-3 hover:bg-[#e69510] transition"
                >
                  get your copy
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-4 text-left">
          {[
            {
              text: "Couldn’t sleep whole night after reading this book.",
              author: "GAURAV SAXENA (GLOBAL SYSTEM)",
            },
            {
              text: "Simply shocking! A must read for every businessman.",
              author: "AKSHAT BANSAL (BENZOVILLE)",
            },
            {
              text: "I literally regret not reading this book earlier.",
              author: "MANGESH YADAV (GERUA VISION)",
            },
          ].map((item, i) => (
            <div key={i}>
              <Image src="/images/star.jpg" alt="Rating" width={80} height={16} />
              <p className="mt-4 font-semibold text-lg">{item.text}</p>
              <p className="mt-2 text-sm">{item.author}</p>
            </div>
          ))}
        </div>

        <div className="border-t mt-10 md:mt-24" />

        <div id="benefits" className="mt-10 md:mt-24 text-center ">
          <h3 className="text-4xl md:text-5xl font-bold text-[#0b2148]">
            One System. <br className="md:hidden" /> A Million Benefits.
          </h3>

          <p className="mt-6 max-w-3xl mx-auto text-[#333]">
            With Smart Data Dashboard 2.0 plugged in, you can see real-time results,
            spot opportunities for growth & re-engineer processes to capture high growth.
          </p>
        </div>

        <div className="mt-20 grid lg:grid-cols-3 gap-12 items-start ">
          {[
            {
              img: "/images/tack-sharp.jpg",
              title: "Take Sharp and Swift Decisions",
              desc: "Have full clarity on what is happening & why. Take course correction quickly.",
            },
            {
              img: "/images/knock-out.jpg",
              title: "Knock-out Every Competition",
              desc: "Hook the right customers and knock out competition using insights.",
            },
            {
              img: "/images/build-fail.jpg",
              title: "Build Fail-proof Processes",
              desc: "Optimize processes fully backed by near real-time data insights.",
            },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="mx-auto"
              />
              <h4 className="mt-6 text-xl font-bold text-[#0b2148]">
                {item.title}
              </h4>
              <p className="mt-4 text-[#333]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="md:mt-20 mt-5 grid md:grid-cols-2 gap-12 circle-pattern">
          {[
            {
              img: "/images/gain-full.jpg",
              title: "Gain Full Control on Business",
              desc: "Get holistic view of all processes 24/7 from anywhere.",
            },
            {
              img: "/images/attain-total.jpg",
              title: "Attain Total Peace of Mind",
              desc: "Become cash-rich, debt-free and stress-free.",
            },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={350}
                className="mx-auto"
              />
              <h4 className="mt-6 text-xl font-bold text-[#0b2148]">
                {item.title}
              </h4>
              <p className="mt-4 text-[#333]">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
