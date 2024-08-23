"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteTournamentOrganizerAction(
  _: {},
  formData: FormData,
) {
  const tournamentId = formData.get("tournamentId") as string;
  const userId = formData.get("userId") as string;

  const supabase = createClient();
  await supabase
    .from("tournament_organizers")
    .delete()
    .match({ tournament_id: tournamentId, userprofile_id: userId })
    .throwOnError();

  revalidatePath(`/tournaments/${tournamentId}`);

  return {};
}
