import { z } from "zod";

export const CreateEventOrganizerInvitationSchema = z.object({
  eventId: z.string().min(1, "event not passed"),
  userId: z.string().min(1, "user not passed"),
});
