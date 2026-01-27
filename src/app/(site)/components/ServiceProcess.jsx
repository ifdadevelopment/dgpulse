export default function ServiceProcess({ data }) {
  if (!data) return null;

  let list = [];

  if (data.steps) {
    list = [data]; 
  } else if (typeof data === "object") {
    list = Object.values(data).filter(item => item?.steps);
  }

  if (list.length === 0) return null;

  return (
    <>
      {list.map((processData, idx) => {
        const { heading, subheading, steps } = processData;

        return (
          <section
            key={idx}
            className="w-full md:py-24 py-16 md:px-6 px-3 bg-sky"
          >
            <div className="max-w-6xl mx-auto text-center md:px-4 px-2">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-[#0b1a3a]">
                {heading}
              </h2>

              <p className="text-gray-700 max-w-2xl mx-auto mb-16">
                {subheading}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {steps.map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-white border border-gray-200
                      md:p-8 p-6 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                      hover:shadow-[0_20px_60px_rgba(11,26,58,0.35)]
                      transition-all duration-500 group"
                  >
                    <div className="absolute -top-4 left-6 text-sm px-4 py-1 rounded-full
                      bg-[#faa61a] text-white shadow-md">
                      {item.step}
                    </div>

                    <div className="w-16 h-16 rounded-2xl mx-auto mb-6
                      bg-[#0b1a3a] flex items-center justify-center text-3xl text-white
                      shadow-lg group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>

                    <h3 className="text-2xl font-semibold mb-4 text-[#0b1a3a]">
                      {item.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="absolute inset-0 rounded-3xl opacity-0
                      group-hover:opacity-100 pointer-events-none
                      bg-[#0b1a3a]/5 transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
