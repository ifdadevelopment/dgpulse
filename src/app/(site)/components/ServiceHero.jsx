"use client";

import Image from "next/image";

export default function ServiceHero({ dynamicsServices }) {
  const handleScrollToAppointment = () => {
    const section = document.getElementById("Appointment");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f9fc] py-16 md:py-28 md:px-6 px-4 md:mt-10 mt-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.9),rgba(255,255,255,0))]" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-2xl md:text-[40px] font-extrabold leading-tight text-[#061A40]/80">
            {dynamicsServices.title}
          </h1>

          {dynamicsServices.subtitle && (
            <p className="mt-2 text-3xl md:text-[42px] font-semibold text-[#061A40]/60">
              {dynamicsServices.subtitle}
            </p>
          )}

          <p className="mt-6 text-lg text-gray-700 max-w-xl leading-relaxed">
            {dynamicsServices.description}
          </p>

          {dynamicsServices.highlights?.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-8">
              {dynamicsServices.highlights.map((item) => (
                <div
                  key={item}
                  className="px-5 py-3 bg-white/80 rounded-xl backdrop-blur shadow-md hover:shadow-lg transition"
                >
                  <span className="font-semibold text-[#061A40]">{item}</span>
                </div>
              ))}
            </div>
          )}
          <button
            onClick={handleScrollToAppointment}
            className="inline-block mt-10 px-10 py-4 rounded-full
              text-white font-semibold text-lg
              bg-[#061A40] hover:bg-[#faa61a] shadow-lg
              hover:shadow-2xl hover:scale-105 transition-all"
          >
            Start Growing →
          </button>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-[360px] h-[360px] bg-[#061A40]/20 blur-3xl rounded-full -z-10" />
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white/40 backdrop-blur-xl">
            <Image
              src={dynamicsServices.image}
              alt={dynamicsServices.title}
              width={520}
              height={520}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
