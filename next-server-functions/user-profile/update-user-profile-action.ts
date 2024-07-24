"use server";

import { UserProfileSchema } from "@/validation-schemas/user-profile-schema";
import { createClient } from "@/utils/supabase/server";
import { getUser } from "@/next-server-functions/user/auth-data";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

type UpdateUserProfileValidationErrors = {
  username?: string[];
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
    .update({ username: validatedFields.data.username })
    .eq("id", user.id);

  revalidatePath("/user-profile");
  redirect("/user-profile");
}
