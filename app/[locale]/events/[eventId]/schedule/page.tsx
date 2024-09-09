import { Suspense } from "react";
import { getEventById } from "@/next-server-functions/event/events-data";
import { createClient } from "@/utils/supabase/server";
import EventScheduleDetails from "@/components/event-schedule/details/event-schedule-details";
import { getScheduleByEventId } from "@/next-server-functions/event-schedule/event-schedules-data";
import { getUser } from "@/next-server-functions/user/auth-data";
import { isUserEventOrganizer } from "@/next-server-functions/user/event/organizer-check-action";
import { Card } from "@/components/common/card";
import { Link } from "@/i18n/routing";
import { buttonVariants } from "@/components/common/button";

export default async function EventScheduleDetailsPage({
  params: { eventId },
}: {
  params: { eventId: string };
}) {
  const supabase = createClient();
  const event = await getEventById(supabase, eventId);
  const schedule = await getScheduleByEventId(supabase, eventId);
  const user = await getUser(supabase);
  const userIsOrganizer =
    user && (await isUserEventOrganizer(user.id, eventId));

  return (
    <Card className="p-4">
      <Suspense fallback={<p>...loading</p>}>
        <EventScheduleDetails event={event} schedule={schedule} />
      </Suspense>
      {userIsOrganizer && (
        <Link
          href={`/events/${event.id}/schedule/create`}
          className={buttonVariants({ variant: "default" })}
        >
          Create Schedule
        </Link>
      )}
    </Card>
  );
}
