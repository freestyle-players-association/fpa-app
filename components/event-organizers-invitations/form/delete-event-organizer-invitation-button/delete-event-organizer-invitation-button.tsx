"use client";

import { useFormState } from "react-dom";
import { PropsWithChildren } from "react";
import FormSubmitButton from "@/components/common/form-submit-button";
import { deleteEventOrganizerInvitation } from "@/next-server-functions/event-organizers/invitation/delete-event-organizer-invitation-action";

type DeleteEventOrganizerInvitationButtonProps = PropsWithChildren<{
  eventId: string;
  userId: string;
}>;

export default function DeleteEventOrganizerInvitationButton({
  eventId,
  userId,
  children,
}: DeleteEventOrganizerInvitationButtonProps) {
  const [state, dispatch] = useFormState(deleteEventOrganizerInvitation, {});

  return (
    <form action={dispatch}>
      <input hidden name="eventId" defaultValue={eventId} />
      <input hidden name="userId" defaultValue={userId} />
      <FormSubmitButton>{children}</FormSubmitButton>
    </form>
  );
}
