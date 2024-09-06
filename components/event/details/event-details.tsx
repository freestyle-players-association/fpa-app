import { Tables } from "@/utils/supabase/database.types";

type EventDetailsProps = {
  event: Tables<"events">;
};

export default async function EventDetails({ event }: EventDetailsProps) {
  const start_date = new Date(event.start_date ?? "").toLocaleDateString();
  const end_date = new Date(event.end_date ?? "").toLocaleDateString();

  return (
    <div>
      <div style={{ border: "solid", padding: "1rem" }}>
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <p>
          {start_date} - {end_date}
        </p>
      </div>
    </div>
  );
}
