import ProfileEventOrganizerInvitations from "@/components/event-organizers-invitations/profile-event-organizer-invitations/profile-event-organizer-invitations";
import { Suspense } from "react";

export default async function ProfileEventOrganizerInvitationSection() {
  return (
    <section>
      <Suspense fallback={<p>....loading</p>}>
        <ProfileEventOrganizerInvitations />
      </Suspense>
    </section>
  );
}
