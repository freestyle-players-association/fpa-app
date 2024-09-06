"use server";

import { notFound } from "next/navigation";
import { SupabaseClient } from "@supabase/supabase-js";

export async function getScheduleByEventId<SC>(
  supabase: SupabaseClient<SC>,
  eventId: string,
) {
  const result = await supabase
    .from("event_schedules")
    .select()
    .eq("event_id", eventId)
    .order("start_time", { ascending: true })
    .throwOnError();

  if (!result.data) {
    notFound();
  }

  return result.data;
}
