import { Tables } from "@/utils/supabase/database.types";

export function useIsProfileFinalised(profile: Tables<"userprofiles"> | null) {
  const requiredFields: Array<keyof Tables<"userprofiles">> = [
    "first_name",
    "last_name",
    "date_of_birth",
  ];

  const isProfileFinalised = profile
    ? requiredFields.every(
        (field) => profile[field] !== null && profile[field] !== "",
      )
    : false;

  return isProfileFinalised;
}
