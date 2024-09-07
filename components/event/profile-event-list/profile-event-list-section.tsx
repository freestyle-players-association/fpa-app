import { Suspense } from "react";
import ProfileEventList from "@/components/event/profile-event-list/profile-event-list";
import { getTranslations } from "next-intl/server";
import ProfileEventListSkeleton from "@/components/event/profile-event-list/profile-event-list-skeleton";

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
      <Suspense fallback={<ProfileEventListSkeleton />}>
        <ProfileEventList userId={userId} />
      </Suspense>
    </div>
  );
}
