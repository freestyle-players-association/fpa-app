import { Tables } from "@/utils/supabase/database.types";
import { Card } from "@/components/common/card";

type EventDetailsProps = {
  event: Tables<"events">;
};

export default async function EventDetails({ event }: EventDetailsProps) {
  const start_date = new Date(event.start_date ?? "").toLocaleDateString();
  const end_date = new Date(event.end_date ?? "").toLocaleDateString();

  return (
    <Card className="p-4 mb-4">
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>
        {start_date} - {end_date}
      </p>
    </Card>
  );
}
