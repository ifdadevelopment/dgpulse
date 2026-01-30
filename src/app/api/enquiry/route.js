import { NextResponse } from "next/server";
import { connectDB } from "../lib/Db";
import { createEnquiry, getAllEnquiries } from "../controllers/enquiryController";


export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const { name, email, phone, message, blogSlug } = body;

    if (!name || !email || !phone || !message || !blogSlug) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const enquiry = await createEnquiry(body);

    return NextResponse.json(
      { success: true, data: enquiry },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    await connectDB();
    const enquiries = await getAllEnquiries();

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
