import TournamentOrganizersList from "@/components/tournament-organizers/list/tournament-organizers-list";
import { listTournamentOrganizers } from "@/next-server-functions/tournament-organizers/tournament-orgranizers-data";
import { createClient } from "@/utils/supabase/server";
import { getUser } from "@/next-server-functions/user/auth-data";
import { Suspense } from "react";
import TournamentOrganizersInvitations from "@/components/tournament-organizers-invitations/list/tournament-organizers-invitations-list";

type TournamentOrganizersSectionProps = {
  tournamentId: string;
};

export default async function TournamentOrganizersSection({
  tournamentId,
}: TournamentOrganizersSectionProps) {
  const supabase = createClient();

  const [organizers, user] = await Promise.all([
    listTournamentOrganizers(supabase, tournamentId),
    getUser(supabase),
  ]);

  const isUserOrganizer = organizers.data?.find(
    (o) => o.userprofiles?.id === user?.id,
  );

  if (!isUserOrganizer) {
    return <></>;
  }

  return (
    <div>
      <h3>Organizers-Section</h3>
      <TournamentOrganizersList organizers={organizers.data!} />
      <Suspense fallback={<p>..loading</p>}>
        <TournamentOrganizersInvitations tournamentId={tournamentId} />
      </Suspense>
      {/*<CreateTournamentOrganizerInvitationForm tournamentId={tournamentId} />*/}
    </div>
  );
}
