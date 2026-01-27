import Image from "next/image";

export default function ServiceProblems({ data }) {
  if (!data) return null;

  return (
    <section className="w-full py-24 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b1a3a]">
            {data.heading}
          </h2>

          <p className="text-gray-700 text-[15px] font-medium leading-relaxed max-w-xl">
            {data.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-200 p-6
                shadow-lg transition-all duration-500
                hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-full h-48 relative rounded-xl overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#0b1a3a] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-[14px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
