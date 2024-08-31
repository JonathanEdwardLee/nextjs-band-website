import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/util/mongodb';

export async function POST(request: Request) {
  try {
    const collection = await connectToDatabase();
    const { name, location, message } = await request.json();

    if (!name || !message) {
      return NextResponse.json({ message: 'Name and message are required' }, { status: 400 });
    }

    await collection.insertOne({ name, location, message, postedAt: new Date() });

    return NextResponse.json({ message: 'Message added successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
