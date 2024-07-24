import { listOrganizersInvitations } from "@/next-server-functions/tournament-organizers/invitation/tournament-organizers-invitations-data";
import UserProfileAvatar from "@/components/user-profile/details/user-profile-avatar/user-profile-avatar";
import DeleteTournamentOrganizerInvitationButton from "@/components/tournament-organizers-invitations/form/delete-tournament-organizer-invitation-button/delete-tournament-organizer-invitation-button";

export default async function TournamentOrganizersInvitations({
  tournamentId,
}: {
  tournamentId: string;
}) {
  const invitations = await listOrganizersInvitations(tournamentId);
  return (
    <div style={{ border: "solid 1px", padding: "1rem" }}>
      <h3>pending organizer invitations:</h3>
      <ul>
        {invitations.data?.map((invitation) => (
          <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <UserProfileAvatar
              url={invitation.userprofiles!.avatar_url}
              name={invitation.userprofiles!.username}
            />
            <p>{invitation.userprofiles!.username}</p>
            <DeleteTournamentOrganizerInvitationButton
              tournamentId={invitation.tournament_id}
              userId={invitation.userprofile_id}
            >
              Revoke
            </DeleteTournamentOrganizerInvitationButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
