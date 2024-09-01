import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/util/mongodb';

export async function GET(request: Request) {
  console.log('GET request received for guestbook entries');
  try {
    const collection = await connectToDatabase();
    console.log('Connected to database for fetching entries');
    const entries = await collection.find().sort({ createdAt: -1 }).limit(50).toArray();
    console.log(`Fetched ${entries.length} entries:`, JSON.stringify(entries, null, 2));
    return NextResponse.json(entries);
  } catch (error) {
    console.error('Error fetching guestbook entries:', error);
    return NextResponse.json({ message: 'Error fetching entries' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  console.log('POST request received');
  try {
    const collection = await connectToDatabase();
    console.log('Connected to database');

    const { name, location, message } = await request.json();
    console.log('Received data:', { name, location, message });

    if (!name || !message) {
      console.log('Validation failed: Name or message is missing');
      return NextResponse.json({ message: 'Name and message are required' }, { status: 400 });
    }

    const result = await collection.insertOne({ name, location, message, createdAt: new Date() });
    console.log('Document inserted:', result);

    return NextResponse.json({ message: 'Message added successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error in POST request:', error);
    return NextResponse.json({ 
      message: 'Error processing request', 
      error: error instanceof Error ? error.message : String(error),
    }, { status: 500 });
  }
}
