import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <Link href="/">
        <section
          id="home"
          className="relative bg-cover bg-center
             bg-none sm:bg-[image:var(--header-bg)]
             headerbg"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-4 pt-10 md:pt-[120px] pb-12 md:pb-[155px]">
            <div className="flex justify-center items-center md:items-start md:justify-start">
              <div className="w-full text-start  flex flex-col">
                <div className="flex relative items-start justify-start gap-2">
                  <button className="discover-btn">
                    PLUG SABi FRAMEWORK IN YOUR BUSINESS TO...
                  </button>
                  <Image
                    src="/images/white-down-arrow-01.jpg"
                    alt="Arrow"
                    width={28}
                    height={28}
                    className="plug-arrow"
                  />
                </div>
                <h1 className="HomeSectionH1 items-center justify-center md:items-start md:justify-start pt-8 sm:pt-10 leading-tight text-uppercase">
                  Achieve <br className="hidden sm:block" />
                  UNIMAGINABLE <br className="hidden sm:block" />
                  High Growth, rapidly!
                </h1>
                <div className="relative mt-6 sm:hidden w-full h-[220px]  overflow-hidden rounded-xl">
                  <Image
                    src="/images/header-bg-mb.png"
                    alt="Header Mobile"
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain mx-auto"
                  />
                </div>
                <p className="pt-6 text-[18px] sm:text-[21px] md:text-[25px] text-white font-normal leading-[30px] sm:leading-[35px] md:leading-[45px] txtsdw">
                  Get Better ROI, Take Quick Informed Decisions, and Achieve
                  <br className="hidden sm:block" />
                  Rapid Growth in Your Business with{" "}
                  <b>Intelligent ‘Data’ Insights.</b>
                </p>

              </div>
            </div>
          </div>
        </section>


      </Link></>
  );
}
