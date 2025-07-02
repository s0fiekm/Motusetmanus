import { Resend } from "resend";
import { supabaseServer } from "@/lib/supabaseServer";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("📥 Modtaget fra formular:", body);

    const { name, email, phone, company_name, employees, message } = body;

    if (!name || !email || !phone || !company_name || !employees || !message) {
      console.error("⛔️ Manglende data i formularen");
      return new Response(JSON.stringify({ error: "Udfyld alle felter." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { error } = await supabaseServer.from("kontakformular").insert([
      {
        name,
        email,
        phone,
        company_name,
        employees,
        message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("🔥 Fejl fra Supabase:", error);
      return new Response(
        JSON.stringify({ error: "Fejl ved indsættelse i Supabase." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const { error: emailError } = await resend.emails.send({
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
        <p><strong>Besked:</strong><br/>${message}</p>
      `,
    });

    if (emailError) {
      console.error("📧 Fejl fra Resend:", emailError.message);
      return new Response(
        JSON.stringify({ error: "Kunne ikke sende e-mail." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Uventet fejl i API:", error);
    return new Response(JSON.stringify({ error: "Serverfejl. Prøv igen." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
