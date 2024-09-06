import { z } from "zod";

const futureDate = z.string().refine(
  (date) => {
    return new Date(date) > new Date();
  },
  {
    message: "Date must be in the future",
  },
);

export const ScheduleSchema = z
  .object({
    event_id: z.string().uuid(),
    description: z.string().min(3, "Description is too short"),
    start_time: futureDate,
    end_time: futureDate,
    place_id: z.string().optional(),
    lat: z.coerce.number().optional(),
    lng: z.coerce.number().optional(),
    full_address: z.string().optional(),
  })
  .refine((data) => data.end_time > data.start_time, {
    message: "End must be after start",
    path: ["end_time"],
  });
