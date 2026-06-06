'use server';

export async function sendReview(nome: string, stars: number, texto: string) {
  if (!nome || nome.trim().length < 2 || nome.length > 80)
    throw new Error('invalid_nome');
  if (stars < 1 || stars > 5 || !Number.isInteger(stars))
    throw new Error('invalid_stars');
  if (texto.trim().length < 10 || texto.length > 1000)
    throw new Error('invalid_texto');

  const msg =
    `⭐ Nova Review — Rise Fit Club\n` +
    `Nome: ${nome.trim()}\n` +
    `Classificação: ${'⭐'.repeat(stars)} (${stars}/5)\n\n` +
    `"${texto.trim()}"`;

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
