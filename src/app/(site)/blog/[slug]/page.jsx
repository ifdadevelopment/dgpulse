"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import Sidebar from "@/components/Sidebar";
import { transformHTML } from "@/app/api/lib/transformHTML";

export default function BlogDetailsPage() {
  const { slug } = useParams();
  const cachedPostsRef = useRef([]);

  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [contentHTML, setContentHTML] = useState("");
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        setStatus("loading");
        const res = await fetch(`/api/blogs/${slug}`, { cache: "no-store" });
        const json = await res.json();
        setBlog(json.data);
        setStatus("success");
      } catch {
        setError("Failed to load blog");
        setStatus("error");
      }
    };

    fetchBlog();
  }, [slug]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs", { cache: "no-store" });
        const json = await res.json();
        setBlogs(json.data || []);
        cachedPostsRef.current = json.data || [];
      } catch {}
    };

    fetchBlogs();
  }, []);
  useEffect(() => {
    if (!blog?.content?.length) return;

    const rawHTML = blog.content
      .map((item) => {
        if (item.type === "image")
          return `<img src="${item.value}" alt="blog image"/>`;
        return `<${item.type}>${item.value}</${item.type}>`;
      })
      .join("");

    setContentHTML(transformHTML(rawHTML));
  }, [blog]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment || rating === 0) return;

    await fetch(`/api/blogs/${slug}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name || "Anonymous",
        email,
        text: comment,
        rating,
      }),
    });

    setComment("");
    setRating(0);
    setName("");
    setEmail("");
  };

  if (status === "loading") {
    return <div className="py-10 text-center text-gray-500">Loading blog…</div>;
  }

  if (status === "error") {
    return <div className="py-10 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-[260px] sm:h-[360px] md:h-[420px] object-cover rounded-lg mb-6"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            {blog.title}
          </h1>

          <p className="text-sm text-gray-500 mb-6">
            {new Date(blog.createdAt).toLocaleDateString()} • {blog.category}
          </p>

          <div
            className="prose prose-lg max-w-none mb-10"
            dangerouslySetInnerHTML={{ __html: contentHTML }}
          />
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Leave a Comment
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className="w-full border rounded p-3"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="w-full border rounded p-3"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                rows="4"
                className="w-full border rounded p-3"
                placeholder="Write your comment…"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    onClick={() => setRating(i + 1)}
                    className={`cursor-pointer ${
                      i < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button className="bg-[#0b1a3a] text-white px-6 py-2 rounded">
                Post Comment
              </button>
            </form>
          </div>
        </article>
        <Sidebar latestPosts={cachedPostsRef.current} maxNumber={5} />
      </div>
    </div>
  );
}
