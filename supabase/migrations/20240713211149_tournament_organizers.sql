-- Create tournament organizers join table
CREATE TABLE IF NOT EXISTS tournamentorganizers
(
    tournament_id  UUID REFERENCES tournaments (id),
    userprofile_id UUID REFERENCES userprofiles (id),
    PRIMARY KEY (tournament_id, userprofile_id)
);

alter table "tournamentorganizers"
    enable row level security;

-- Create policy for INSERT tournament organizers
CREATE POLICY "Organizers of tournament can insert organizers of tournament"
    ON tournamentorganizers
    AS PERMISSIVE
    FOR INSERT
    TO authenticated
    WITH CHECK (
    EXISTS (SELECT 1
            FROM tournamentorganizers
            WHERE tournamentorganizers.tournament_id = tournament_id
              AND tournamentorganizers.userprofile_id = (select auth.uid()))
    );

-- Create policy for UPDATE tournament organizers
CREATE POLICY "Organizers of tournament can update organizers of tournament"
    ON tournamentorganizers
    AS PERMISSIVE
    FOR UPDATE
    TO authenticated
    USING (
    EXISTS (SELECT 1
            FROM tournamentorganizers
            WHERE tournamentorganizers.tournament_id = tournament_id
              AND tournamentorganizers.userprofile_id = (select auth.uid()))
    );

-- Create policy for DELETE tournament organizers
CREATE POLICY "Organizers of tournament can remove organizers from tournament"
    ON tournamentorganizers
    AS PERMISSIVE
    FOR DELETE
    TO authenticated
    USING (
    EXISTS (SELECT 1
            FROM tournamentorganizers
            WHERE tournamentorganizers.tournament_id = tournament_id
              AND tournamentorganizers.userprofile_id = (select auth.uid()))
    );

-- Create policy for UPDATE tournament
CREATE POLICY "Organizers of tournament can update tournament"
    ON tournaments
    AS PERMISSIVE
    FOR UPDATE
    TO authenticated
    USING (
    EXISTS (SELECT 1
            FROM tournamentorganizers
            WHERE tournamentorganizers.tournament_id = tournaments.id
              AND tournamentorganizers.userprofile_id = (select auth.uid()))
    );

-- Create policy for DELETE tournament
CREATE POLICY "Organizers of tournament can delete tournament"
    ON tournaments
    AS PERMISSIVE
    FOR DELETE
    TO authenticated
    USING (
    EXISTS (SELECT 1
            FROM tournamentorganizers
            WHERE tournamentorganizers.tournament_id = tournaments.id
              AND tournamentorganizers.userprofile_id = (select auth.uid()))
    );

CREATE POLICY "Authenticated users can select tournament organizers"
    ON tournamentorganizers
    AS PERMISSIVE
    FOR SELECT
    TO authenticated
    USING (true);