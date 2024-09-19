"use server";

import { UserProfileSchema } from "@/validation-schemas/user-profile-schema";
import { createClient } from "@/utils/supabase/server";
import { getUser } from "@/next-server-functions/user/auth-data";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

type UpdateUserProfileValidationErrors = {
  username?: string[];
  last_name?: string[];
  date_of_birth?: string[];
};

type UpdateUserProfileState = {
  validationErrors?: UpdateUserProfileValidationErrors;
};

export async function updateUserProfile(
  _: UpdateUserProfileState,
  formData: FormData,
): Promise<UpdateUserProfileState> {
  const validatedFields = UserProfileSchema.omit({
    avatar: true,
  }).safeParse({
    username: formData.get("username"),
    last_name: formData.get("last_name"),
    date_of_birth: formData.get("date_of_birth"),
  });

  if (!validatedFields.success) {
    return {
      validationErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const supabase = createClient();
  const user = await getUser(supabase);

  if (!user) {
    redirect("/login");
  }

  await supabase
    .from("userprofiles")
    .update({
      username: validatedFields.data.username,
      last_name: validatedFields.data.last_name,
      date_of_birth: validatedFields.data.date_of_birth,
    })
    .eq("id", user.id);

  revalidatePath("/user-profile");
  redirect("/user-profile");
}
