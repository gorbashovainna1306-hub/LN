export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ ok: true });
  }

  const data = req.body;

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

  return res.status(200).json({ ok: true });
}
