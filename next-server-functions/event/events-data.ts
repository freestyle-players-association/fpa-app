"use server";

import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import { PostgrestSingleResponse, SupabaseClient } from "@supabase/supabase-js";
import { Tables } from "@/utils/supabase/database.types";

export async function listEvents(): Promise<Typ> {
  const supabase = createClient();
  return supabase.from("events").select().throwOnError();
}

export async function getEventById<SC>(
  supabase: SupabaseClient<SC>,
  eventId: string,
) {
  const result = await supabase
    .from("events")
    .select()
    .eq("id", eventId)
    .maybeSingle()
    .throwOnError();

  if (!result.data) {
    notFound();
  }

  return result.data;
}

export async function listEventsOfUser<SC>(
  supabase: SupabaseClient<SC>,
  userId: string,
) {
  return supabase
    .from("event_organizers")
    .select(
      `
      event_id,
      events (*)
    `,
    )
    .eq("userprofile_id", userId)
    .throwOnError();
}
