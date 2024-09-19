import { getTranslations } from "next-intl/server";
import {
  getAuthenticatedUserProfile,
  getUserProfileInfoFinalised,
} from "@/next-server-functions/user-profile/user-profile-data";
import { createClient } from "@/utils/supabase/server";

import CTA from "@/components/common/cta";

export default async function Index() {
  const supabase = createClient();
  const userProfile = await getAuthenticatedUserProfile(supabase);
  const isUserProfileFinalied = await getUserProfileInfoFinalised(supabase);

  console.log(isUserProfileFinalied, "is finalised");

  const t = await getTranslations("HomePage");
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      {t("title")}
      {userProfile && !isUserProfileFinalied ? <CTA /> : null}
      {userProfile?.username}
    </div>
  );
}
