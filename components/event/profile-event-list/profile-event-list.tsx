import { Link } from "@/i18n/routing";
import { listEventsOfUser } from "@/next-server-functions/event/events-data";
import { createClient } from "@/utils/supabase/server";

type ProfileEventListProps = {
  userId: string;
};

export default async function ProfileEventList({
  userId,
}: ProfileEventListProps) {
  const supabase = createClient();

  const { data: events } = await listEventsOfUser(supabase, userId);

  return (
    <ul>
      {events!.map((t) => (
        <li key={t.event_id} className="p-2 border-2 mb-1">
          <Link href={`/events/${t.event_id}`}>{t.events!.name}</Link>
        </li>
      ))}
    </ul>
  );
}
