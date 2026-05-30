export async function POST(req) {
  const data = await req.json();

  await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.CHAT_ID,
      text: `📩 Нова заявка:\nІм'я: ${data.name}\nТелефон: ${data.phone}`,
    }),
  });

  return Response.json({ ok: true });
}
