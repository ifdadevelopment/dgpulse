"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-br from-[#0b1a3a] via-[#0e1430] to-[#010002] text-white font-publicSans">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="block">
              <Image
                src="/images/footerwhite.webp"
                alt="DigitalPulse Solutions"
                width={190}
                height={60}
                className="mb-5 drop-shadow-lg"
              />
            </Link>

            <p className="text-sm opacity-90 leading-6 mb-4">
              <strong>DigitalPulse Solutions</strong> — Your Partner in Growth,
              Innovation & Digital Success.
            </p>

            <p className="text-sm opacity-80 mb-2">
              H-18/B, 2nd Floor, Kalkaji Main Road,
              <br />
              New Delhi-110019
            </p>

            <a
              href="mailto:info@dgpulse360.com"
              className="text-sm hover:text-white hover:font-semibold transition"
            >
              info@dgpulse360.com
            </a>
            <br />
            <a
              href="tel:+919650638829"
              className="text-sm hover:text-white hover:font-semibold transition"
            >
              +91 9650638829
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {[
                ["Website Designing & Development", "/services/website-designing-development"],
                ["Customized CRM Solutions", "/services/customize-crm-services"],
                ["Mobile App Development", "/services/mobile-app-development"],
                ["Graphic Design", "/services/graphic-design"],
                ["Video Editing", "/services/video-editing"],
                ["Social Media Marketing", "/services/social-media-marketing"],
                ["SEO & Digital Marketing", "/services/digital-marketing-services"],
                ["Google My Business Listing", "/services/gmb-listing"],
                ["AI Video Marketing", "/services/ai-video-marketing"],
              ].map(([label, link]) => (
                <li key={link}>
                  <Link
                    href={link}
                    className="hover:text-[#faa61a] hover:font-semibold transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {[
                ["About Us", "/aboutus"],
                // ["Services", "/services"],
                ["Blog", "/blog"],
                ["Contact Us", "/contactus"],
              ].map(([label, link]) => (
                <li key={link}>
                  <Link
                    href={link}
                    className="hover:text-[#faa61a]  hover:font-semibold transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Social Links</h3>
            <div>
              <div className="flex gap-3 mt-5">
                <a
                  href="https://www.facebook.com/Digitalulsesolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#faa61a] transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://in.linkedin.com/company/digitalpulse-solutions-india/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#faa61a]  transition"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://www.instagram.com/digitalpulse.solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#faa61a] transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://in.pinterest.com/digital_pulse_solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#faa61a] transition"
                >
                  <FaPinterestP />
                </a>

                <a
                  href="https://www.youtube.com/@DigitalPulsesolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#faa61a] transition"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

          </div>
        </div>
        <div className="border-t border-white/20 py-6 px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>
              © {new Date().getFullYear()}{" "}
              <strong>DigitalPulse Solutions</strong> — All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/terms-conditions" className="hover:text-white">
                Terms & Conditions
              </Link>
              <span>•</span>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
