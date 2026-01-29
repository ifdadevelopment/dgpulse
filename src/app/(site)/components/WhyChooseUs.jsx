const Tick = () => (
  <span className="text-green-600 text-lg font-bold">✓</span>
);

const Cross = () => (
  <span className="text-red-600 text-lg font-bold">✕</span>
);

export default function WhyChooseUs({ data }) {
  if (!data) return null;

  let list = [];

  if (Array.isArray(data)) {
    list = data;
  } else if (data.rows) {
    list = [data];
  } else {
    list = Object.values(data);
  }

  return (
    <>
      {list.map((item, index) => (
        <section
          key={index}
          className="w-full md:py-20 py-14 flex items-center justify-center px-4 bg-sky bg-center"
        >
          <div className="max-w-4xl w-full text-center mx-auto md:px-4 px-2">
            <h2 className="text-2xl md:text-5xl font-extrabold mb-4 text-[#0b1a3a]/60">
              {item.title?.replace("Digital Pulse", "")}
              <span className="text-[#0b1a3a]"> Digital Pulse</span>
            </h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-14">
              {item.subtitle}
            </p>
            <div className="hidden md:block bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-100 py-4 px-6 font-bold text-gray-700 text-md uppercase">
                <div>Aspects</div>
                <div className="text-center">Digital Pulse</div>
                <div className="text-center">Other Agencies</div>
              </div>

              {item.rows?.map(([aspect, ours, others], i) => (
                <div
                  key={aspect}
                  className={`grid grid-cols-3 px-6 py-5 border-t ${
                    i % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <div className="font-bold">{aspect}</div>

                  <div className="flex justify-center">
                    {ours === "yes" ? <Tick /> : ours}
                  </div>

                  <div className="flex justify-center">
                    {others === "no" ? <Cross /> : others}
                  </div>
                </div>
              ))}
            </div>
            <div className="md:hidden space-y-4">
              {item.rows?.map(([aspect, ours, others]) => (
                <div
                  key={aspect}
                  className="bg-white rounded-xl p-5 shadow-md border text-left"
                >
                  <h4 className="font-semibold text-[#0b1a3a] mb-2">
                    {aspect}
                  </h4>

                  <p className="text-sm  text-gray-700">
                    <strong>Digital Pulse:</strong>{" "}
                    {ours === "yes" ? "✓" : ours}
                  </p>

                  <p className="text-sm  text-gray-500 mt-1">
                    <strong>Other Agencies:</strong>{" "}
                    {others === "no" ? "✕" : others}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
