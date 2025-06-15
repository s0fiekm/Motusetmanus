import {supabase} from "@/lib/supabaseClient";

export async function POST(req) {
  const body = await req.json();
  const {name, email, phone, company_name, employees, interest, message} = body;

  const {error} = await supabase.from("contact_formular").insert([
    {
      name,
      email,
      phone,
      company_name,
      employees,
      interest,
      message,
    },
  ]);

  if (error) {
    return new Response(JSON.stringify({error: error.message}), {
      status: 500,
      headers: {"Content-Type": "application/json"},
    });
  }

  return new Response(JSON.stringify({message: "Besked sendt!"}), {
    status: 200,
    headers: {"Content-Type": "application/json"},
  });
}
