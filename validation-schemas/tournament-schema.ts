import {z} from "zod";

const isFutureDate = (date: Date) => date > new Date();

export const TournamentSchema = z.object({
  name: z.string().min(3, "Too short"),
  description: z.string().optional(),
  start_date: z.coerce.date().refine(isFutureDate, {
    message: "Start date must be in the future",
  }),
  end_date: z.coerce.date().refine(isFutureDate, {
    message: "End date must be in the future",
  }),
}).refine(data => data.end_date > data.start_date, {
  message: "End date must be after start date",
  path: ["end_date"],
});
