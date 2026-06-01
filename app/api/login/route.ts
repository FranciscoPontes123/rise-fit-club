import { NextResponse } from 'next/server';

const PASSWORD = process.env.SITE_PASSWORD;

// Simple in-memory rate limiter
const attempts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 10) return true;
  entry.count++;
  return false;
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Demasiadas tentativas. Aguarda um momento.' }, { status: 429 });
  }

  const { password } = await request.json();

  if (!PASSWORD || password !== PASSWORD) {
    return NextResponse.json({ error: 'Password incorrecta.' }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set('rise_auth', 'granted', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    sameSite: 'lax',
  });
  return response;
}
