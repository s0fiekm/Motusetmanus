import {supabase} from "@/lib/supabaseClient";

export async function POST(request) {
  const data = await request.json();

  const {data: insertData, error} = await supabase.from("bookings").insert([
    {
      company_name: data.company_name,
      address: data.address,
      zip_code: data.zip_code,
      city: data.city,
      contact_name: data.contact_name,
      email: data.email,
      phone: data.phone,
      date: data.date,
      time: data.time,
      message: data.message,
    },
  ]);

  if (error) {
    return new Response(JSON.stringify({error: error.message}), {status: 500});
  }

  return new Response(JSON.stringify({success: true, data: insertData}), {
    status: 200,
  });
}
