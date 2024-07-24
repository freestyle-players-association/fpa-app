"use client";

import { useFormState } from "react-dom";
import { createTournament } from "@/next-server-functions/tournament/create-tournament-action";
import FormSubmitButton from "@/components/common/form-submit-button/form-submit-button";
import styles from "./create-tournament-form.module.css";

export default function CreateTournamentForm() {
  const [state, dispatch] = useFormState(createTournament, {});

  return (
    <form action={dispatch}>
      <input
        name="name"
        required
        placeholder="name"
        className={styles.textInput}
      />
      <input
        name="description"
        placeholder="description"
        className={styles.textInput}
      />
      <FormSubmitButton>Create Tournament</FormSubmitButton>
    </form>
  );
}
