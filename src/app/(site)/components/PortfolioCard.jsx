import Image from "next/image";

export const PortfolioCard = ({ image, title, desc, link }) => (
  <div className="rounded-2xl bg-white p-6 shadow-lg border border-[#0b1a3a] backdrop-blur-md
                  hover:shadow-2xl transition-all duration-300 hover:border-[#0b1a3a]">

    <div className="relative h-56 mb-6 rounded-xl bg-gradient-to-br from-[#0b1a3a]/10 to-[#eef3fb]
                    flex items-center justify-center">
      <Image
        src={image}
        alt={title}
        fill
        className="object-contain p-4"
        sizes="(max-width:768px) 100vw, 33vw"
      />
    </div>

    <h3 className="text-md md:text-lg font-bold text-gray-900 mb-3">
      {title}
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed mb-6">
      {desc}
    </p>

    <a
      href={link}
      target="_blank"
      className="inline-block w-full text-center text-white py-2.5 rounded-lg font-medium
                 bg-[#0b1a3a] hover:bg-[#faa61a] hover:opacity-90 transition"
    >
      View Project
    </a>
  </div>
);
