import { Suspense } from "react";
import ProfileTournamentList from "@/components/tournament/profile-tournament-list/profile-tournament-list";
import { getTranslations } from "next-intl/server";

type ProfileTournamentListProps = {
  userId: string;
};

export default async function ProfileTournamentListSection({
  userId,
}: ProfileTournamentListProps) {
  const t = await getTranslations();
  return (
    <div style={{ border: "solid 1px", padding: "1rem" }}>
      <h3>{t("tournament.organizer.owned")}</h3>
      <Suspense fallback={<p>...loading</p>}>
        <ProfileTournamentList userId={userId} />
      </Suspense>
    </div>
  );
}
