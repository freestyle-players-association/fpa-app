"use server";
import { createClient } from "@/utils/supabase/server";
import { log } from "console";

export async function isUserEventOrganizer(
  userId: string,
  eventId: string,
): Promise<boolean> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("event_organizers")
    .select("*")
    .eq("event_id", eventId)
    .eq("userprofile_id", userId);
  console.log(data, error);
  if (error) {
    throw error;
  }
  return data?.length > 0;
}
