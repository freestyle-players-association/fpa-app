import { EventOrganizersListItem } from "@/next-server-functions/event-organizers/event-orgranizers-data";
import UserProfileDisplay from "@/components/user-profile/details/user-profile-display/user-profile-display";
import DeleteEventOrganizerButton from "@/components/event-organizers/form/delete-event-organizer/delete-event-organizer-button";
import { Card } from "@/components/ui/card";

export default async function EventOrganizersList({
  organizers,
}: {
  organizers: EventOrganizersListItem[];
}) {
  return (
    <Card>
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
            <DeleteEventOrganizerButton
              eventId={organizer.event_id}
              userId={organizer.userprofiles.id}
            >
              Cancel Invitation
            </DeleteEventOrganizerButton>
          </li>
        ))}
      </ul>
    </Card>
  );
}
