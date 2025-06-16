import {supabaseAdmin} from "@/lib/supabaseAdmin";

supabaseAdmin;
export async function GET(req) {
  const {searchParams} = new URL(req.url);
  const date = searchParams.get("date");

  if (!date) {
    return new Response(JSON.stringify({error: "No date provided"}), {
      status: 400,
    });
  }

  const {data, error} = await supabaseAdmin
    .from("bookings")
    .select("time")
    .eq("date", date);

  if (error) {
    return new Response(JSON.stringify({error: error.message}), {
      status: 500,
    });
  }

  const bookedTimes = data.map((entry) => entry.time);
  return new Response(JSON.stringify({bookedTimes}), {status: 200});
}
