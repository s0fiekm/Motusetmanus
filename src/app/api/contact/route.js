// pages/api/contact.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, phone, company_name, employees, interest, message } =
    req.body;

  try {
    await resend.emails.send({
      from: "kontakt@motusetmanus.dk", // Skal være fra dit verificerede domæne
      to: "motusetmanus@yahoo.com", // Her modtages beskeden
      subject: `Ny besked fra ${name}`,
      html: `
        <h2>Ny besked fra kontaktformular</h2>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Virksomhed:</strong> ${company_name}</p>
        <p><strong>Antal ansatte:</strong> ${employees}</p>
        <p><strong>Interesse:</strong> ${interest}</p>
        <p><strong>Besked:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Fejl ved e-mail-afsendelse:", error);
    return res
      .status(500)
      .json({ error: "Kunne ikke sende besked. Prøv igen senere." });
  }
}
