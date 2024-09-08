import { Suspense } from "react";
import ProfileEventList from "@/components/event/profile-event-list/profile-event-list";
import { getTranslations } from "next-intl/server";
import ProfileEventListSkeleton from "@/components/event/profile-event-list/profile-event-list-skeleton";
import { Card } from "@/components/ui/card";

type ProfileEventListProps = {
  userId: string;
};

export default async function ProfileEventListSection({
  userId,
}: ProfileEventListProps) {
  const t = await getTranslations();
  return (
    <Card className="p-4">
      <h3>{t("event.organizer.owned")}</h3>
      <Suspense fallback={<ProfileEventListSkeleton />}>
        <ProfileEventList userId={userId} />
      </Suspense>
    </Card>
  );
}
