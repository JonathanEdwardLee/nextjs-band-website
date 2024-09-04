import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri!);

async function connectToDatabase() {
  await client.connect();
  return client.db("leadershipclassmusic").collection("simonsaysscores");
}

export async function GET() {
  try {
    const collection = await connectToDatabase();
    const highScores = await collection
      .find({})
      .sort({ score: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json(highScores);
  } catch (error) {
    console.error("Failed to fetch high scores:", error);
    return NextResponse.json(
      { error: "Failed to fetch high scores" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const collection = await connectToDatabase();
    const { name, score } = await request.json();

    const newScore = {
      name: name.toUpperCase().slice(0, 3),
      score: score,
      createdAt: new Date(),
    };

    await collection.insertOne(newScore);

    return NextResponse.json({ message: "Score saved successfully" });
  } catch (error) {
    console.error("Failed to save score:", error);
    return NextResponse.json(
      { error: "Failed to save score" },
      { status: 500 }
    );
  }
}
