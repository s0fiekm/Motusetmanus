import {supabase} from "@/lib/supabaseClient";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      company_name,
      adress,
      zip_code,
      city,
      first_name,
      last_name,
      email,
      phone,
      date,
      time,
      message,
    } = body;

    const {data, error} = await supabase.from("booking").insert([
      {
        company_name,
        adress,
        zip_code,
        city,
        first_name,
        last_name,
        email,
        phone,
        date,
        time,
        message,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error.message);
      return new Response(JSON.stringify({error: error.message}), {
        status: 500,
        headers: {"Content-Type": "application/json"},
      });
    }

    return new Response(JSON.stringify({success: true, data}), {
      status: 200,
      headers: {"Content-Type": "application/json"},
    });
  } catch (err) {
    console.error("API route error:", err.message);
    return new Response(
      JSON.stringify({error: "Ugyldigt request body eller serverfejl."}),
      {
        status: 400,
        headers: {"Content-Type": "application/json"},
      }
    );
  }
}
