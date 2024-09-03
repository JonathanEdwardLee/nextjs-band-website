import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/util/mongodb';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!) : undefined;
  const skip = searchParams.get("skip") ? parseInt(searchParams.get("skip")!) : 0;

  try {
    const collection = await connectToDatabase();
    
    const entries = await collection
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit || 0)
      .toArray();

    const total = await collection.countDocuments();

    return NextResponse.json({ entries, total });
  } catch (error) {
    console.error("Failed to fetch guestbook entries:", error);
    return NextResponse.json(
      { error: "Failed to fetch guestbook entries" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const collection = await connectToDatabase();
    const body = await request.json();

    const newEntry = {
      ...body,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(newEntry);

    return NextResponse.json({ message: "Entry added successfully", id: result.insertedId });
  } catch (error) {
    console.error("Failed to add guestbook entry:", error);
    return NextResponse.json(
      { error: "Failed to add guestbook entry" },
      { status: 500 }
    );
  }
}
