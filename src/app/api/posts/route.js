import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    const db = await connectDB();
    const posts = await db.collection("posts").find({}).toArray()
    return NextResponse.json(posts)
}
export async function POST(request) {
    const db = await connectDB();
    const body = await request.json()
    const result = await db.collection("posts").insertOne(body)
    return NextResponse.json({insertedId : result.insertedId})
}