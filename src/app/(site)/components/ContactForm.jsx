"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const initialState = {
    fullName: "",
    phone: "",
    service: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Submission failed");
      }
      toast.success("Your enquiry has been submitted successfully!");
      setFormData(initialState);
    } catch (err) {
      toast.error(err.message || "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white md:p-8 p-6 rounded-2xl shadow-[0_10px_30px_rgba(11,26,58,0.15)] border border-[#0b1a3a]/20">
      <h2 className="text-2xl font-extrabold mb-6 text-[#0b1a3a]">
        Let’s Connect With Us
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          required
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border border-[#0b1a3a]/30 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#0b1a3a] outline-none"
        />

        <input
          required
          name="phone"
          placeholder="Phone (10 digits)"
          maxLength={10}
          inputMode="numeric"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-[#0b1a3a]/30 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#0b1a3a] outline-none"
        />

        <select
          required
          name="service"
          value={formData.service}
          onChange={handleChange}
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
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-[#0b1a3a]/30 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#0b1a3a] outline-none"
        />

        <textarea
          required
          rows={4}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-[#0b1a3a]/30 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#0b1a3a] outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 text-white font-semibold rounded-lg transition-all
          bg-[#0b1a3a] hover:bg-[#faa61a] shadow-md hover:shadow-xl hover:scale-[1.03]"
        >
          {loading ? "Submitting..." : "Apply Now"}
        </button>
      </form>
    </div>
  );
}
