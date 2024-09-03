import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get('videoId');

  if (!videoId) {
    return new NextResponse('Missing videoId parameter', { status: 400 });
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  try {
    const response = await fetch(thumbnailUrl);
    const arrayBuffer = await response.arrayBuffer();
    const headers = new Headers({
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
    });

    return new NextResponse(arrayBuffer, { headers });
  } catch (error) {
    console.error('Error fetching thumbnail:', error);
    return new NextResponse('Error fetching thumbnail', { status: 500 });
  }
}
