import Image from "next/image";
import { clientStoriesBySlug } from "../data/services";
export default function ClientStories({ clientSlug }) {
  const data = clientStoriesBySlug[clientSlug];
  if (!data) return null;

  return (
    <section className="w-full py-16 md:py-28 bg-light">
      <div className="max-w-6xl mx-auto px-3 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1a3a] leading-tight">
            Most <span>Satisfied Client Stories</span>
          </h2>
          <p className="text-gray-700 mt-4 text-lg">
            Organic clients. Organic results. See how our strategies transformed
            brands and accelerated growth.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl md:text-3xl font-extrabold text-[#0b1a3a] mb-4">
              {data.title}
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {data.description}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {data.stats.map(([value, label]) => (
                <div
                  key={label}
                  className="bg-[#0b1a3a]/5 p-3 md:p-5 rounded-2xl text-center border border-[#0b1a3a]/10"
                >
                  <h4 className="text-2xl md:text-3xl font-extrabold text-[#0b1a3a]">
                    {value}
                  </h4>
                  <p className="text-[#0b1a3a]/60 font-semibold text-[12px] md:text-sm mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
              <p className="italic text-gray-700 leading-relaxed">
                {data.testimonial}
              </p>
              <p className="mt-4 font-bold text-[#0b1a3a]">
                — {data.author}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <Image
                src={data.image}
                alt="Client satisfaction"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
