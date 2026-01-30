import { addCommentToBlog } from "@/app/api/controllers/blogController";
import { connectDB } from "@/app/api/lib/Db";
import { NextResponse } from "next/server";


export async function POST(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();

    const comment = await addCommentToBlog(params.slug, body);

    return NextResponse.json(
      { success: true, data: comment },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 400 }
    );
  }
}
export async function GET(req, { params }) {
  try {
    await connectDB();

    const blog = await Blog.findOne({ slug: params.slug }).select("comments");

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: blog.comments },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
