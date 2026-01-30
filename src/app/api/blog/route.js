import { NextResponse } from "next/server";
import { connectDB } from "../lib/Db";
import { getAllBlogs } from "../controllers/blogController";


export async function GET() {
  try {
    await connectDB();
    const blogs = await getAllBlogs();

    return NextResponse.json(
      { success: true, data: blogs },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
