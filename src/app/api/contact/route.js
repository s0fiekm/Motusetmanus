import { Resend } from "resend";
import { getSupabaseServer } from "@/lib/supabaseServer";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  console.log("Start POST request håndtering.");

  // 🔑 Initialiser Supabase her (inde i funktionen)
  const supabaseServer = getSupabaseServer();

  try {
    const body = await req.json();
    console.log("📥 Modtaget fra formular:", body);

    const { name, email, phone, company_name, employees, message } = body;

    if (!name || !email || !phone || !company_name || !employees || !message) {
      console.error("⛔️ Manglende data:", {
        name,
        email,
        phone,
        company_name,
        employees,
        message,
      });
      return new Response(JSON.stringify({ error: "Udfyld alle felter." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("📄 Indsætter i Supabase…");
    const { error: supabaseError, data } = await supabaseServer
      .from("kontakt")
      .insert([
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

    if (supabaseError) {
      console.error("🔥 Supabase-fejl:", supabaseError);
      return new Response(
        JSON.stringify({ error: "Fejl ved indsættelse i Supabase." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("✅ Data indsat i Supabase:", data);

    console.log("📧 Sender e-mail via Resend…");
    const { error: emailError } = await resend.emails.send({
      from: "kontakt@motusetmanus.dk",
      to: "motusetsmanus@yahoo.com",
      subject: `Ny besked fra ${name}`,
      html: `
        <h2>Ny besked fra formular</h2>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Virksomhed:</strong> ${company_name}</p>
        <p><strong>Antal ansatte:</strong> ${employees}</p>
        <p><strong>Besked:</strong><br/>${message}</p>
      `,
    });

    if (emailError) {
      console.error("📧 Resend-fejl:", emailError);
      return new Response(
        JSON.stringify({ error: "Kunne ikke sende e-mail." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    console.log("✅ E-mail sendt succesfuldt.");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Uventet fejl:", error);
    return new Response(JSON.stringify({ error: "Serverfejl. Prøv igen." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
