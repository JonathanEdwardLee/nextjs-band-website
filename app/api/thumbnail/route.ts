import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get('videoId');
  const url = searchParams.get('url');

  if (!videoId && !url) {
    return new NextResponse('Missing videoId or url parameter', { status: 400 });
  }

  const thumbnailUrl = videoId 
    ? `https://img.youtube.com/vi/${videoId}/0.jpg`
    : url;

  if (!thumbnailUrl) {
    return new NextResponse('Invalid thumbnail URL', { status: 400 });
  }

  try {
    const response = await fetch(thumbnailUrl);
    const arrayBuffer = await response.arrayBuffer();
    const headers = new Headers({
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Access-Control-Allow-Origin': '*',
    });

    return new NextResponse(arrayBuffer, { headers });
  } catch (error) {
    console.error('Error fetching thumbnail:', error);
    return new NextResponse('Error fetching thumbnail', { status: 500 });
  }
}
