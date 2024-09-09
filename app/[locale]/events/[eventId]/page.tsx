import EventDetails from "@/components/event/details/event-details";
import { Suspense } from "react";
import { getEventById } from "@/next-server-functions/event/events-data";
import { createClient } from "@/utils/supabase/server";
import EventOrganizersSection from "@/components/event-organizers/section/event-organizers-section";
import { buttonVariants } from "@/components/common/button";
import { Link } from "@/i18n/routing";

export default async function EventDetailsPage({
  params: { eventId },
}: {
  params: { eventId: string };
}) {
  const supabase = createClient();
  const event = await getEventById(supabase, eventId);

  return (
    <>
      <Suspense fallback={<p>...loading</p>}>
        <EventDetails event={event} />
      </Suspense>
      <Suspense fallback={<p>loading</p>}>
        <EventOrganizersSection eventId={eventId} />
      </Suspense>
      <Link
        href={`/events/${eventId}/schedule/`}
        className={buttonVariants({ variant: "default" })}
      >
        See Schedule
      </Link>
    </>
  );
}
