import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    text: { type: String, trim: true, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const blockSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    value: { type: String, default: "" },
    attrs: { type: Object, default: {} },
  },
  { _id: false }
);

const blogSchema = new mongoose.Schema(
  {
    coverImage: { type: String, required: true },
    title: { type: String, required: true },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
    },
    excerpt: { type: String, required: true },
    category: {
      type: String,
      enum: ["Design", "Development", "Marketing", "Other"],
      required: true,
    },
    tags: { type: [String], default: [] },
    content: { type: [blockSchema], required: true },
    author: {
      name: { type: String, default: "Admin" },
      image: { type: String, default: "" },
    },
    comments: {
      type: [commentSchema],
      default: [],
    },
  },
  { timestamps: true }
);

blogSchema.pre("save", function (next) {
  if (!this.slug || this.isModified("title")) {
    this.slug = this.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }
  next();
});

export default mongoose.models.Blog ||
  mongoose.model("Blog", blogSchema);
