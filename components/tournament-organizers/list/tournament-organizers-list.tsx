import { TournamentOrganizersListItem } from "@/next-server-functions/tournament-organizers/tournament-orgranizers-data";
import UserProfileDisplay from "@/components/user-profile/details/user-profile-display/user-profile-display";
import DeleteTournamentOrganizerButton from "@/components/tournament-organizers/form/delete-tournament-organizer/delete-tournament-organizer-button";

export default async function TournamentOrganizersList({
  organizers,
}: {
  organizers: TournamentOrganizersListItem[];
}) {
  return (
    <div style={{ border: "solid", padding: "1rem" }}>
      <h3>Organizers:</h3>
      <ul>
        {organizers.map((organizer) => (
          <li
            key={organizer.userprofiles.id}
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <UserProfileDisplay userProfile={organizer.userprofiles} />
            <DeleteTournamentOrganizerButton
              tournamentId={organizer.tournament_id}
              userId={organizer.userprofiles.id}
            >
              Cancel Invitation
            </DeleteTournamentOrganizerButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
