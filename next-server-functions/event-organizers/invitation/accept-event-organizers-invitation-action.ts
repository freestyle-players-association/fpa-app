"use server";

import { createClient } from "@/utils/supabase/server";
import { getUser } from "@/next-server-functions/user/auth-data";
import { revalidatePath } from "next/cache";

export async function acceptEventOrganizersInvitation(
  _: {},
  formData: FormData,
) {
  const eventId = formData.get("eventId") as string;

  const supabase = createClient();
  const user = await getUser(supabase);

  await supabase.functions.invoke("accept-event-organizer-invitation", {
    body: { event_id: eventId, userprofile_id: user?.id },
  });

  revalidatePath(`/events/${eventId}`);

  return {};
}
