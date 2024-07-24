"use server";

import { SupabaseClient } from "@supabase/supabase-js";

export async function getUser<SC>(supabase: SupabaseClient<SC>) {
  const res = await supabase.auth.getUser();
  return res.data.user;
}
