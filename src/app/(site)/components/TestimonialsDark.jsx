export default function TestimonialsDark() {
  return (
    <section className="w-full md:py-24 py-12 md:px-6 px-3 bg-gradient-to-br from-[#0b1a3a] via-[#08132b] to-[#020617] text-white">
      <div className="max-w-6xl mx-auto text-center md:px-4 px-2">
        <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
          <span className="text-3xl text-[#0b1a3a]">💬</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
          Trusted by Industry Leaders
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-20">
          We build long-term partnerships — here’s what our clients say about
          working with us.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              text:
                "Scribo Solution transformed our online presence completely. Their attention to detail and technical expertise is unmatched.",
              name: "Ashish S.",
              role: "CEO, Layered Interio Ltd.",
              initial: "A",
            },
            {
              text:
                "They delivered a beautiful, fast, and user-friendly platform. The ROI we have seen since launch has been incredible.",
              name: "Amogh A.",
              role: "Founder, ShivSena",
              initial: "A",
            },
            {
              text:
                "The team is incredibly professional. They took our complex requirements and turned them into a simple, elegant solution.",
              name: "Afreen B.",
              role: "Founder, Scroll Stories",
              initial: "A",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 backdrop-blur-xl md:p-8  p-4 rounded-3xl shadow-[0_8px_35px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_55px_rgba(0,0,0,0.55)] hover:scale-[1.03] transition-all duration-500 flex flex-col justify-between"
            >
              <p className="text-gray-200 leading-relaxed mb-6 text-[15px]">
                “{item.text}”
              </p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0b1a3a] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.initial}
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-white text-lg">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-400">{item.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-5 ml-[60px] text-yellow-400 text-lg">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
