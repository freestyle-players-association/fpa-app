"use server";

import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { getUser } from "@/next-server-functions/user/auth-data";

export async function listOrganizersInvitations(tournamentId: string) {
  const supabase = createClient();
  return supabase
    .from("tournament_organizers_invitations")
    .select(
      `
      tournament_id,
      userprofile_id,
      userprofiles (
        *
      )
    `,
    )
    .eq("tournament_id", tournamentId)
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
    .from("tournament_organizers_invitations")
    .select(
      `
      tournament_id,
      userprofile_id,
      userprofiles (*),
      tournaments (*)
    `,
    )
    .eq("userprofile_id", user.id)
    .throwOnError();
}
