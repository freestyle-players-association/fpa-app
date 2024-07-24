import TournamentDetails from "@/components/tournament/details/tournament-details";
import { Suspense } from "react";
import { getTournamentById } from "@/next-server-functions/tournament/tournaments-data";
import { createClient } from "@/utils/supabase/server";
import TournamentOrganizersSection from "@/components/tournament-organizers/section/tournament-organizers-section";

export default async function TournamentDetailsPage({
  params: { tournamentId },
}: {
  params: { tournamentId: string };
}) {
  const supabase = createClient();
  const tournament = await getTournamentById(supabase, tournamentId);

  return (
    <>
      <Suspense fallback={<p>...loading</p>}>
        <TournamentDetails tournament={tournament} />
      </Suspense>
      <Suspense fallback={<p>loading</p>}>
        <TournamentOrganizersSection tournamentId={tournamentId} />
      </Suspense>
    </>
  );
}
