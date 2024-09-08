import { getTranslations } from "next-intl/server";
import { getAuthenticatedUserProfile } from "@/next-server-functions/user-profile/user-profile-data";
import { createClient } from "@/utils/supabase/server";

import CTA from "@/components/common/cta";

import { useIsProfileFinalised } from "@/hooks/useIsProfileFinalised";

export default async function Index() {
  const supabase = createClient();
  const userProfile = await getAuthenticatedUserProfile(supabase);
  const isProfileFinalised = useIsProfileFinalised(userProfile);

  const t = await getTranslations("HomePage");
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      {t("title")}
      {!isProfileFinalised && <CTA />}
      {userProfile?.username}
    </div>
  );
}
