import Blog from "@/models/Blog";

export const getAllBlogs = async () => {
  return await Blog.find()
    .sort({ createdAt: -1 })
    .lean();
};

export const getBlogBySlug = async (slug) => {
  return await Blog.findOne({ slug }).lean();
};

export const addCommentToBlog = async (slug, commentData) => {
  const blog = await Blog.findOne({ slug });
  if (!blog) throw new Error("Blog not found");

  blog.comments.push(commentData);
  await blog.save();

  return blog.comments.at(-1);
};
