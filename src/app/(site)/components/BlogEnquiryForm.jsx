"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

export default function BlogEnquiryForm() {
  const { slug } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Blog Enquiry",
    message: "",
    blogSlug: slug || "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const handler = (e) => {
      if (!success) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [success]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Submission failed");
      }

      toast.success("Form submitted successfully!");
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "Blog Enquiry",
        message: "",
        blogSlug: slug || "",
      });
    } catch (err) {
      toast.error(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow border w-full">
      <h4 className="text-lg font-semibold mb-4 text-primary">
        Get in Touch
      </h4>

      {success ? (
        <p className="text-green-600 text-center font-medium">
          Your enquiry was submitted successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            className="w-full p-2 border rounded focus:outline-none"
            required
          />

          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded focus:outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#0b1a3a] text-white px-4 py-2 rounded w-full hover:bg-[#faa61a] transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}
