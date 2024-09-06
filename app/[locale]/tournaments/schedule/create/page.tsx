import CreateScheduleForm from "@/components/tournament-schedule/details/form/create/create-tournament-schedule-form";

export default function CreateSchedulePage({
  params: { tournamentId },
}: {
  params: { tournamentId: string };
}) {
  return <CreateScheduleForm tournamentId={tournamentId} />;
}
