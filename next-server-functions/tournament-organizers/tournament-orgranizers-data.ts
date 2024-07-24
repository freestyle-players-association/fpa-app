"use server";

import { SupabaseClient } from "@supabase/supabase-js";
import { Tables } from "@/utils/supabase/database.types";

export type TournamentOrganizersListItem = {
  tournament_id: string;
  userprofiles: Tables<"userprofiles">;
};

export async function listTournamentOrganizers<SC>(
  supabase: SupabaseClient<SC>,
  tournamentId: string,
) {
  return supabase
    .from("tournamentorganizers")
    .select(
      `
      tournament_id,
      userprofiles (
        *
      )
    `,
    )
    .eq("tournament_id", tournamentId)
    .returns<TournamentOrganizersListItem[]>()
    .throwOnError();
}
