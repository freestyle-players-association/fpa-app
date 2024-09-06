"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteEventOrganizerInvitation(
  _: {},
  formData: FormData,
) {
  const supabase = createClient();

  const userId = formData.get("userId") as string;
  const eventId = formData.get("eventId") as string;

  const res = await supabase
    .from("event_organizers_invitations")
    .delete()
    .match({ event_id: eventId, userprofile_id: userId });

  revalidatePath(`/events/${eventId}`);

  return {};
}
