import dbConnect from "@/utils/dbCon";
import Contact from "@/model/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();

    await dbConnect();

    await Contact.create(body);

    return NextResponse.json(
      {
        message: "Message sent successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Server Error!!",
      },
      {
        status: 500,
      }
    );
  }
}
