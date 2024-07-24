import { getOrganizerInvitationsOfProfile } from "@/next-server-functions/tournament-organizers/invitation/tournament-organizers-invitations-data";
import { createClient } from "@/utils/supabase/server";
import DeleteTournamentOrganizerInvitationButton from "@/components/tournament-organizers-invitations/form/delete-tournament-organizer-invitation-button/delete-tournament-organizer-invitation-button";
import AcceptTournamentOrganizerInvitationButton from "@/components/tournament-organizers-invitations/form/accept-tournament-organizer-invitation/accept-tournament-organizer-invitation-button";

export default async function ProfileTournamentOrganizerInvitations() {
  const client = createClient();
  const { data } = await getOrganizerInvitationsOfProfile(client);
  return (
    <div style={{ border: "solid 1px", padding: "1rem" }}>
      <h3>Invitations as organizer:</h3>
      <ul>
        {data?.map((invitation) => (
          <li
            key={invitation.tournament_id}
            style={{ display: "flex", gap: "1rem", alignItems: "center" }}
          >
            {invitation.tournaments!.name}{" "}
            <DeleteTournamentOrganizerInvitationButton
              tournamentId={invitation.tournament_id}
              userId={invitation.userprofile_id}
            >
              Decline
            </DeleteTournamentOrganizerInvitationButton>
            <AcceptTournamentOrganizerInvitationButton
              tournamentId={invitation.tournament_id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
