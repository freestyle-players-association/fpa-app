import { Link } from "@/i18n/routing";
import EventList from "@/components/event/list/event-list";
import { Suspense } from "react";
import EventListSkeleton from "@/components/event/list/event-list-skeleton";
import { getUser } from "@/next-server-functions/user/auth-data";
import { createClient } from "@/utils/supabase/server";

export default async function EventsListPage() {
  const supabase = createClient();
  const user = await getUser(supabase);
  return (
    <div>
      <Suspense fallback={<EventListSkeleton />}>
        <EventList />
      </Suspense>
      {user && <Link href={"/events/create"}>Create Event {"->"}</Link>}
    </div>
  );
}
