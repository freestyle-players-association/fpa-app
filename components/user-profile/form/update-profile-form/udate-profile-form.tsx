"use client";

import { useFormState } from "react-dom";
import { updateUserProfile } from "@/next-server-functions/user-profile/update-user-profile-action";
import FormSubmitButton from "@/components/common/form-submit-button";
import { Tables } from "@/utils/supabase/database.types";
import { Label } from "@/components/common/label";
import { Input } from "@/components/common/input";

type UpdateUserProfileFormProps = {
  initialValues: Partial<Omit<Tables<"userprofiles">, "avatar_url" | "id">>;
};

export default function UpdateUserProfileForm({
  initialValues,
}: UpdateUserProfileFormProps) {
  const [state, dispatch] = useFormState(updateUserProfile, {});

  return (
    <form
      action={dispatch}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <Label htmlFor="username">First Name</Label>
      <Input
        name="username"
        type="text"
        required
        placeholder="Username"
        defaultValue={initialValues.username}
      />

      <Label htmlFor="last_name">Last Name</Label>
      <Input
        name="last_name"
        type="text"
        required
        placeholder="Last Name"
        defaultValue={initialValues.last_name || ""}
      />

      <Label htmlFor="date_of_birth">Date of birth</Label>
      <Input
        name="date_of_birth"
        type="date"
        required
        placeholder="date of birth"
        defaultValue={initialValues.date_of_birth || ""}
      />
      <FormSubmitButton>Update user Profile</FormSubmitButton>
    </form>
  );
}
