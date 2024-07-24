"use server";

import { CreateTournamentOrganizerInvitationSchema } from "@/validation-schemas/create-tournament-organizer-invitaion-schema";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

type CreateTournamentOrganizersInvitationState = {
  validationErrors?: { tournamentId?: string[]; userId?: string[] };
};

export async function createTournamentOrganizerInvitation(
  _: CreateTournamentOrganizersInvitationState,
  formData: FormData,
): Promise<CreateTournamentOrganizersInvitationState> {
  const validatedFields = CreateTournamentOrganizerInvitationSchema.safeParse({
    tournamentId: formData.get("tournamentId"),
    userId: formData.get("userId"),
  });

  if (!validatedFields.success) {
    return {
      validationErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const supabase = createClient();
  await supabase
    .from("tournament_organizers_invitations")
    .upsert({
      tournament_id: validatedFields.data.tournamentId,
      userprofile_id: validatedFields.data.userId,
    })
    .throwOnError();

  revalidatePath(`/tournaments/${validatedFields.data.tournamentId}`);

  return {};
}
