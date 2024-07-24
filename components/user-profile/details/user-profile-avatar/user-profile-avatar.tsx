import Image from "next/image";
import styles from "./user-profile-avatar.module.css";

type UserProfileAvatarProps = {
  url: string | null;
  name: string;
};

export default function UserProfileAvatar({
  url,
  name,
}: UserProfileAvatarProps) {
  return url ? (
    <Image
      src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${url}`}
      alt={"avatar"}
      width={42}
      height={42}
      className={styles.container}
    />
  ) : (
    <div className={styles.container}>{name[0]}</div>
  );
}
