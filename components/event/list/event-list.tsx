import { Link } from "@/i18n/routing";
import { listEvents } from "@/next-server-functions/event/events-data";

export default async function EventList() {
  const { data: events } = await listEvents();

  return (
    <ul style={{ border: "solid 1px", padding: "1rem" }}>
      {events!.map((t) => (
        <li key={t.id} className="p-2 border-2 mb-1">
          <Link href={`/events/${t.id}`}>{t.name}</Link>
        </li>
      ))}
    </ul>
  );
}
