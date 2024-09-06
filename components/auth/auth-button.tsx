import { createClient } from "@/utils/supabase/server";
import { Link } from "@/i18n/routing";
import { signOut } from "@/next-server-functions/user/auth-actions";
import { getAuthenticatedUserProfile } from "@/next-server-functions/user-profile/user-profile-data";
import UserProfileAvatar from "@/components/user-profile/details/user-profile-avatar/user-profile-avatar";

export default async function AuthButton() {
  const supabase = createClient();
  const userProfile = await getAuthenticatedUserProfile(supabase);

  return userProfile ? (
    <div className="flex items-center gap-4">
      <Link href="/user-profile">
        <UserProfileAvatar
          url={userProfile.avatar_url}
          name={userProfile.username}
        />
      </Link>
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  );
}
