"use server";

import { UserProfileSchema } from "@/validation-schemas/user-profile-schema";
import { createClient } from "@/utils/supabase/server";
import { getUser } from "@/next-server-functions/user/auth-data";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

type UpdateUserProfileAvatarValidationErrors = {
  avatar?: string[];
};

type UpdateUserProfileAvatarState = {
  validationErrors?: UpdateUserProfileAvatarValidationErrors;
};

export async function updateUserProfileAvatar(
  _: UpdateUserProfileAvatarState,
  formData: FormData,
): Promise<UpdateUserProfileAvatarState> {
  const validatedFields = UserProfileSchema.pick({
    avatar: true,
  }).safeParse({
    avatar: formData.getAll("files")[0],
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

  const file = validatedFields.data.avatar;
  const fileExtension = file.name.split(".").pop();
  const newFileName = `${user.id}.${fileExtension}`;

  const res = await supabase.storage
    .from("avatars")
    .upload(newFileName, file, { contentType: file.type, upsert: true });

  if (res.error) {
    throw new Error(res.error.message);
  }

  await supabase
    .from("userprofiles")
    .update({ avatar_url: newFileName })
    .eq("id", user.id)
    .throwOnError();

  revalidatePath("/user-profile");
  redirect("/user-profile");
}
