'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '../data/services';

export default function CapabilitiesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-light md:py-24 py-16 md:px-6 px-3">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#061A40]/20 blur-[120px] rounded-full" />
      <div className="absolute top-40 -right-24 w-72 h-72 bg-[#061A40]/20 blur-[130px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#061A40]">
            Our Capabilities
          </h2>

          <p className="mt-4 text-lg text-gray-700">
            High-performance engineering & creative strategy — crafted for modern brands.
          </p>

          <div className="w-48 h-1 mx-auto mt-6 rounded-full bg-[#061A40]" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Link
                href={`/services/${item.slug}`}
                className="group block relative p-[2px] rounded-3xl overflow-hidden
                  bg-[#061A40]/15 hover:bg-[#061A40]/25 transition-all duration-700"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white/30 blur-xl transition-all duration-700" />

                <div className="relative md:h-[400px] h-[330px] rounded-3xl bg-white/90 backdrop-blur-2xl md:p-8 p-4
                  shadow-[0_0_40px_rgba(0,0,0,0.07)]
                  transition-all duration-500
                  group-hover:-translate-y-2
                  group-hover:shadow-[0_15px_60px_rgba(6,26,64,0.25)]"
                >
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl
                    bg-[#061A40]/10 text-4xl text-[#061A40]
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:shadow-[0_0_35px_rgba(6,26,64,0.45)]"
                  >
                    {item.icon}
                  </div>

                  <h3 className="md:text-2xl text-lg font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <span className="inline-block px-5 py-2.5 text-sm font-semibold text-white rounded-full
                    bg-[#061A40] shadow-lg shadow-[#061A40]/30">
                    Read More →
                  </span>

                  <div className="mt-6 h-[3px] w-0 group-hover:w-full transition-all duration-700 rounded-full bg-[#061A40]" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
