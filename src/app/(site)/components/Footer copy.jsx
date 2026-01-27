import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#051533] to-[#061a40] text-[#edf3ff]">
      <div className="max-w-6xl mx-auto md:px-4  px-3 md:py-16 py-4">
        <div className="mb-6">
          <Image
            src="/images/techginia-logo_2024_white.png"
            alt="Techginia"
            width={190}
            height={50}
            className="h-auto max-w-[190px]"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          <div className="space-y-4 text-start">
            <p className="text-sm leading-7 font-medium
                block
                lg:border-r lg:border-white/10
                lg:pr-6 lg:min-h-[80px]">
              India’s leading data analytics and business intelligence
              consultancy company
            </p>
            <div className="block lg:hidden border-b border-white/10 w-full"></div>
          </div>
          <div className="space-y-4 text-start text-sm font-medium
                hidden lg:block
                lg:border-r lg:border-white/10
                lg:pr-6 lg:min-h-[70px]">
            <p className="leading-7">
              AltF, 1st Floor, Orchid Business Park,<br />
              Sohna Road, Sector 48,
              <b>Gurugram</b> 122001, Haryana, (India)
            </p>
          </div>
          <div className="space-y-4 text-start text-sm font-medium block lg:hidden">
            <p className="leading-7">
              AltF, 1st Floor, Orchid Business Park,
              Sohna Road, Sector 48,
              <b>Gurugram</b> 122001, Haryana, (India)
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
            <div className="space-y-3 order-1 lg:order-2 text-sm font-medium">
              <p className="flex items-center gap-2 hover:text-[#faa61a] transition">
                +91 (9811) 299 501
                <Image
                  src="/images/indian-flag.png"
                  alt="India"
                  width={18}
                  height={12}
                />
              </p>

              <a
                href="mailto:care@techginia.com"
                className="hover:text-[#faa61a] transition"
              >
                care@techginia.com
              </a>
            </div>
            <div className="flex justify-start mt-8 md:mt-0 lg:justify-center order-2 lg:order-1">
              <Image
                src="/images/qr-code.jpg"
                alt="QR Code"
                width={70}
                height={70}
                className="rounded"
              />
            </div>
          </div>
        </div>
        <div className="md:mt-10 mt-8 border-t border-white/10 md:border-0 pt-8 ">
          <div className="flex flex-wrap md:justify-center justify-start gap-x-4 gap-y-3 md:text-[16px] text-xs font-semibold">
            <a href="#dashboard" className="hover:text-[#faa61a] transition">
              Smart Data Dashboard
            </a>
            <a href="#benefits" className="hover:text-[#faa61a] transition">
              Benefits
            </a>
            <a href="#success-stories" className="hover:text-[#faa61a] transition">
              Success Stories
            </a>
            <a href="#schedule-call" className="hover:text-[#faa61a] transition">
              Book A Discovery Call <span className="border-r-2 ml-3 border-[#faa61a]"></span>
            </a>
            <a
              href="http://amitgupta.one"
              target="_blank"
              className="hover:text-[#faa61a] transition"
            >
              About Amit
            </a>

            <a
              href="http://amitgupta.one/#sabiframework"
              target="_blank"
              className="flex items-center gap-2 hover:text-[#faa61a] transition"
            >
              <Image
                src="/images/sabi-framewoek-logo-big.png"
                alt="SABi"
                width={22}
                height={22}
              />
              SABi Framework
            </a>

            <a
              href="https://www.linkedin.com/newsletters/the-techginia-approach-7118549486393552897/"
              target="_blank"
              className="hover:text-[#faa61a] transition"
            >
              Subscribe Newsletter
            </a>
          </div>
        </div>

      </div>
      <div className="bg-[#04122e] py-5 text-xs">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4">

          <p className="opacity-80 text-center lg:text-left">
            © Copyright 2025 TECHGINIA. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 opacity-80">
            Follow Techginia on
            <a
              href="https://www.linkedin.com/company/techginia/"
              target="_blank"
            >
              <Image
                src="/images/linked-in.png"
                alt="LinkedIn"
                width={18}
                height={18}
              />
            </a>
          </p>

          <p className="font-medium text-center lg:text-right">
            <a
              href="/privacy-policy"
              className="opacity-80 hover:opacity-100 hover:text-white transition"
            >
              Privacy Policy
            </a>
            {" | "}
            <a
              href="/terms-of-use"
              className="opacity-80 hover:opacity-100 hover:text-white transition"
            >
              Terms & Conditions
            </a>
            {" | "}
            <a
              href="/refund-policy"
              className="opacity-80 hover:opacity-100 hover:text-white transition"
            >
              Refund Policy
            </a>
          </p>


        </div>
      </div>

    </footer>
  );
}
