import { getAuthenticatedUserProfile } from "@/next-server-functions/user-profile/user-profile-data";
import { createClient } from "@/utils/supabase/server";
import OwnUserProfileSection from "@/components/user-profile/details/own-user-profile-section/own-user-profile-section";
import ProfileEventOrganizerInvitationSection from "@/components/event-organizers-invitations/profile-event-organizer-invitations/profile-event-organizer-invitation-section";
import ProfileEventListSection from "@/components/event/profile-event-list/profile-event-list-section";
import { Card } from "@/components/common/card";

export default async function UserProfilePage() {
  const client = createClient();
  const userProfile = await getAuthenticatedUserProfile(client);
  return (
    <Card className="p-4">
      <OwnUserProfileSection userProfile={userProfile!} />
      <ProfileEventOrganizerInvitationSection />
      <ProfileEventListSection userId={userProfile!.id} />
    </Card>
  );
}
