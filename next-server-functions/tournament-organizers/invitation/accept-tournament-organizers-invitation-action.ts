"use server";

import { createClient } from "@/utils/supabase/server";
import { getUser } from "@/next-server-functions/user/auth-data";
import { revalidatePath } from "next/cache";

export async function acceptTournamentOrganizersInvitation(
  _: {},
  formData: FormData,
) {
  const tournamentId = formData.get("tournamentId") as string;

  const supabase = createClient();
  const user = await getUser(supabase);

  await supabase.functions.invoke("accept-tournament-organizer-invitation", {
    body: { tournament_id: tournamentId, userprofile_id: user?.id },
  });

  revalidatePath(`/tournaments/${tournamentId}`);

  return {};
}
