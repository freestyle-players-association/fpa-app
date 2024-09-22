import { listOrganizersInvitations } from "@/next-server-functions/event-organizers/invitation/event-organizers-invitations-data";
import UserProfileAvatar from "@/components/user-profile/details/user-profile-avatar/user-profile-avatar";
import DeleteEventOrganizerInvitationButton from "@/components/event-organizers-invitations/form/delete-event-organizer-invitation-button/delete-event-organizer-invitation-button";

export default async function EventOrganizersInvitations({
  eventId,
}: {
  eventId: string;
}) {
  const invitations = await listOrganizersInvitations(eventId);
  return (
    <div>
      <h3>pending organizer invitations:</h3>
      <ul>
        {invitations.data?.map((invitation) => (
          <li
            key={invitation.event_id}
            style={{ display: "flex", gap: "1rem", alignItems: "center" }}
          >
            <UserProfileAvatar
              url={invitation.userprofiles!.avatar_url}
              name={invitation.userprofiles!.username}
            />
            <p>{invitation.userprofiles!.username}</p>
            <DeleteEventOrganizerInvitationButton
              eventId={invitation.event_id}
              userId={invitation.userprofile_id}
            >
              Revoke
            </DeleteEventOrganizerInvitationButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
