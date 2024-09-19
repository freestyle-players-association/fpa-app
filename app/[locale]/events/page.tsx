import { Link } from "@/i18n/routing";
import EventList from "@/components/event/list/event-list";
import { Suspense } from "react";
import EventListSkeleton from "@/components/event/list/event-list-skeleton";
import { getUser } from "@/next-server-functions/user/auth-data";
import { createClient } from "@/utils/supabase/server";
import { listEvents } from "@/next-server-functions/event/events-data";
import { Card } from "@/components/common/card";
import { buttonVariants, Button } from "@/components/common/button";
import CTA from "@/components/common/cta";
import {
  getAuthenticatedUserProfile,
  getUserProfileInfoFinalised,
} from "@/next-server-functions/user-profile/user-profile-data";

export default async function EventsListPage() {
  const supabase = createClient();
  const user = await getUser(supabase);
  const userProfile = await getAuthenticatedUserProfile(supabase);
  const isUserProfileFinalied = await getUserProfileInfoFinalised(supabase);
  const { data: events } = await listEvents();

  if (!events) {
    return <></>;
  }

  return (
    <>
      {userProfile && !isUserProfileFinalied ? <CTA /> : null}
      <Card className="p-4">
        <Suspense fallback={<EventListSkeleton />}>
          <EventList events={events} />
        </Suspense>
        {user && isUserProfileFinalied && (
          <Link href={"/events/create"}>
            <Button className={buttonVariants({ variant: "default" })}>
              Create Event
            </Button>
          </Link>
        )}
      </Card>
    </>
  );
}
