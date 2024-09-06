"use server";

import { CreateEventOrganizerInvitationSchema } from "@/validation-schemas/create-event-organizer-invitaion-schema";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

type CreateEventOrganizersInvitationState = {
  validationErrors?: { eventId?: string[]; userId?: string[] };
};

export async function createEventOrganizerInvitation(
  _: CreateEventOrganizersInvitationState,
  formData: FormData,
): Promise<CreateEventOrganizersInvitationState> {
  const validatedFields = CreateEventOrganizerInvitationSchema.safeParse({
    eventId: formData.get("eventId"),
    userId: formData.get("userId"),
  });

  if (!validatedFields.success) {
    return {
      validationErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const supabase = createClient();
  await supabase
    .from("event_organizers_invitations")
    .upsert({
      event_id: validatedFields.data.eventId,
      userprofile_id: validatedFields.data.userId,
    })
    .throwOnError();

  revalidatePath(`/events/${validatedFields.data.eventId}`);

  return {};
}
