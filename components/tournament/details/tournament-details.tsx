import { Tables } from "@/utils/supabase/database.types";

type TournamentDetailsProps = {
  tournament: Tables<"tournaments">;
};

export default async function TournamentDetails({
  tournament,
}: TournamentDetailsProps) {
  const start_date = new Date(tournament.start_date ?? "").toLocaleDateString();
  const end_date = new Date(tournament.end_date ?? "").toLocaleDateString();

  return (
    <div>
      <div style={{ border: "solid", padding: "1rem" }}>
        <h2>{tournament.name}</h2>
        <p>{tournament.description}</p>
        <p>
          {start_date} - {end_date}
        </p>
      </div>
    </div>
  );
}
