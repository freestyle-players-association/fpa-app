"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteTournamentOrganizerInvitation(
  _: {},
  formData: FormData,
) {
  const supabase = createClient();

  const userId = formData.get("userId") as string;
  const tournamentId = formData.get("tournamentId") as string;

  const res = await supabase
    .from("tournament_organizers_invitations")
    .delete()
    .match({ tournament_id: tournamentId, userprofile_id: userId });

  revalidatePath(`/tournaments/${tournamentId}`);

  return {};
}
