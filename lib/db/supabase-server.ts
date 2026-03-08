import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the secret key.
 * Use only in Server Actions, Route Handlers, or server components.
 * Never import this file from client components or expose to the frontend.
 */
function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (!url || !secretKey) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_SECRET_KEY. Set them in .env.local or Vercel environment variables."
    );
  }

  return createClient(url, secretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}

export { getSupabaseServerClient };
