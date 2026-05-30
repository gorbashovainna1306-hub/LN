export async function POST(req) {
  const data = await req.json();

  const message = `
📩 Нова заявка з сайту

👤 Ім'я: ${data.name}
📞 Телефон: ${data.phone}
💬 Повідомлення: ${data.message || "-"}
`;

  await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.CHAT_ID,
      text: message,
    }),
  });

  return Response.json({ ok: true });
}
