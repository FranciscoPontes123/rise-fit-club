'use server';

export async function sendReview(nome: string, stars: number, texto: string) {
  const msg =
    `⭐ Nova Review — Rise Fit Club\n` +
    `Nome: ${nome}\n` +
    `Classificação: ${'⭐'.repeat(stars)} (${stars}/5)\n\n` +
    `"${texto}"`;

  const phone  = process.env.CALLMEBOT_PHONE;
  const apikey = process.env.CALLMEBOT_APIKEY;
  if (!phone || !apikey) throw new Error('callmebot_env_missing');

  const url =
    `https://api.callmebot.com/whatsapp.php` +
    `?phone=${phone}` +
    `&text=${encodeURIComponent(msg)}` +
    `&apikey=${apikey}`;

  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error('callmebot_error');
}
