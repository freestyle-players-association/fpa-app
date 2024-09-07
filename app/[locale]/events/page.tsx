import { Link } from "@/i18n/routing";
import EventList from "@/components/event/list/event-list";
import { Suspense } from "react";
import EventListSkeleton from "@/components/event/list/event-list-skeleton";
import { getUser } from "@/next-server-functions/user/auth-data";
import { createClient } from "@/utils/supabase/server";
import { listEvents } from "@/next-server-functions/event/events-data";
import {Card} from "@/components/ui/card";
import {buttonVariants, Button} from "@/components/ui/button";

export default async function EventsListPage() {
  const supabase = createClient();
  const user = await getUser(supabase);
  const { data: events } = await listEvents();

  if (!events) {
    return <></>;
  }

  return (
    <Card>
      <Suspense fallback={<EventListSkeleton />}>
        <EventList events={events} />
      </Suspense>
      {user && <Link href={"/events/create"}>
        <Button className={buttonVariants({variant: "default"})}>Create Event</Button>
      </Link>}
    </Card>
  );
}
