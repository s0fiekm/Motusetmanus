import {createClient} from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Supabase environment variables are not set. Check your .env.local file."
  );
}
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  supabaseAdmin
);
