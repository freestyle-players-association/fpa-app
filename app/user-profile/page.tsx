import { getAuthenticatedUserProfile } from "@/next-server-functions/user-profile/user-profile-data";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import UserProfileAvatar from "@/components/user-profile/details/user-profile-avatar/user-profile-avatar";
import ProfileTournamentOrganizerInvitations from "@/components/tournament-organizers-invitations/profile-tournament-organizer-invitations/profile-tournament-organizer-invitations";
import ProfileTournamentList from "@/components/tournament/profile-tournament-list/profile-tournament-list";
import { Suspense } from "react";

export default async function UserProfilePage() {
  const client = createClient();
  const userProfile = await getAuthenticatedUserProfile(client);

  if (!userProfile) {
    redirect("/login");
  }
  return (
    <>
      <UserProfileAvatar
        url={userProfile.avatar_url}
        name={userProfile.username}
      />
      <p>Username: {userProfile.username}</p>
      <p style={{ marginBottom: "1rem" }}>E-Mail: {userProfile.email}</p>
      <Link href={"/user-profile/update"}>Update Profile {"->"}</Link>
      <Suspense fallback={<p>....loading</p>}>
        <ProfileTournamentOrganizerInvitations />
      </Suspense>
      <div style={{ border: "solid 1px", padding: "1rem" }}>
        <h3>Tournaments where you are organizer</h3>
        <Suspense fallback={<p>...loading</p>}>
          <ProfileTournamentList userId={userProfile.id} />
        </Suspense>
      </div>
    </>
  );
}
