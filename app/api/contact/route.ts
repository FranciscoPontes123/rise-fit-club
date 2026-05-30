import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { nome, tel, email, plano, horario } = await req.json();

  // WhatsApp via CallMeBot (best-effort)
  try {
    const message = encodeURIComponent(
      `Novo contacto Rise Fit Club\nNome: ${nome}\nTelemovel: ${tel}\nEmail: ${email}\nPlano: ${plano}${horario ? `\nHorario: ${horario}` : ''}`
    );
    const phone = process.env.CALLMEBOT_PHONE;
    const apikey = process.env.CALLMEBOT_APIKEY;
    console.log('[CallMeBot] phone:', phone, 'apikey:', apikey);
    const waRes = await fetch(
      `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${message}&apikey=${apikey}`
    );
    const waText = await waRes.text();
    console.log('[CallMeBot] status:', waRes.status, 'response:', waText);
  } catch (err) {
    console.error('[CallMeBot] error:', err);
  }

  // Formspree como backup
  const res = await fetch('https://formspree.io/f/mdajjkvy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ nome, tel, email, plano, horario }),
  });

  if (!res.ok) return NextResponse.json({ error: 'Erro ao enviar' }, { status: 500 });
  return NextResponse.json({ ok: true });
}
