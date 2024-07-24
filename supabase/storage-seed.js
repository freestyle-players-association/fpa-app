require("dotenv").config({ path: ".env.local" });

const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");

async function uploadAvatarForTestUsers(supabaseClient) {
  const usersForAvatars = [
    {
      userId: "d21dfe65-42b3-41f8-9481-8d6916782f2a",
      filename: "avatar-seed.jpg",
      mimeType: "image/jpeg",
    },
    {
      userId: "006d3f4c-be0e-4361-8cb2-78d1cf032719",
      filename: "kitara-seed.png",
      mimeType: "image/png",
    },
    {
      userId: "24403d5a-668a-41a2-a9e5-1ed740bc5bfc",
      filename: "uppa-seed.jpeg",
      mimeType: "image/jpeg",
    },
  ];
  for (const ufa of usersForAvatars) {
    const file = fs.readFileSync(`supabase/storage-seed-files/${ufa.filename}`);

    const res = await supabaseClient.storage
      .from("avatars")
      .upload(`${ufa.userId}.${ufa.filename.split(".")[1]}`, file, {
        contentType: "image/jpeg",
        upsert: true,
      });

    if (res.error) {
      throw new Error(`File: ${ufa.filename}, Error: ${res.error}`);
    }
  }
}

async function seedStorage() {
  console.log("seeding storage with files...");

  // Create a single supabase client for interacting with your database
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
  );

  await uploadAvatarForTestUsers(supabase);

  console.log("seeding storage with files was successful");
}

seedStorage();
