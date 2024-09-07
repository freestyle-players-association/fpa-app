import { Link } from "@/i18n/routing";
import { listEventsOfUser } from "@/next-server-functions/event/events-data";
import { createClient } from "@/utils/supabase/server";
import EventList from "@/components/event/list/event-list";

type ProfileEventListProps = {
  userId: string;
};

export default async function ProfileEventList({
  userId,
}: ProfileEventListProps) {
  const supabase = createClient();

  const { data: events } = await listEventsOfUser(supabase, userId);

  if (!events) return null;
  return (
    <EventList events={events} />
  );
}
