-- Create tournament organizers join table
CREATE TABLE IF NOT EXISTS tournament_organizers_invitations
(
    tournament_id  UUID REFERENCES tournaments (id),
    userprofile_id UUID REFERENCES userprofiles (id),
    PRIMARY KEY (tournament_id, userprofile_id)
);

alter table "tournament_organizers_invitations"
    enable row level security;

-- tournament_organizers_invitations can be only selected by tournamentorganizers
CREATE POLICY "Invitations can be selected by organizers"
    ON tournament_organizers_invitations
    AS PERMISSIVE
    FOR SELECT
    TO authenticated
    USING (
    (tournament_organizers_invitations.userprofile_id = (select auth.uid())) OR EXISTS (
        (SELECT 1
         FROM tournamentorganizers
         WHERE tournamentorganizers.tournament_id = tournament_organizers_invitations.tournament_id
           AND tournamentorganizers.userprofile_id = (select auth.uid())))
    );

-- tournament_organizers_invitations can be only inserted by tournamentorganizers
CREATE POLICY "Invitations can be inserted by organizers"
    ON tournament_organizers_invitations
    AS PERMISSIVE
    FOR INSERT
    TO authenticated
    WITH CHECK (
    EXISTS (SELECT 1
            FROM tournamentorganizers
            WHERE tournamentorganizers.tournament_id = tournament_organizers_invitations.tournament_id
              AND tournamentorganizers.userprofile_id = (select auth.uid()))
    );

-- tournament_organizers_invitations can be only deleted by tournamentorganizers
CREATE POLICY "Invitations can be deleted by organizers"
    ON tournament_organizers_invitations
    AS PERMISSIVE
    FOR DELETE
    TO authenticated
    USING (
    (tournament_organizers_invitations.userprofile_id = (select auth.uid())) OR EXISTS (
        (SELECT 1
         FROM tournamentorganizers
         WHERE tournamentorganizers.tournament_id = tournament_organizers_invitations.tournament_id
           AND tournamentorganizers.userprofile_id = (select auth.uid())))
    );