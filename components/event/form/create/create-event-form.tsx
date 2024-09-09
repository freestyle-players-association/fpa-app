"use client";

import { useFormState } from "react-dom";
import { createEvent } from "@/next-server-functions/event/create-event-action";
import FormSubmitButton from "@/components/common/form-submit-button";
import { useTranslations } from "next-intl";
import { Input } from "@/components/common/input";
import { Textarea } from "@/components/common/textarea";

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
      <Input name="name" required placeholder="Event name" />
      <Textarea
        name="description"
        placeholder="Say something about your event"
      />
      <Input name="start_date" required type="date" placeholder="start date" />
      <Input name="end_date" required type="date" placeholder="end date" />
      <FormSubmitButton>Create Event</FormSubmitButton>
      {displayErrors}
    </form>
  );
}
