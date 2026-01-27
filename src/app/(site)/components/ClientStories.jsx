import Image from "next/image";

export default function ClientStories() {
  return (
    <section className="w-full md:py-28 py-16 bg-light">
      <div className="max-w-6xl mx-auto md:px-6 px-3">
        <div className="text-center max-w-4xl mx-auto md:mb-20 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1a3a] leading-tight">
            Most{" "}
            <span className="text-[#0b1a3a]">
              Satisfied Client Stories
            </span>
          </h2>
          <p className="text-gray-700 mt-4 text-lg">
            Organic clients. Organic results. See how our strategies transformed
            brands and accelerated growth.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="md:text-3xl text-xl font-extrabold text-[#0b1a3a] leading-snug mb-4">
              Consistent updates, new video ideas, and campaign support whenever
              needed.
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our client witnessed significant improvements in marketing
              performance after transitioning to AI-powered video content.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                ["410%", "Higher Engagement"],
                ["3×", "Better Conversions"],
                ["2.1×", "Stronger Brand Recall"],
                ["10×", "Faster Production Workflow"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="bg-[#0b1a3a]/5 md:p-5 p-3 rounded-2xl text-center border border-[#0b1a3a]/10"
                >
                  <h4 className="md:text-3xl text-2xl font-extrabold text-[#0b1a3a]">
                    {value}
                  </h4>
                  <p className="text-[#0b1a3a]/60 font-semibold md:text-sm text-[12px] mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <p className="text-gray-700 italic leading-relaxed">
                “Our marketing videos finally look modern and engaging. The AI
                visuals helped us stand out and we saw better engagement almost
                immediately.”
              </p>
              <p className="mt-4 font-bold text-[#0b1a3a]">
                — IFDA Institute, Delhi
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-full h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <Image
                src="/images/ai.webp"
                alt="Client satisfaction growth graph"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
