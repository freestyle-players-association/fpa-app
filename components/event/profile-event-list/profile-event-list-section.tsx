import { Suspense } from "react";
import ProfileEventList from "@/components/event/profile-event-list/profile-event-list";
import { getTranslations } from "next-intl/server";

type ProfileEventListProps = {
  userId: string;
};

export default async function ProfileEventListSection({
  userId,
}: ProfileEventListProps) {
  const t = await getTranslations();
  return (
    <div style={{ border: "solid 1px", padding: "1rem" }}>
      <h3>{t("event.organizer.owned")}</h3>
      <Suspense fallback={<p>...loading</p>}>
        <ProfileEventList userId={userId} />
      </Suspense>
    </div>
  );
}
