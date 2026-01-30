"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";
import BlogEnquiryForm from "./BlogEnquiryForm";

export default function Sidebar({
  latestPosts = [],
  maxNumber = 5,
  bannerTitle = "Boost Your Skills!",
  bannerDesc = "Join our premium courses and get certified today.",
  showForm = true,
}) {
  const router = useRouter();

  const displayedPosts = useMemo(
    () =>
      [...latestPosts]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, maxNumber),
    [latestPosts, maxNumber]
  );

  return (
    <aside className="space-y-10 sticky top-20 h-fit">
      {displayedPosts.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Latest Posts
          </h3>

          <div className="space-y-4">
            {displayedPosts.map((item) => (
              <div
                key={item.slug || item._id}
                className="border-b pb-3 cursor-pointer hover:text-primary"
                onClick={() =>
                  router.push(`/blog/${item.slug || item._id}`)
                }
              >
                <h4 className="font-bold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600">
                  {item.excerpt?.slice(0, 60)}…
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
      <section className="bg-primary text-white p-6 rounded-lg shadow-lg text-center">
        <h4 className="text-lg font-semibold mb-2">{bannerTitle}</h4>
        <p className="text-sm">{bannerDesc}</p>
      </section>
      {showForm && (
        <section onClick={(e) => e.stopPropagation()}>
          <BlogEnquiryForm />
        </section>
      )}
    </aside>
  );
}
