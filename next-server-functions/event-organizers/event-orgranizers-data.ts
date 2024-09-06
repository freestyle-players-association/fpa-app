"use server";

import { SupabaseClient } from "@supabase/supabase-js";
import { Tables } from "@/utils/supabase/database.types";

export type EventOrganizersListItem = {
  event_id: string;
  userprofiles: Tables<"userprofiles">;
};

export async function listEventOrganizers<SC>(
  supabase: SupabaseClient<SC>,
  eventId: string,
) {
  return supabase
    .from("event_organizers")
    .select(
      `
      event_id,
      userprofiles (
        *
      )
    `,
    )
    .eq("event_id", eventId)
    .returns<EventOrganizersListItem[]>()
    .throwOnError();
}
