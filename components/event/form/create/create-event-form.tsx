"use client";

import { useFormState } from "react-dom";
import { createEvent } from "@/next-server-functions/event/create-event-action";
import FormSubmitButton from "@/components/common/form-submit-button/form-submit-button";
import styles from "./create-event-form.module.css";
import { useTranslations } from "next-intl";

export default function CreateEventForm() {
  const t = useTranslations("HomePage");
  const [state, dispatch] = useFormState(createEvent, {});

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
      <p>{t("title")}</p>
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
      <FormSubmitButton>Create Event</FormSubmitButton>
      {displayErrors}
    </form>
  );
}
