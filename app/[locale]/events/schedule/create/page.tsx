import CreateScheduleForm from "@/components/event-schedule/details/form/create/create-event-schedule-form";

export default function CreateSchedulePage({
  params: { eventId },
}: {
  params: { eventId: string };
}) {
  return <CreateScheduleForm eventId={eventId} />;
}
