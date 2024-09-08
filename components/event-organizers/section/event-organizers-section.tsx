import EventOrganizersList from "@/components/event-organizers/list/event-organizers-list";
import { listEventOrganizers } from "@/next-server-functions/event-organizers/event-orgranizers-data";
import { createClient } from "@/utils/supabase/server";
import { getUser } from "@/next-server-functions/user/auth-data";
import { Suspense } from "react";
import EventOrganizersInvitations from "@/components/event-organizers-invitations/list/event-organizers-invitations-list";
import { Card } from "@/components/ui/card";

type EventOrganizersSectionProps = {
  eventId: string;
};

export default async function EventOrganizersSection({
  eventId,
}: EventOrganizersSectionProps) {
  const supabase = createClient();

  const [organizers, user] = await Promise.all([
    listEventOrganizers(supabase, eventId),
    getUser(supabase),
  ]);

  const isUserOrganizer = organizers.data?.find(
    (o) => o.userprofiles?.id === user?.id,
  );

  if (!isUserOrganizer) {
    return <></>;
  }

  return (
    <Card className="p-4 flex flex-col gap-4">
      <h3>Organizers-Section</h3>
      <EventOrganizersList organizers={organizers.data!} />
      <Suspense fallback={<p>..loading</p>}>
        <EventOrganizersInvitations eventId={eventId} />
      </Suspense>
      {/*<CreateEventOrganizerInvitationForm eventId={eventId} />*/}
    </Card>
  );
}
