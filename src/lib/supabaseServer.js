import { createClient } from "@supabase/supabase-js";

console.log("Supabase Server Client Initializing...");
console.log(
  "SUPABASE_URL fra env:",
  process.env.SUPABASE_URL ? "Defined" : "Undefined",
  process.env.SUPABASE_URL
);
console.log(
  "SUPABASE_SERVICE_ROLE_KEY fra env:",
  process.env.SUPABASE_SERVICE_ROLE_KEY ? "Defined" : "Undefined"
);

const supabaseServer = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

console.log("Supabase Server Client Initialized.");

export { supabaseServer };
