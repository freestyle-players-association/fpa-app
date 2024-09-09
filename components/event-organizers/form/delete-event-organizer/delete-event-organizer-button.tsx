"use client";

import { useFormState } from "react-dom";
import { deleteEventOrganizerAction } from "@/next-server-functions/event-organizers/delete-event-organizer-action";
import { PropsWithChildren } from "react";
import FormSubmitButton from "@/components/common/form-submit-button";

type DeleteEventOrganizerInvitationButtonProps = PropsWithChildren<{
  eventId: string;
  userId: string;
}>;

export default function DeleteEventOrganizerButton({
  eventId,
  userId,
  children,
}: DeleteEventOrganizerInvitationButtonProps) {
  const [state, dispatch] = useFormState(deleteEventOrganizerAction, {});

  return (
    <form action={dispatch}>
      <input hidden name="eventId" defaultValue={eventId} />
      <input hidden name="userId" defaultValue={userId} />
      <FormSubmitButton>{children}</FormSubmitButton>
    </form>
  );
}
