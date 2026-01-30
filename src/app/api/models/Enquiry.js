import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    course: { type: String, default: "Blog Enquiry" },
    message: { type: String, required: true, trim: true },
    blogSlug: { type: String, required: true },

    source: { type: String, default: "blog" },
  },
  { timestamps: true }
);

export default mongoose.models.Enquiry ||
  mongoose.model("Enquiry", enquirySchema);
