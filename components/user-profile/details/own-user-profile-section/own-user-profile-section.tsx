import UserProfileAvatar from "@/components/user-profile/details/user-profile-avatar/user-profile-avatar";
import Link from "next/link";
import { Tables } from "@/utils/supabase/database.types";
import { getTranslations } from "next-intl/server";

type OwnUserProfileDisplayProps = {
  userProfile: Tables<"userprofiles">;
};

export default async function OwnUserProfileSection({
  userProfile,
}: OwnUserProfileDisplayProps) {
  const t = await getTranslations("user.profile");
  return (
    <section>
      <UserProfileAvatar
        url={userProfile.avatar_url}
        name={userProfile.username}
      />
      <p>
        {t("common.username")}: {userProfile.username}
      </p>
      <p style={{ marginBottom: "1rem" }}>
        {t("common.email")}: {userProfile.email}
      </p>
      <Link href={"/user-profile/update"}>
        {t("form.update-profile-button")} {"->"}
      </Link>
    </section>
  );
}
