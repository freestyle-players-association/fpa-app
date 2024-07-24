"use client";

import { useFormState } from "react-dom";
import { PropsWithChildren } from "react";
import FormSubmitButton from "@/components/common/form-submit-button/form-submit-button";
import { deleteTournamentOrganizerInvitation } from "@/next-server-functions/tournament-organizers/invitation/delete-tournament-organizer-invitation-action";

type DeleteTournamentOrganizerInvitationButtonProps = PropsWithChildren<{
  tournamentId: string;
  userId: string;
}>;

export default function DeleteTournamentOrganizerInvitationButton({
  tournamentId,
  userId,
  children,
}: DeleteTournamentOrganizerInvitationButtonProps) {
  const [state, dispatch] = useFormState(
    deleteTournamentOrganizerInvitation,
    {},
  );

  return (
    <form action={dispatch}>
      <input hidden name="tournamentId" defaultValue={tournamentId} />
      <input hidden name="userId" defaultValue={userId} />
      <FormSubmitButton>{children}</FormSubmitButton>
    </form>
  );
}
