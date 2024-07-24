import { Tables } from "@/utils/supabase/database.types";

type TournamentDetailsProps = {
  tournament: Tables<"tournaments">;
};

export default async function TournamentDetails({
  tournament,
}: TournamentDetailsProps) {
  return (
    <div>
      <div style={{ border: "solid", padding: "1rem" }}>
        <h2>{tournament.name}</h2>
        <p>{tournament.description}</p>
      </div>
    </div>
  );
}
