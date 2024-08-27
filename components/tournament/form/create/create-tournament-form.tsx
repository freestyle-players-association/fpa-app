"use client";

import { useFormState } from "react-dom";
import { createTournament } from "@/next-server-functions/tournament/create-tournament-action";
import FormSubmitButton from "@/components/common/form-submit-button/form-submit-button";
import styles from "./create-tournament-form.module.css";

export default function CreateTournamentForm() {
  const [state, dispatch] = useFormState(createTournament, {});

  const errors = state.validationErrors;
  const displayErrors =
    errors && Object.keys(errors).length > 0 ? (
      <div className="text-red-500">
        {Object.entries(errors).map(([field, messages]) => (
          <div key={field}>
            {field}: {messages.join(", ")}
          </div>
        ))}
      </div>
    ) : null;

  return (
    <form action={dispatch} className="flex flex-col gap-2">
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
      <input
        name="start_date"
        required
        type="date"
        placeholder="start date"
        className={styles.textInput}
      />
      <input
        name="end_date"
        required
        type="date"
        placeholder="end date"
        className={styles.textInput}
      />
      <FormSubmitButton>Create Tournament</FormSubmitButton>
      {displayErrors}
    </form>
  );
}
