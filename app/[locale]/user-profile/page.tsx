import { getAuthenticatedUserProfile } from "@/next-server-functions/user-profile/user-profile-data";
import { createClient } from "@/utils/supabase/server";
import OwnUserProfileSection from "@/components/user-profile/details/own-user-profile-section/own-user-profile-section";
import ProfileTournamentOrganizerInvitationSection from "@/components/tournament-organizers-invitations/profile-tournament-organizer-invitations/profile-tournament-organizer-invitation-section";
import ProfileTournamentListSection from "@/components/tournament/profile-tournament-list/profile-tournament-list-section";

export default async function UserProfilePage() {
  const client = createClient();
  const userProfile = await getAuthenticatedUserProfile(client);
  return (
    <>
      <OwnUserProfileSection userProfile={userProfile!} />
      <ProfileTournamentOrganizerInvitationSection />
      <ProfileTournamentListSection userId={userProfile!.id} />
    </>
  );
}
