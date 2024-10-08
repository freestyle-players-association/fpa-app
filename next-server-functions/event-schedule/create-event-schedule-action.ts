"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getUser } from "@/next-server-functions/user/auth-data";
import { ScheduleSchema } from "@/validation-schemas/event-schedule-schema";

export type CreateScheduleValidationErrors = {
  event_id?: string[];
  description?: string[];
  start_time?: string[];
  end_time?: string[];
  place_id?: string[];
  lat?: string[];
  lng?: string[];
  full_address?: string[];
};

type CreateScheduleState = {
  validationErrors?: CreateScheduleValidationErrors;
};

export async function createSchedule(
  _: CreateScheduleState,
  formData: FormData,
): Promise<CreateScheduleState> {
  const validatedFields = ScheduleSchema.safeParse({
    event_id: formData.get("event_id"),
    description: formData.get("description"),
    start_time: formData.get("start_time"),
    end_time: formData.get("end_time"),
    place_id: formData.get("place_id"),
    lat: formData.get("lat"),
    lng: formData.get("lng"),
    full_address: formData.get("full_address"),
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
    .from("event_schedules")
    .insert({
      event_id: validatedFields.data.event_id,
      description: validatedFields.data.description,
      start_time: validatedFields.data.start_time,
      end_time: validatedFields.data.end_time,
      place_id: validatedFields.data.place_id,
      lat: validatedFields.data.lat,
      lng: validatedFields.data.lng,
      full_address: validatedFields.data.full_address,
    })
    .select()
    .maybeSingle()
    .throwOnError();

  revalidatePath("/events/${data!.event_id}/schedule");
  redirect(`/events/${data!.event_id}/schedule`);
}
