import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/supabase"; // generated later — see note below

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Check your .env file for VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY."
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,   // keep admin logged in across refreshes
    autoRefreshToken: true, // silently refresh expired tokens
    detectSessionInUrl: true, // needed if you ever add magic-link/OAuth login
  },
});