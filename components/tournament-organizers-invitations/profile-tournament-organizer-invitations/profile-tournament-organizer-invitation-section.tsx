import ProfileTournamentOrganizerInvitations from "@/components/tournament-organizers-invitations/profile-tournament-organizer-invitations/profile-tournament-organizer-invitations";
import { Suspense } from "react";

export default async function ProfileTournamentOrganizerInvitationSection() {
  return (
    <section>
      <Suspense fallback={<p>....loading</p>}>
        <ProfileTournamentOrganizerInvitations />
      </Suspense>
    </section>
  );
}
