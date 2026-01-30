import { NextResponse } from "next/server";
import { getBlogBySlug } from "../../controllers/blogController";
import { connectDB } from "../../lib/Db";



export async function GET(req, { params }) {
  try {
    await connectDB();
    const blog = await getBlogBySlug(params.slug);

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: blog },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
