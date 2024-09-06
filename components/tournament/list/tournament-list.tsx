import { Link } from "@/i18n/routing";
import { listTournaments } from "@/next-server-functions/tournament/tournaments-data";

export default async function TournamentList() {
  const { data: tournaments } = await listTournaments();

  return (
    <ul style={{ border: "solid 1px", padding: "1rem" }}>
      {tournaments!.map((t) => (
        <li key={t.id} className="p-2 border-2 mb-1">
          <Link href={`/tournaments/${t.id}`}>{t.name}</Link>
        </li>
      ))}
    </ul>
  );
}
