"use server";

import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import { SupabaseClient } from "@supabase/supabase-js";

export async function listTournaments() {
  const supabase = createClient();
  return supabase.from("tournaments").select().throwOnError();
}

export async function getTournamentById<SC>(
  supabase: SupabaseClient<SC>,
  tournamentId: string,
) {
  const result = await supabase
    .from("tournaments")
    .select()
    .eq("id", tournamentId)
    .maybeSingle()
    .throwOnError();

  if (!result.data) {
    notFound();
  }

  return result.data;
}

export async function listTournamentsOfUser<SC>(
  supabase: SupabaseClient<SC>,
  userId: string,
) {
  return supabase
    .from("tournament_organizers")
    .select(
      `
      tournament_id,
      tournaments (*)
    `,
    )
    .eq("userprofile_id", userId)
    .throwOnError();
}
