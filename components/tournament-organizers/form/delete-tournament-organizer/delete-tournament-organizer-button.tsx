"use client";

import { useFormState } from "react-dom";
import { deleteTournamentOrganizerAction } from "@/next-server-functions/tournament-organizers/delete-tournament-organizer-action";
import { PropsWithChildren } from "react";
import FormSubmitButton from "@/components/common/form-submit-button/form-submit-button";

type DeleteTournamentOrganizerInvitationButtonProps = PropsWithChildren<{
  tournamentId: string;
  userId: string;
}>;

export default function DeleteTournamentOrganizerButton({
  tournamentId,
  userId,
  children,
}: DeleteTournamentOrganizerInvitationButtonProps) {
  const [state, dispatch] = useFormState(deleteTournamentOrganizerAction, {});

  return (
    <form action={dispatch}>
      <input hidden name="tournamentId" defaultValue={tournamentId} />
      <input hidden name="userId" defaultValue={userId} />
      <FormSubmitButton>{children}</FormSubmitButton>
    </form>
  );
}
