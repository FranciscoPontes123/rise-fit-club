import { NextResponse } from 'next/server';

const PASSWORD = process.env.SITE_PASSWORD;

export async function POST(request: Request) {
  const { password } = await request.json();

  if (!PASSWORD || password !== PASSWORD) {
    return NextResponse.json({ error: 'Password incorrecta.' }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set('rise_auth', 'granted', {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    sameSite: 'lax',
  });
  return response;
}
