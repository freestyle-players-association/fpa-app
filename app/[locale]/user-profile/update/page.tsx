import UpdateUserProfileAvatarForm from "@/components/user-profile/form/update-user-profile-avatar-form/update-user-profile-avatar-form";
import UpdateUserProfileForm from "@/components/user-profile/form/update-profile-form/udate-profile-form";
import { getAuthenticatedUserProfile } from "@/next-server-functions/user-profile/user-profile-data";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function UpdateUserProfilePage() {
  const supabase = createClient();
  const userProfile = await getAuthenticatedUserProfile(supabase);

  if (!userProfile) {
    redirect("/login");
  }

  return (
    <Card className="p-4">
      <h3>Avatar</h3>
      <UpdateUserProfileAvatarForm
        initialValues={{
          username: userProfile.username,
          avatar_url: userProfile.avatar_url,
        }}
      />
      <Separator className="my-4" />
      <h3>Profile</h3>
      <UpdateUserProfileForm
        initialValues={{ username: userProfile.username }}
      />
    </Card>
  );
}
