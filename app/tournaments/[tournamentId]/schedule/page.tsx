import { Suspense } from "react";
import { getTournamentById } from "@/next-server-functions/tournament/tournaments-data";
import { createClient } from "@/utils/supabase/server";
import TournamentScheduleDetails from "@/components/tournament-schedule/details/tournament-schedule-details";
import { getScheduleByTournamentId } from "@/next-server-functions/tournament-schedule/tournament-schedules-data";
import { getUser } from "@/next-server-functions/user/auth-data";
import { isUserTournamentOrganizer } from "@/next-server-functions/user/tournament/organizer-check-action";
import Link from "next/link";

export default async function TournamentScheduleDetailsPage({
  params: { tournamentId },
}: {
  params: { tournamentId: string };
}) {
  const supabase = createClient();
  const tournament = await getTournamentById(supabase, tournamentId);
  const schedule = await getScheduleByTournamentId(supabase, tournamentId);
  const user = await getUser(supabase);
  const userIsOrganizer =
    user && (await isUserTournamentOrganizer(user.id, tournamentId));

  return (
    <>
      <Suspense fallback={<p>...loading</p>}>
        <TournamentScheduleDetails
          tournament={tournament}
          schedule={schedule}
        />
        {userIsOrganizer && (
          <Link href={`/tournaments/${tournament.id}/schedule/create`}>
            Create Schedule
          </Link>
        )}
      </Suspense>
    </>
  );
}
