import { z } from "zod";

export const CreateTournamentOrganizerInvitationSchema = z.object({
  tournamentId: z.string().min(1, "tournament not passed"),
  userId: z.string().min(1, "user not passed"),
});
