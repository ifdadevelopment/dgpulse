"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { RxAvatar } from "react-icons/rx";

export default function BlogHeroSection() {
  const router = useRouter();
  const intervalRef = useRef(null);

  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setStatus("loading");
        const res = await fetch("/api/blogs", { cache: "no-store" });
        const json = await res.json();
        setBlogs(Array.isArray(json.data) ? json.data : []);
        setStatus("success");
      } catch (err) {
        setError("Failed to load featured blog");
        setStatus("error");
      }
    };

    fetchBlogs();
  }, []);

  const latestPosts = [...blogs]
    .sort(
      (a, b) =>
        new Date(b.date || b.createdAt) -
        new Date(a.date || a.createdAt)
    )
    .slice(0, 5);

  const post = latestPosts[current];
  useEffect(() => {
    if (!latestPosts.length) return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) =>
        prev === latestPosts.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [latestPosts.length]);

  const goTo = (idx) => setCurrent(idx);

  const handleNavigate = () => {
    if (!post) return;
    const slug =
      post.slug ||
      post.title?.toLowerCase().replace(/\s+/g, "-");
    router.push(`/blog/${slug}`);
  };
  if (status === "loading") {
    return (
      <section className="py-10 text-center text-gray-500">
        Loading featured blog...
      </section>
    );
  }

  if (status === "error" || !post) {
    return (
      <section className="py-10 text-center text-red-500">
        {error || "No featured blog available"}
      </section>
    );
  }

  return (
    <section className="w-full bg-light py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center rounded-xl overflow-hidden shadow-md">
          <div
            className="w-full md:w-1/2 p-6 cursor-pointer"
            onClick={handleNavigate}
          >
            {post.category && (
              <span className="text-xs md:text-sm font-bold text-[#0b1a3a]/90 uppercase mb-2 block tracking-wide">
                {post.category}
              </span>
            )}

            <h1 className="text-2xl md:text-3xl font-bold text-[#0b1a3a] mb-4">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-gray-700 mb-6">
                {post.excerpt}
              </p>
            )}

            <div className="flex items-center">
              {post?.author?.image ? (
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <RxAvatar className="w-10 h-10 text-gray-400" />
              )}

              <span className="ml-2 font-semibold text-gray-800">
                {post?.author?.name || "Admin"}
              </span>

              {post.createdAt && (
                <span className="ml-4 text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
          <div
            className="w-full md:w-1/2 p-4 cursor-pointer"
            onClick={handleNavigate}
          >
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-56 md:h-80 object-cover rounded-xl"
              />
            )}
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {latestPosts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === idx ? "bg-[#0b1a3a]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
