import { Tables } from "@/utils/supabase/database.types";
import { Card } from "@/components/common/card";
import { formatDate } from "@/utils/formatting/date-time-formatting";

type EventDetailsProps = {
  event: Tables<"events">;
};

export default async function EventDetails({ event }: EventDetailsProps) {
  return (
    <Card className="p-4 mb-4">
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>
        {formatDate(event.start_date)} - {formatDate(event.end_date)}
      </p>
    </Card>
  );
}
