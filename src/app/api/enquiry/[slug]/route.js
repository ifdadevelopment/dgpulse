import { NextResponse } from "next/server";
import { getEnquiriesByBlogSlug } from "../../controllers/enquiryController";
import { connectDB } from "../../lib/Db";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const enquiries = await getEnquiriesByBlogSlug(params.slug);

    return NextResponse.json(
      { success: true, data: enquiries },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
