"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogSection({
  heading = "Blog",
  paragraph = "Check back every week for inspiring articles on website design and digital marketing to help build and expand your digital presence.",
  showTabs = true,
  maxBlogs = 3,
}) {
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setStatus("loading");
        const res = await fetch("/api/blogs", { cache: "no-store" });
        const json = await res.json();
        setBlogs(Array.isArray(json.data) ? json.data : []);
        setStatus("success");
      } catch {
        setError("Failed to load blogs");
        setStatus("error");
      }
    };

    fetchBlogs();
  }, []);
  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(blogs.map((b) => b.category).filter(Boolean)),
    ];
  }, [blogs]);
  const filteredBlogs = useMemo(() => {
    const sorted = [...blogs].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    if (activeTab === "All") return sorted.slice(0, maxBlogs);

    return sorted
      .filter((b) => b.category === activeTab)
      .slice(0, maxBlogs);
  }, [blogs, activeTab, maxBlogs]);

  return (
    <section className="bg-light py-12 sm:py-16 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-4">
          {heading}
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          {paragraph}
        </p>
      </div>
      {showTabs && categories.length > 1 && (
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md border transition text-sm sm:text-base
                ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-white text-black border-gray-300 hover:bg-black hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
      {status === "loading" ? (
        <p className="text-center text-gray-500">Loading blogs...</p>
      ) : status === "error" ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBlogs.length ? (
            filteredBlogs.map((blog, index) => {
              const slug =
                blog.slug ||
                blog.title?.toLowerCase().replace(/\s+/g, "-") ||
                blog._id;

              return (
                <div
                  key={slug || index}
                  onClick={() => router.push(`/blog/${slug}`)}
                  className="bg-white shadow-md hover:shadow-lg transition rounded-lg overflow-hidden cursor-pointer"
                >
                  {blog.coverImage && (
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-52 object-cover"
                    />
                  )}

                  <div className="p-5">
                    {blog.createdAt && (
                      <p className="text-xs text-gray-500 mb-1">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </p>
                    )}

                    <h3 className="text-md font-bold mb-2">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No blogs available for this category.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
