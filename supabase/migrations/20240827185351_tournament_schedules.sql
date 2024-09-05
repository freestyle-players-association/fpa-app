-- create table tournament_schedules, this will have start_time and end_time and location data from google places

create table if not exists tournament_schedules
(
    id            UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    tournament_id uuid        not null references tournaments (id),
    start_time    timestamptz not null,
    end_time      timestamptz not null,
    description   text,
    place_id      text,
    lat           float,
    lng           float,
    full_address  text
);

-- Create policies for tournament_schedules table.
-- Anyone can read the data.

alter table tournament_schedules
    enable row level security;

create policy "Enable read access for all users"
    on "public"."tournament_schedules"
    as PERMISSIVE
    for SELECT
    to public
    using (
    true
    );

-- Users that are in tournament_organizers for the tournament can create, update, delete tournament_schedules.

CREATE POLICY insert_tournament_schedule_policy ON tournament_schedules
    FOR INSERT
    WITH CHECK (
    EXISTS (SELECT 1
            FROM tournament_organizers
            WHERE tournament_organizers.tournament_id = tournament_schedules.tournament_id
              AND tournament_organizers.userprofile_id = (select auth.uid()))
    );

CREATE POLICY update_tournament_schedule_policy ON tournament_schedules
    FOR UPDATE
    USING (
    EXISTS (SELECT 1
            FROM tournament_organizers
            WHERE tournament_organizers.tournament_id = tournament_schedules.tournament_id
              AND tournament_organizers.userprofile_id = (select auth.uid()))
    )
    WITH CHECK (
    EXISTS (SELECT 1
            FROM tournament_organizers
            WHERE tournament_organizers.tournament_id = tournament_schedules.tournament_id
              AND tournament_organizers.userprofile_id = (select auth.uid()))
    );

CREATE POLICY delete_tournament_schedule_policy ON tournament_schedules
    FOR DELETE
    USING (
    EXISTS (SELECT 1
            FROM tournament_organizers
            WHERE tournament_organizers.tournament_id = tournament_schedules.tournament_id
              AND tournament_organizers.userprofile_id = (select auth.uid()))
    );

