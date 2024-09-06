import { Link } from "@/i18n/routing";
import TournamentList from "@/components/tournament/list/tournament-list";
import { Suspense } from "react";
import TournamentListSkeleton from "@/components/tournament/list/tournament-list-skeleton";
import { getUser } from "@/next-server-functions/user/auth-data";
import { createClient } from "@/utils/supabase/server";

export default async function TournamentsListPage() {
  const supabase = createClient();
  const user = await getUser(supabase);
  return (
    <div>
      <Suspense fallback={<TournamentListSkeleton />}>
        <TournamentList />
      </Suspense>
      {user && (
        <Link href={"/tournaments/create"}>Create Tournament {"->"}</Link>
      )}
    </div>
  );
}
