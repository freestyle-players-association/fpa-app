"use server";
import { createClient } from "@/utils/supabase/server";
import { log } from "console";

export async function isUserTournamentOrganizer(
  userId: string,
  tournamentId: string,
): Promise<boolean> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("tournament_organizers")
    .select("*")
    .eq("tournament_id", tournamentId)
    .eq("userprofile_id", userId);
  console.log(data, error);
  if (error) {
    throw error;
  }
  return data?.length > 0;
}
