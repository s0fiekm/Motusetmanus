import {supabaseAdmin} from "@/lib/supabaseAdmin";

export async function GET(req) {
  const {searchParams} = new URL(req.url);
  const date = searchParams.get("date");

  if (!date) {
    return new Response(JSON.stringify({error: "No date provided"}), {
      status: 400,
    });
  }

  const {data, error} = await supabaseAdmin
    .from("booking")
    .select("time")
    .eq("date", date);

  if (error) {
    return new Response(JSON.stringify({error: error.message}), {
      status: 500,
    });
  }

  const bookedTimes = data.map((entry) => entry.time.slice(0, 5));
  return new Response(JSON.stringify({bookedTimes}), {status: 200});
}
