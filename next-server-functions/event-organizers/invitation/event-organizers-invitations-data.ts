"use server";

import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { getUser } from "@/next-server-functions/user/auth-data";

export async function listOrganizersInvitations(eventId: string) {
  const supabase = createClient();
  return supabase
    .from("event_organizers_invitations")
    .select(
      `
      event_id,
      userprofile_id,
      userprofiles (
        *
      )
    `,
    )
    .eq("event_id", eventId)
    .throwOnError();
}

export async function getOrganizerInvitationsOfProfile<SC>(
  supabase: SupabaseClient<SC>,
) {
  const user = await getUser(supabase);

  if (!user) {
    redirect("/login");
  }

  return supabase
    .from("event_organizers_invitations")
    .select(
      `
      event_id,
      userprofile_id,
      userprofiles (*),
      events (*)
    `,
    )
    .eq("userprofile_id", user.id)
    .throwOnError();
}
