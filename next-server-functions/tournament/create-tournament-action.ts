"use server";

import { createClient } from "@/utils/supabase/server";
import { TournamentSchema } from "@/validation-schemas/tournament-schema";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getUser } from "@/next-server-functions/user/auth-data";

export type CreateTournamentValidationErrors = {
  name?: string[];
  description?: string[];
  start_date?: string[];
  end_date?: string[];
};

type CreateTournamentState = {
  validationErrors?: CreateTournamentValidationErrors;
};

export async function createTournament(
  _: CreateTournamentState,
  formData: FormData,
): Promise<CreateTournamentState> {
  const validatedFields = TournamentSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    start_date: formData.get("start_date"),
    end_date: formData.get("end_date"),
  });

  if (!validatedFields.success) {
    return {
      validationErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const supabase = createClient();
  const user = await getUser(supabase);

  if (!user) {
    throw new Error("Unauthenticated");
  }

  const { data } = await supabase
    .from("tournaments")
    .insert({
      name: validatedFields.data.name,
      description: validatedFields.data.description,
      start_date: validatedFields.data.start_date,
      end_date: validatedFields.data.end_date
    })
    .select()
    .maybeSingle()
    .throwOnError();

  await supabase
    .from("tournament_organizers")
    .insert({
      tournament_id: data!.id,
      userprofile_id: user.id
    })
    .throwOnError();

  revalidatePath("/tournaments");
  redirect(`/tournaments/${data!.id}`);
}
