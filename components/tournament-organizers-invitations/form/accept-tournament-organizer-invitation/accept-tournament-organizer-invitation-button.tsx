"use client";

import { useFormState } from "react-dom";
import FormSubmitButton from "@/components/common/form-submit-button/form-submit-button";
import { acceptTournamentOrganizersInvitation } from "@/next-server-functions/tournament-organizers/invitation/accept-tournament-organizers-invitation-action";

type AcceptTournamentOrganizerInvitationProps = {
  tournamentId: string;
};

export default async function AcceptTournamentOrganizerInvitationButton({
  tournamentId,
}: AcceptTournamentOrganizerInvitationProps) {
  const [state, dispatch] = useFormState(
    acceptTournamentOrganizersInvitation,
    {},
  );

  return (
    <form action={dispatch}>
      <input hidden name="tournamentId" defaultValue={tournamentId} />
      <FormSubmitButton>Accept</FormSubmitButton>
    </form>
  );
}
