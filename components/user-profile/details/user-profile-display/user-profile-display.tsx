import UserProfileAvatar from "@/components/user-profile/details/user-profile-avatar/user-profile-avatar";
import { Tables } from "@/utils/supabase/database.types";

export default function UserProfileDisplay({
  userProfile,
}: {
  userProfile: Tables<"userprofiles">;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        borderBottom: "solid gray",
        padding: "0.25rem 0",
      }}
    >
      <UserProfileAvatar
        url={userProfile.avatar_url}
        name={userProfile.username}
      />
      <p>{userProfile.username}</p>
    </div>
  );
}
