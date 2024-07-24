import UpdateUserProfileAvatarForm from "@/components/user-profile/form/update-user-profile-avatar-form/update-user-profile-avatar-form";
import UpdateUserProfileForm from "@/components/user-profile/form/update-profile-form/udate-profile-form";
import { getAuthenticatedUserProfile } from "@/next-server-functions/user-profile/user-profile-data";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function UpdateUserProfilePage() {
  const supabase = createClient();
  const userProfile = await getAuthenticatedUserProfile(supabase);

  if (!userProfile) {
    redirect("/login");
  }

  return (
    <div>
      <div style={{ padding: "1rem", border: "solid" }}>
        <h3 style={{ marginBottom: "0.5rem" }}>Avatar</h3>
        <UpdateUserProfileAvatarForm
          initialValues={{
            username: userProfile.username,
            avatar_url: userProfile.avatar_url,
          }}
        />
      </div>
      <div style={{ padding: "1rem", border: "solid" }}>
        <h3 style={{ marginBottom: "0.5rem" }}>Profile</h3>
        <UpdateUserProfileForm
          initialValues={{ username: userProfile.username }}
        />
      </div>
    </div>
  );
}
