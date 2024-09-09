"use client";

import { useFormState } from "react-dom";
import { updateUserProfileAvatar } from "@/next-server-functions/user-profile/update-user-profile-avatar-action";
import FormSubmitButton from "@/components/common/form-submit-button";
import UserProfileAvatar from "@/components/user-profile/details/user-profile-avatar/user-profile-avatar";
import { Tables } from "@/utils/supabase/database.types";

type UpdateUserProfileAvatarFormProps = {
  initialValues: Omit<
    Tables<"userprofiles">,
    "id" | "email" | "first_name" | "last_name" | "date_of_birth"
  >;
};

export default function UpdateUserProfileAvatarForm({
  initialValues,
}: UpdateUserProfileAvatarFormProps) {
  const [state, dispatch] = useFormState(updateUserProfileAvatar, {});

  return (
    <form
      action={dispatch}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <div>
        <label>
          Current Avatar:{" "}
          <UserProfileAvatar
            url={initialValues.avatar_url}
            name={initialValues.username}
          />
        </label>
      </div>

      <input name="files" type="file" required placeholder="avatar" />
      {state.validationErrors && (
        <p style={{ color: "red" }}>
          <ul>
            {state.validationErrors.avatar?.map((e) => <li key={e}>- {e}</li>)}
          </ul>
        </p>
      )}

      <FormSubmitButton>Update Avatar</FormSubmitButton>
    </form>
  );
}
