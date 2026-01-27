import Image from "next/image";

export default function ServiceExpectations({ data }) {
  if (!data) return null;

  return (
    <section className="w-full md:py-24 py-12 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl md:text-5xl font-extrabold text-[#061A40]/60  leading-tight">What You Can Expect from{""}
            <span className="text-2xl md:text-5xl font-extrabold text-[#0b1a3a] leading-tight ">{" "}{data.heading}</span>
          </h2>

          <p className="text-gray-700 text-lg mt-5 leading-relaxed">
            {data.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {data.stats.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-2xl text-center border"
            >
              <h3 className="text-3xl font-bold text-[#0b1a3a]">
                {item.value}
              </h3>
              <p className="text-gray-600 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-2xl border
                transition-all duration-300 hover:shadow-lg"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
              />

              <h4 className="text-xl font-semibold mt-4 text-[#0b1a3a]">
                {item.title}
              </h4>

              <p className="text-gray-600 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
