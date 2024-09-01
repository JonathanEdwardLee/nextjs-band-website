import { NextResponse } from 'next/server';

export async function GET() {
  console.log('GET request received to /api/test');
  return NextResponse.json({ message: 'Test successful' }, { status: 200 });
}
