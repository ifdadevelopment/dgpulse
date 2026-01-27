"use client";

export default function ContactForm() {
  return (
    <div className="bg-white md:p-8 p-6 rounded-2xl shadow-[0_10px_30px_rgba(11,26,58,0.15)] border border-[#0b1a3a]/20">
      <h2 className="text-2xl font-extrabold mb-6 text-[#0b1a3a]">
        Let’s Connect With Us
      </h2>

      <form className="space-y-4">
        <input
          required
          placeholder="Full Name"
          className="w-full border border-[#0b1a3a]/30 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#0b1a3a] outline-none"
        />

        <input
          required
          placeholder="Phone (10 digits)"
          maxLength={10}
          inputMode="numeric"
          className="w-full border border-[#0b1a3a]/30 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#0b1a3a] outline-none"
        />

        <select
          required
          className="w-full border border-[#0b1a3a]/30 rounded-lg px-4 py-3 bg-white text-gray-700 focus:ring-2 focus:ring-[#0b1a3a] outline-none"
        >
          <option value="">Select Service</option>
          <option>Website Designing & Development</option>
          <option>Customized CRM Solutions</option>
          <option>App Development</option>
          <option>Graphic Design</option>
          <option>Video Editing</option>
          <option>Social Media Marketing</option>
          <option>SEO & Digital Marketing</option>
          <option>Google My Business Listing</option>
          <option>AI Video Marketing</option>
        </select>

        <input
          required
          type="email"
          placeholder="Email Address"
          className="w-full border border-[#0b1a3a]/30 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#0b1a3a] outline-none"
        />

        <textarea
          required
          rows={4}
          placeholder="Your Message"
          className="w-full border border-[#0b1a3a]/30 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#0b1a3a] outline-none"
        />

        <button
          type="submit"
          className="w-full py-3 text-white font-semibold rounded-lg transition-all
          bg-[#0b1a3a] hover:bg-[#faa61a] shadow-md hover:shadow-xl hover:scale-[1.03]"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
}
