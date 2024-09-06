"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export const signIn = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect("/login?message=Could not authenticate user");
  }

  return redirect("/tournaments");
};

export const signUp = async (formData: FormData) => {
  const origin = headers().get("origin");
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error || !data.user) {
    return redirect("/login?message=Could not authenticate user");
  }

  await supabase
    .from("userprofiles")
    .insert({ username, id: data.user.id, email })
    .throwOnError();

  return redirect("/tournaments");
};

export const signOut = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  await supabase.auth.refreshSession();
  redirect("/login");
};
