"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteEventOrganizerAction(_: {}, formData: FormData) {
  const eventId = formData.get("eventId") as string;
  const userId = formData.get("userId") as string;

  const supabase = createClient();
  await supabase
    .from("event_organizers")
    .delete()
    .match({ event_id: eventId, userprofile_id: userId })
    .throwOnError();

  revalidatePath(`/events/${eventId}`);

  return {};
}
