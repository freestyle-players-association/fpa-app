import { getOrganizerInvitationsOfProfile } from "@/next-server-functions/event-organizers/invitation/event-organizers-invitations-data";
import { createClient } from "@/utils/supabase/server";
import DeleteEventOrganizerInvitationButton from "@/components/event-organizers-invitations/form/delete-event-organizer-invitation-button/delete-event-organizer-invitation-button";
import AcceptEventOrganizerInvitationButton from "@/components/event-organizers-invitations/form/accept-event-organizer-invitation/accept-event-organizer-invitation-button";
import { getTranslations } from "next-intl/server";
import { Card } from "@/components/common/card";

export default async function ProfileEventOrganizerInvitations() {
  const t = await getTranslations("event.invitation");
  const client = createClient();
  const { data } = await getOrganizerInvitationsOfProfile(client);
  return (
    <Card className="p-4">
      <h3>{t("invitation-list-title")}:</h3>
      <ul>
        {data?.map((invitation) => (
          <li
            key={invitation.event_id}
            style={{ display: "flex", gap: "1rem", alignItems: "center" }}
          >
            {invitation.events!.name}{" "}
            <DeleteEventOrganizerInvitationButton
              eventId={invitation.event_id}
              userId={invitation.userprofile_id}
            >
              Decline
            </DeleteEventOrganizerInvitationButton>
            <AcceptEventOrganizerInvitationButton
              eventId={invitation.event_id}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
}
