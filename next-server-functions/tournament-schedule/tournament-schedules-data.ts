"use server";

import { notFound } from "next/navigation";
import { SupabaseClient } from "@supabase/supabase-js";

export async function getScheduleByTournamentId<SC>(
  supabase: SupabaseClient<SC>,
  tournamentId: string,
) {
  const result = await supabase
    .from("tournament_schedules")
    .select()
    .eq("tournament_id", tournamentId)
    .order("start_time", { ascending: true })
    .throwOnError();

  if (!result.data) {
    notFound();
  }

  return result.data;
}
