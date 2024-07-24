import { z } from "zod";

export const TournamentSchema = z.object({
  name: z.string().min(3, "Too short"),
  description: z.string().optional(),
});
