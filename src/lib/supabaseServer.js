import { createClient } from "@supabase/supabase-js";

console.log("Supabase Server Client Initializing...");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("❌ SUPABASE_URL (NEXT_PUBLIC_SUPABASE_URL) is required");
}

if (!serviceRoleKey) {
  throw new Error("❌ SUPABASE_SERVICE_ROLE_KEY is required");
}

console.log("✅ SUPABASE_URL:", supabaseUrl);
console.log("✅ SUPABASE_SERVICE_ROLE_KEY: Defined");

const supabaseServer = createClient(supabaseUrl, serviceRoleKey);

console.log("✅ Supabase Server Client Initialized.");

export { supabaseServer };
