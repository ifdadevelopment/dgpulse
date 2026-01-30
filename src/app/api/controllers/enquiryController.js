import Enquiry from "../models/Enquiry";

export const createEnquiry = async (data) => {
  return await Enquiry.create(data);
};

export const getAllEnquiries = async () => {
  return await Enquiry.find().sort({ createdAt: -1 });
};

export const getEnquiriesByBlogSlug = async (slug) => {
  return await Enquiry.find({ blogSlug: slug }).sort({ createdAt: -1 });
};
