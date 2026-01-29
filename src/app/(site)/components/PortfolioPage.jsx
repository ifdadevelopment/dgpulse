import { PORTFOLIO_SECTIONS } from "../data/services";
import { PortfolioCard } from "./PortfolioCard";


export default function PortfolioPage() {
  return (
    <div className="bg-sky">
      <div className="relative text-center py-14 md:py-24  shadow-xl">
        <div className="absolute inset-0 " />

        <h1 className="relative text-3xl md:text-5xl font-extrabold mb-4">
          Our Client Portfolio
        </h1>

        <p className="relative text-base md:text-lg opacity-80 max-w-2xl mx-auto px-4">
          A showcase of premium websites, ecommerce platforms, CRM systems &
          high-performing digital solutions.
        </p>
      </div>
      <div className="max-w-6xl mx-auto md:py-20 py-8 px-4 md:px-6">
        {PORTFOLIO_SECTIONS.map((section) => (
          <section key={section.heading} className="md:mb-20 mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8 md:mb-14">
              <span className="bg-[#0b1a3a] hover:bg-[#faa61a]
                               text-transparent bg-clip-text">
                {section.heading}
              </span>
            </h2>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <PortfolioCard key={item.title} {...item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
