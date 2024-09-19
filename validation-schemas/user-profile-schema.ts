import { z } from "zod";

export const UserProfileSchema = z.object({
  username: z.string().min(3, "Too short"),
  last_name: z.string().min(3, "Too short"),
  date_of_birth: z.string().min(10, "Too short"),
  avatar: z
    .instanceof(File)
    .refine((file) => file.type.includes("image"), "Must be of type image")
    .refine((file) => file.size < 1024 * 1024, "File must be 1Mb or smaller"),
});
