"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { tagMap } from "@/app/(site)/components/tagMap";

const getInitials = (name = "") => {
  const parts = name.trim().split(" ");
  return (parts[0]?.[0] + (parts[1]?.[0] || "")).toUpperCase();
};

export default function BlogAddPage() {
  const router = useRouter();
  const tagOptions = Object.keys(tagMap);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    imageFile: null,
    preview: null,
    title: "",
    excerpt: "",
    category: "Design",
    tags: "",
    content: [{ type: "text", value: "", file: null, filePreview: null }],
    authorName: "Admin",
    authorImageFile: null,
    authorImagePreview: null,
  });

  const [expandedBlocks, setExpandedBlocks] = useState([true]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "imageFile" && files?.[0]) {
      setFormData((p) => ({
        ...p,
        imageFile: files[0],
        preview: URL.createObjectURL(files[0]),
      }));
    } else if (name === "authorImageFile" && files?.[0]) {
      setFormData((p) => ({
        ...p,
        authorImageFile: files[0],
        authorImagePreview: URL.createObjectURL(files[0]),
      }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const handleContentChange = (i, key, value) => {
    const updated = [...formData.content];
    updated[i][key] = value;
    setFormData((p) => ({ ...p, content: updated }));
  };

  const handleContentFileChange = (i, file) => {
    const updated = [...formData.content];
    updated[i].file = file;
    updated[i].filePreview = URL.createObjectURL(file);
    setFormData((p) => ({ ...p, content: updated }));
  };

  const addBlock = () => {
    setFormData((p) => ({
      ...p,
      content: [...p.content, { type: "text", value: "", file: null }],
    }));
    setExpandedBlocks((p) => [...p, true]);
  };

  const removeBlock = (i) => {
    setFormData((p) => ({
      ...p,
      content: p.content.filter((_, idx) => idx !== i),
    }));
    setExpandedBlocks((p) => p.filter((_, idx) => idx !== i));
  };

  const toggleAccordion = (i) => {
    setExpandedBlocks((p) =>
      p.map((v, idx) => (idx === i ? !v : v))
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);

      const form = new FormData();
      form.append("title", formData.title.trim());
      form.append("excerpt", formData.excerpt.trim());
      form.append("category", formData.category);
      form.append("tags", formData.tags);
      form.append("authorName", formData.authorName);

      if (formData.imageFile) form.append("blogImage", formData.imageFile);
      if (formData.authorImageFile)
        form.append("authorImage", formData.authorImageFile);

      const blocks = formData.content.map((b, i) => {
        if (b.type === "image" && b.file) {
          form.append(`content-image-${i}`, b.file);
          return { type: "image", attrs: { localId: i } };
        }
        return { type: b.type, value: b.value };
      });

      form.append("content", JSON.stringify(blocks));

      const res = await fetch("/api/blogs", {
        method: "POST",
        body: form,
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.message);

      toast.success("Blog created successfully!");
      router.push("/admin/blogs/list");
    } catch (err) {
      toast.error(err.message || "Failed to create blog");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-white rounded-xl shadow">
      <h1 className="text-3xl font-bold text-center mb-8">
        Create New Blog
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="file" name="imageFile" onChange={handleChange} />

        {formData.preview && (
          <img src={formData.preview} className="rounded h-64 w-full object-cover" />
        )}
        <input
          name="title"
          placeholder="Title"
          className="w-full border p-3 rounded"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="excerpt"
          placeholder="Excerpt"
          className="w-full border p-3 rounded"
          value={formData.excerpt}
          onChange={handleChange}
          required
        />
        <select
          name="category"
          className="w-full border p-3 rounded"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Design</option>
          <option>Development</option>
          <option>Marketing</option>
          <option>Other</option>
        </select>
        {formData.content.map((block, i) => (
          <div key={i} className="border rounded">
            <button
              type="button"
              onClick={() => toggleAccordion(i)}
              className="w-full p-3 bg-gray-100 font-semibold"
            >
              {block.type.toUpperCase()} Block {i + 1}
            </button>

            {expandedBlocks[i] && (
              <div className="p-4 space-y-3">
                <select
                  value={block.type}
                  onChange={(e) =>
                    handleContentChange(i, "type", e.target.value)
                  }
                  className="border p-2 rounded"
                >
                  {tagOptions.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>

                {block.type === "image" ? (
                  <input
                    type="file"
                    onChange={(e) =>
                      handleContentFileChange(i, e.target.files[0])
                    }
                  />
                ) : (
                  <textarea
                    className="w-full border p-2 rounded"
                    value={block.value}
                    onChange={(e) =>
                      handleContentChange(i, "value", e.target.value)
                    }
                  />
                )}

                <button
                  type="button"
                  onClick={() => removeBlock(i)}
                  className="text-red-600 text-sm"
                >
                  Remove Block
                </button>
              </div>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addBlock}
          className="bg-blue-100 px-4 py-2 rounded"
        >
          + Add Block
        </button>

        {/* AUTHOR */}
        <input
          name="authorName"
          className="w-full border p-3 rounded"
          value={formData.authorName}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-green-600 text-white rounded"
        >
          {loading ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
}
