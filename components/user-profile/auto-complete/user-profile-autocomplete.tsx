"use client";
import React, { useEffect, useState } from "react";
import { Tables } from "@/utils/supabase/database.types";
import { searchUserProfiles } from "@/next-server-functions/user-profile/user-profile-data";
import UserProfileDisplay from "@/components/user-profile/details/user-profile-display/user-profile-display";
import { useDebouncedCallback } from "use-debounce";

type UserProfileAutocompleteProps = {
  onSelectUser: (userProfile: Tables<"userprofiles">) => void;
};

export default function UserProfileAutocomplete(
  props: UserProfileAutocompleteProps,
) {
  const [username, setUsername] = useState("");
  const [foundUserProfiles, setFoundUserProfiles] = useState<
    Tables<"userprofiles">[]
  >([]);

  // somehow React.ChangeEventHandler<HTMLInputElement> is bugged or I am stupid
  const onChangeUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const handleSearchUser = useDebouncedCallback(
    () =>
      searchUserProfiles(username).then((res) => {
        if (res.data) {
          setFoundUserProfiles(res.data);
        }
      }),
    300,
  );

  const handleSelectUser = (userProfile: Tables<"userprofiles">) => {
    props.onSelectUser(userProfile);
    setUsername("");
  };

  useEffect(() => {
    handleSearchUser();
  }, [username]);

  return (
    <div>
      <h3>Search user with username</h3>
      <input
        style={{ color: "black", background: "grey" }}
        type="text"
        value={username}
        onChange={onChangeUsername}
      />
      <ul>
        {foundUserProfiles.map((userProfile) => {
          return (
            <li
              key={userProfile.id}
              onClick={() => handleSelectUser(userProfile)}
            >
              <UserProfileDisplay userProfile={userProfile} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
