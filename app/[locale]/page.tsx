import { getTranslations } from "next-intl/server";
import { getAuthenticatedUserProfile } from "@/next-server-functions/user-profile/user-profile-data";
import { createClient } from "@/utils/supabase/server";
import { Tables } from "@/utils/supabase/database.types";

import CTA from "@/components/common/cta";

function checkIsProfileFinalised(profile: Tables<"userprofiles">) {
  const requiredFields: Array<keyof Tables<"userprofiles">> = [
    "first_name",
    "last_name",
    "date_of_birth",
  ];
  return requiredFields.every(
    (field) => profile[field] !== null && profile[field] !== "",
  );
}

export default async function Index() {
  const supabase = createClient();
  const userProfile = await getAuthenticatedUserProfile(supabase);
  const isProfileFinalised = userProfile
    ? checkIsProfileFinalised(userProfile)
    : false;

  const t = await getTranslations("HomePage");
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      {t("title")}
      {!isProfileFinalised && <CTA />}
      {userProfile?.username}
    </div>
  );
}
