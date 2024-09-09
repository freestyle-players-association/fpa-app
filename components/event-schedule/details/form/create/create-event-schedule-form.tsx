"use client";

import { useFormState } from "react-dom";
import FormSubmitButton from "@/components/common/form-submit-button";
import { createSchedule } from "@/next-server-functions/event-schedule/create-event-schedule-action";
import { Input } from "@/components/ui/input";

export default function CreateScheduleForm({ eventId }: { eventId: string }) {
  const [state, dispatch] = useFormState(createSchedule, {});

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
      <Input name="event_id" required value={eventId} type="hidden" />
      <Input name="place_id" value="" type="hidden" />
      <Input name="lat" value="0" type="hidden" />
      <Input name="lng" value="0" type="hidden" />
      <Input name="full_address" value="" type="hidden" />
      <Input name="description" placeholder="description" />
      <Input name="start_time" required type="datetime-local" />
      <Input name="end_time" required type="datetime-local" />
      <FormSubmitButton>Create Schedule entry</FormSubmitButton>
      {displayErrors}
    </form>
  );
}
