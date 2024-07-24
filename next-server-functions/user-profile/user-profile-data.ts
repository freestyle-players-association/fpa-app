"use server";

import { SupabaseClient } from "@supabase/supabase-js";
import { getUser } from "@/next-server-functions/user/auth-data";
import { createClient } from "@/utils/supabase/server";

export async function getAuthenticatedUserProfile<SC>(
  supabase: SupabaseClient<SC>,
) {
  const user = await getUser(supabase);
  if (!user) {
    return null;
  }
  const res = await supabase
    .from("userprofiles")
    .select()
    .eq("id", user.id)
    .maybeSingle()
    .throwOnError();

  return res.data;
}

export async function searchUserProfiles(username: string) {
  const supabase = createClient();

  if (!username) {
    return { data: [], error: null };
  }

  return supabase
    .from("userprofiles")
    .select()
    .ilike("username", `${username}%`)
    .limit(5)
    .throwOnError();
}
