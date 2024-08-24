import { z } from "zod";

const futureDate = z
  .string()
  .datetime()
  .refine(
    (date) => {
      return new Date(date) > new Date();
    },
    {
      message: "Date must be in the future",
    },
  );

export const TournamentSchema = z
  .object({
    name: z.string().min(3, "Name is too short"),
    description: z.string().min(3, "Description is too short"),
    start_date: futureDate,
    end_date: futureDate,
  })
  .refine((data) => data.end_date > data.start_date, {
    message: "End date must be after start date",
    path: ["end_date"],
  });
