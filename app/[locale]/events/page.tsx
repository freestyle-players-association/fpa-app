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
import { getAuthenticatedUserProfile } from "@/next-server-functions/user-profile/user-profile-data";
import { useIsProfileFinalised } from "@/hooks/useIsProfileFinalised";

export default async function EventsListPage() {
  const supabase = createClient();
  const user = await getUser(supabase);
  const userProfile = await getAuthenticatedUserProfile(supabase);
  const { data: events } = await listEvents();

  const isProfileFinalised = useIsProfileFinalised(userProfile);

  if (!events) {
    return <></>;
  }

  return (
    <>
      {!isProfileFinalised && <CTA />}
      <Card className="p-4">
        <Suspense fallback={<EventListSkeleton />}>
          <EventList events={events} />
        </Suspense>
        {user && (
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
