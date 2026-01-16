import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    const db = await connectDB();
    const posts = await db.collection("posts").find({}).toArray()
    return NextResponse.json(posts)
}