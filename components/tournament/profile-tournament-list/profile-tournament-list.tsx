import Link from "next/link";
import { listTournamentsOfUser } from "@/next-server-functions/tournament/tournaments-data";
import { createClient } from "@/utils/supabase/server";

type ProfileTournamentListProps = {
  userId: string;
};

export default async function ProfileTournamentList({
  userId,
}: ProfileTournamentListProps) {
  const supabase = createClient();

  const { data: tournaments } = await listTournamentsOfUser(supabase, userId);

  return (
    <ul>
      {tournaments!.map((t) => (
        <li key={t.tournament_id} className="p-2 border-2 mb-1">
          <Link href={`/tournaments/${t.tournament_id}`}>
            {t.tournaments!.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
