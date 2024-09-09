"use client";

import { useFormState } from "react-dom";
import FormSubmitButton from "@/components/common/form-submit-button";
import { acceptEventOrganizersInvitation } from "@/next-server-functions/event-organizers/invitation/accept-event-organizers-invitation-action";

type AcceptEventOrganizerInvitationProps = {
  eventId: string;
};

export default async function AcceptEventOrganizerInvitationButton({
  eventId,
}: AcceptEventOrganizerInvitationProps) {
  const [state, dispatch] = useFormState(acceptEventOrganizersInvitation, {});

  return (
    <form action={dispatch}>
      <input hidden name="eventId" defaultValue={eventId} />
      <FormSubmitButton>Accept</FormSubmitButton>
    </form>
  );
}
