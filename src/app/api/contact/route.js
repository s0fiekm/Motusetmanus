import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, company_name, employees, interest, message } =
      body;

    await resend.emails.send({
      from: "kontakt@motusetmanus.dk",
      to: "soffi2201@hotmail.dk",
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

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Fejl ved e-mail-afsendelse:", error);
    return new Response(JSON.stringify({ error: "Noget gik galt" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
