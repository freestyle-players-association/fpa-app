import { Tables } from "@/utils/supabase/database.types";

type EventScheduleDetails = {
  event: Tables<"events">;
  schedule: Tables<"event_schedules">[] | [];
};

export default async function EventScheduleDetails({
  event,
  schedule,
}: EventScheduleDetails) {
  return (
    <>
      <h2 className="text-xl font-bold mb-2">{event.name} Schedule</h2>
      {schedule.length === 0 ? (
        <p className="text-slate-500">No schedule available</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {schedule.map((scheduleEntry) => (
            <li key={scheduleEntry.id} className="flex gap-4 justify-between">
              <p>{scheduleEntry.description}</p>
              <div className="text-slate-500">
                <p>
                  {new Date(scheduleEntry.start_time).toUTCString()}-
                  {new Date(scheduleEntry.end_time).toUTCString()}
                </p>
                <p>{scheduleEntry.full_address}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
